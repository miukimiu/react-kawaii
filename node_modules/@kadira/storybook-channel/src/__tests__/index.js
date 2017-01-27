import { expect } from 'chai';
import sinon from 'sinon';
import Channel from '../';

describe('Channel', function () {
  let transport = null;
  let channel = null;

  beforeEach(function () {
    transport = { setHandler: sinon.spy(), send: sinon.spy() };
    channel = new Channel({ transport });
  });

  describe('constructor', function () {
    it('should set the handler', function () {
      expect(transport.setHandler.calledOnce).to.equal(true);
    });
  });

  describe('method:addListener', function () {
    it('should call channel.on with args', function () {
      channel.on = sinon.spy();
      channel.addListener(1, 2);
      expect(channel.on.calledOnce).to.equal(true);
      expect(channel.on.calledWith(1, 2)).to.equal(true);
    });
  });

  describe('method:emit', function () {
    it('should call transport.send', function () {
      transport.send = sinon.spy();
      channel.emit('test-type', 1, 2, 3);
      const expected = {type: 'test-type', args: [ 1, 2, 3 ]};
      expect(transport.send.calledOnce).to.equal(true);
      const event = transport.send.args[0][0];
      expect(event.from).to.be.a('string');
      delete event.from;
      expect(event).to.deep.equal(expected);
    });
  });

  describe('method:eventNames', function () {
    it('should return an array of strings', function () {
      channel.on('type-1', 11);
      channel.on('type-2', 21);
      channel.on('type-2', 22);
      const expected = [ 'type-1', 'type-2' ];
      expect(channel.eventNames()).to.deep.equal(expected);
    });
  });

  describe('method:listenerCount', function () {
    it('should return the correct count', function () {
      channel.on('type-1', 11);
      channel.on('type-2', 21);
      channel.on('type-2', 22);
      expect(channel.listenerCount('type-1')).to.equal(1);
      expect(channel.listenerCount('type-2')).to.equal(2);
    });
  });

  describe('method:listeners', function () {
    it('should return an array of listeners', function () {
      channel.on('type-1', 11);
      channel.on('type-2', 21);
      channel.on('type-2', 22);
      expect(channel.listeners('type-1')).to.deep.equal([ 11 ]);
      expect(channel.listeners('type-2')).to.deep.equal([ 21, 22 ]);
    });
  });

  describe('method:on', function () {
    it('should add event listeners', function () {
      channel.on('type-1', 11);
      channel.on('type-2', 21);
      channel.on('type-2', 22);
      const expected = {
        'type-1': [ 11 ],
        'type-2': [ 21, 22 ],
      };
      expect(channel._listeners).to.deep.equal(expected);
    });

    it('should call event listeners on event', function () {
      let received = [];
      channel.on('type-1', n => received.push(n));
      channel._handleEvent({type: 'type-1', args: [ 11 ]});
      channel._handleEvent({type: 'type-1', args: [ 12 ]});
      expect(received).to.deep.equal([ 11, 12 ]);
    });
  });

  describe('method:once', function () {
    it('should add event listeners', function () {
      channel.once('type-1', 11);
      channel.once('type-2', 21);
      channel.once('type-2', 22);
      expect(channel._listeners['type-1'].length).to.equal(1);
      expect(channel._listeners['type-2'].length).to.equal(2);
    });

    it('should call event listeners only once', function () {
      let received = [];
      channel.once('type-1', n => received.push(n));
      channel._handleEvent({type: 'type-1', args: [ 11 ]});
      channel._handleEvent({type: 'type-1', args: [ 12 ]});
      expect(received).to.deep.equal([ 11 ]);
    });
  });

  describe('method:prependListener', function () {
    it('should add event listeners', function () {
      channel.prependListener('type-1', 11);
      channel.prependListener('type-2', 21);
      channel.prependListener('type-2', 22);
      const expected = {
        'type-1': [ 11 ],
        'type-2': [ 22, 21 ],
      };
      expect(channel._listeners).to.deep.equal(expected);
    });
  });

  describe('method:prependOnceListener', function () {
    it('should add event listeners', function () {
      channel.prependOnceListener('type-1', 11);
      channel.prependOnceListener('type-2', 21);
      channel.prependOnceListener('type-2', 22);
      expect(channel._listeners['type-1'].length).to.equal(1);
      expect(channel._listeners['type-2'].length).to.equal(2);
    });

    it('should call event listeners only once', function () {
      let received = [];
      channel.prependOnceListener('type-1', n => received.push(n));
      channel._handleEvent({type: 'type-1', args: [ 11 ]});
      channel._handleEvent({type: 'type-1', args: [ 12 ]});
      expect(received).to.deep.equal([ 11 ]);
    });
  });

  describe('method:removeAllListeners', function () {
    it('should remove all listeners', function () {
      channel.on('type-1', 11);
      channel.on('type-2', 21);
      channel.on('type-2', 22);
      channel.removeAllListeners();
      expect(channel._listeners).to.deep.equal({});
    });

    it('should remove all listeners for a type', function () {
      channel.on('type-1', 11);
      channel.on('type-2', 21);
      channel.on('type-2', 22);
      channel.removeAllListeners('type-2');
      expect(channel._listeners).to.deep.equal({ 'type-1': [ 11 ] });
    });
  });

  describe('method:removeListener', function () {
    it('should remove all listeners', function () {
      channel.on('type-1', 11);
      channel.on('type-2', 21);
      channel.on('type-2', 22);
      const expected = {
        'type-1': [ 11 ],
        'type-2': [ 21 ],
      };
      channel.removeListener('type-2', 22);
      expect(channel._listeners).to.deep.equal(expected);
    });
  });

  describe('_miscellaneous', function () {
    it('should ignore if event came from itself', function () {
      let received = [];
      channel.on('type-1', n => received.push(n));
      channel._handleEvent({type: 'type-1', args: [ 11 ]});
      channel._handleEvent({type: 'type-1', args: [ 12 ], from: channel._sender});
      expect(received).to.deep.equal([ 11 ]);
    });
  });
});
