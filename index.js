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

    // 初始化 less 查询路径
    var paths = [file.dirname, fis.project.getProjectPath()];
    var confPaths = conf.paths;
    if (confPaths) {
        paths.forEach(function (item) {
            if (_.indexOf(confPaths, item) === -1) {
                confPaths.push(item);
            }
        });
    }
    else {
        conf.paths = paths;
    }

    less.render(content, conf, function (err, result) {
        if (err) {
            throw err;
        }
        content = result.css;
        result.imports.forEach(function (path) {
            file.cache.addDeps(path);
        });
    });

    return content;
};
