fis3-parser-less
========

> A parser for fis3 to compile less files.


## How to use
 
### Install
 
```shell
npm install fis3-parser-less -g
```

### Add configure to `fis-conf.js`

```javasciprt
fis.match('*.less', {
    parser: 'less',
    rExt: '.css'
});
```

Custom parse options:

```javasciprt
fis.match('*.less', {
    parser: fis.plugin('less', {
        sourceMap: true
    }),
    rExt: '.css'
});
```

Available options, please refer to [less](http://lesscss.org/).


 
