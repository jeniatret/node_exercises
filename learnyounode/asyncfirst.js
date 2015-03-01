var fs = require('fs');
var file_path = process.argv[2]

fs.readFile(file_path, 'utf8', function (error, file_content){
	var lines = file_content.toString().split('\n').length - 1;
	console.log(lines);
});




