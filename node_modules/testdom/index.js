module.exports = function(markup, additional_globals) {
    if (typeof document !== 'undefined') return
    var jsdom           = require("jsdom").jsdom
    global.document     = jsdom(markup || '')
    global.window       = document.defaultView
    global.navigator    = window.navigator
    global.HTMLElement  = window.HTMLElement
    if (typeof additional_globals == 'object') Object.keys(additional_globals).forEach(function(global_key) {
        var additional_global = additional_globals[global_key];
        if(typeof additional_global === 'string')
            additional_global = require(additional_global);
        global[global_key] = additional_global;
    })
}
