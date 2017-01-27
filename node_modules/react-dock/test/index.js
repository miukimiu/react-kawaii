import React from 'react/addons';
import Dock from '../src/Dock';
import { expect } from 'chai';

const TestUtils = React.addons.TestUtils;

describe('Dock component', function() {
  it('should have shallow rendering', function() {

    const shallowRenderer = TestUtils.createRenderer();
    const DockEl = <Dock />;
    shallowRenderer.render(DockEl);

    const result = shallowRenderer.getRenderOutput();

    expect(DockEl.props).to.eql({
      position: 'left',
      zIndex: 99999999,
      fluid: true,
      defaultSize: 0.3,
      dimMode: 'opaque',
      duration: 200
    });
    expect(result.type).to.equal('div');
  });
});
