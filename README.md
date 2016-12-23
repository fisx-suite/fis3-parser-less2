fis3-parser-less2
========

[![Dependency Status](https://david-dm.org/wuhy/fis3-parser-less2.svg)](https://david-dm.org/wuhy/fis3-parser-less2) [![devDependency Status](https://david-dm.org/wuhy/fis3-parser-less2/dev-status.svg)](https://david-dm.org/wuhy/fis3-parser-less2#info=devDependencies) [![NPM Version](https://img.shields.io/npm/v/fis3-parser-less2.svg?style=flat)](https://npmjs.org/package/fis3-parser-less2)

> A parser for fis3 to compile less files.


## How to use
 
### Install
 
```shell
npm install fis3-parser-less2 -g
```

### Add configure to `fis-conf.js`

```javasciprt
fis.match('*.less', {
    parser: 'less2',
    rExt: '.css'
});
```

Custom parse options:

```javasciprt
fis.match('*.less', {
    parser: fis.plugin('less2', {
        sourceMap: true
    }),
    rExt: '.css'
});
```

Available options, please refer to [less](http://lesscss.org/).


 
