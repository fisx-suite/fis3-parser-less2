/**
 * @file fis less parser 模块，虽然 fis 之前提供过该模块，但其一些配置选项写死了。。
 * @author sparklewhy@gmail.com
 */

'use strict';

var less = require('less');
module.exports = function (content, file, conf) {
    // 初始化配置
    var _ = fis.util;
    conf = _.assign({
        syncImport: true,
        relativeUrls: true
    }, conf);

    var sourceMap = conf.sourceMap;
    var sourceMapFile;
    if (sourceMap) {
        if (_.isBoolean(sourceMap)) {
            sourceMap = {};
        }

        var sourceMapPath = file.realpath + '.map';
        sourceMapFile = fis.file.wrap(sourceMapPath);
        sourceMapFile.setContent('');
        var path = require('path');
        conf.sourceMap = _.assign({
            outputSourceFiles: true,
            sourceMapURL: path.basename(sourceMapFile.url),
            sourceMapBasepath: fis.project.getProjectPath(),
            sourceMapRootpath: '/source',
            sourceMapFileInline: false
        }, sourceMap);
    }

    // 初始化 less 查询路径
    var confPaths = conf.paths || [];
    [file.dirname, fis.project.getProjectPath()].forEach(function (item) {
        if (_.indexOf(confPaths, item) === -1) {
            confPaths.push(item);
        }
    });
    conf.paths = confPaths;

    less.render(content, conf, function (err, result) {
        if (err) {
            throw err;
        }
        content = result.css;

        if (sourceMapFile && result.map) {
            sourceMapFile.setContent(result.map.toString());
            file.derived.push(sourceMapFile);
        }

        result.imports.forEach(function (path) {
            file.cache.addDeps(path);
        });
    });
    return content;
};
