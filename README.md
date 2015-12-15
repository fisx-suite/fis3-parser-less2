fis3-parser-less2
========

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


 
