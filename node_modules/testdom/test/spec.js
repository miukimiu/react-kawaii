var assert  = require('assert')
var testdom = require('../index')('<html><body><div id="div"></div></body></html>', {
    localStorage : 'localStorage',
    indexedDB: { deleteDatabase: function() { this.deletedDb = 'im_deleted'; } }
})

describe('testdom', function() {

    it('has a document', function() {
        assert(document != undefined)
    })

    it('has the passed markup', function() {
        var div = document.querySelectorAll('#div')
        assert(div.length, 1)
    })

    it('can load additional globals', function() {
        assert(localStorage != undefined)
        assert(localStorage.setItem != undefined)
        assert(localStorage.removeItem != undefined)
    })

    it('can load arbitrarily defined globals', function() {
        indexedDB.deleteDatabase();
        assert(indexedDB != undefined);
        assert(indexedDB.deleteDatabase != undefined);
        assert(indexedDB.deletedDb === 'im_deleted');
    });

})
