let gulp = require("gulp");
let connect = require("gulp-connect");
let proxy = require("http-proxy-middleware");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");
let rename = require("gulp-rename");
let babel = require("gulp-babel");
let sass = require("gulp-sass-china");

// 需求：实现文件的转存，自动转存
gulp.task("save",()=>{
    // 找到源文件
	gulp.src(["./src/sass/details.scss"])
    // gulp.src(["./src/sass/listss.scss"])
    .pipe(gulp.dest("../Bookcity/src/css"))
    .pipe(connect.reload());
})

// gulp.watch()        监听方法
// 第一个参数：要监听的文件
// 第二个参数：当监听的文件发生变化时，执行的指令

// 实现自动转存
gulp.task("save2",()=>{
    gulp.watch(["./src/sass/*.scss"],["save","sass"])
})


// 使用gulp的connect插件，开启服务器
// 浏览器自动刷新：开发环境修改代码，上线环境自动更新，浏览器自动刷新
gulp.task("save3",()=>{
    connect.server({
        root:"server",
        port:666,
        livereload:true,
        middleware: function(connect, opt) {
            return [
                proxy('/api',  {
                    target: 'https://api.register.html/',    //代理的目标地址
                    changeOrigin:true,
                    pathRewrite:{    //路径重写规则
                        '^/api':''
                    }
                })
            ]
        }
    })
})

// 批量执行指令的指令
gulp.task("start",["save2","save3"])



// ES6转ES5
// gulp.task("sTf",()=>{
//     gulp.src("./src/js/index.js")
//     .pipe(babel())
//     .pipe(gulp.dest("server/js"))
// })

// sass转css
gulp.task("sass",()=>{
	gulp.src("./src/sass/details.scss")
    // gulp.src("./src/sass/listss.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("../Bookcity/src/css"))
    .pipe(connect.reload())
})


