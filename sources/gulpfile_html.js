module.exports = function (gulp, plugins) {
    function onError(e) {
        console.log(e.toString());
        this.emit('end');
    }

    /* Paths */
    let src = {
            html: './html/*.html'
        },
        dist = {
            html: '../'
        };

    let optionsHtml = {
        indent_with_tabs: true,
        max_preserve_newlines: 0,
        indentSize: 2,
        unformatted: ['abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript', 'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small', 'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text', 'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt']
    };
    /* End Paths */

  return function () {
    return gulp.src(src.html)
        .pipe(plugins.plumber({errorHandler: onError}))
        .pipe(plugins.fileInclude())
        .pipe(plugins.htmlmin({removeComments: true}))
        .pipe(plugins.htmlBeautify(optionsHtml))
        .pipe(plugins.changedInPlace({firstPass: true}))
        .pipe(gulp.dest(dist.html))
  }
}
