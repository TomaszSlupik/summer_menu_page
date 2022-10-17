const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");


function convertImages(done) {
	src("./src/img/*").pipe(imagemin()).pipe(dest("./dist/img"));
	done();
}

exports.default = convertImages



