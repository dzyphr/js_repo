const fs = require('fs');
let fileContents = "test data";
let fileName = "yourFileName";
let extention = ".txt";
fileName = fileName + extention;
fs.writeFile
(
	fileName, fileContents, (err) =>
	{
		if (err) throw err;
	}
)
