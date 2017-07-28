var gulp=require("gulp");
var postcss=require("gulp-postcss")

var autoprefixer=require("autoprefixer"); //处理浏览器私有前缀  浏览器前缀
var cssnext=require("cssnext"); 		  //使用css未来的语法	样式调整如：background: rgba(255, 0, 0, 0.9)
var precss=require("precss");			  //想sass的函数  逻辑判断

gulp.task("default",function(){
	var processors=[autoprefixer,cssnext,precss];
	return gulp.src("css/*.css")
		.pipe(postcss(processors))
		.pipe(gulp.dest('newcss/'))  //制定文件夹复制一份css样式
})

