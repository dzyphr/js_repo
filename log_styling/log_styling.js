const outputText = "\“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.\”\n― Albert Einstein.";

const txtCol = 
{
	"yellow": "\x1b[33m",
	"black": "\x1b[30m",
	"red": "\x1b[31m",
	"green": "\x1b[32m",
	"blue": "\x1b[34m",
	"magenta": "\x1b[35m",
	"cyan": "\x1b[36m",
	"white": "\x1b[37m",
}

const bgCol = 
{
	"black": "\x1b[40m",
	"red": "\x1b[41m",
	"green": "\x1b[42m",
	"yellow": "\x1b[43m",
	"blue": "\x1b[44m",
	"magenta": "\x1b[45m",
	"cyan": "\x1b[46m",
	"white": "\x1b[47m",
}

const misc = 
{
	"reset": "\x1b[0m", //used to end the styled text
	"bright": "\x1b[1m",
	"dim": "\x1b[2m",
	"underscore": "\x1b[4m",
	"blink": "\x1b[5m",
	"reverse": "\x1b[7m",
	"hidden": "\x1b[8m", //hides text in output but technically still prints it, 
	//reveal by copying whole outputand pasting in a web brower
}

function styleLog(style, text)
{
	var out = style + text + misc["reset"];
	console.log(out);
}

styleLog(txtCol["cyan"] + bgCol["blue"] + misc["blink"] + misc["underscore"], outputText);
