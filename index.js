var livescript = require('livescript');
var react = require('react-tools/main');
var sysPath = require('path');

function LiveScriptReactCompiler(config) {
    this.config = config;
}

LiveScriptReactCompiler.prototype.brunchPlugin = true;
LiveScriptReactCompiler.prototype.type = 'javascript';
LiveScriptReactCompiler.prototype.extension = 'ls';

LiveScriptReactCompiler.prototype.compile = function(data, path, callback) {
    var err, error, jsx, result;
    try {
        jsx = livescript.compile(data, {
            bare: true,
            header: false
        });
        return result = react.transformWithDetails(jsx, {
            harmony: true,
            sourceMap: false,
            stripTypes: false
        });
    } catch (_error) {
        err = _error;
        return error = err;
    } finally {
        callback(error, result);
    }
};

module.exports = LiveScriptReactCompiler;
