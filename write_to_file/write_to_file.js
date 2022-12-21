function writeToFile(fileName, extention, fileContents)
{
	const fs = require('fs');
	fileName = fileName + extention;
	fs.writeFile
	(
		fileName, fileContents, (err) =>
		{
			if (err) throw err;
		}
	)
}

writeToFile("myFile", ".txt", "\ntestdata\n");
