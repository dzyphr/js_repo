function sendWebHook()
{
        global.XMLHttpRequest = require('xhr2');
        var xhr = new XMLHttpRequest();
        const request = new XMLHttpRequest();
        request.open("POST", ""); //paste your webhook link in the second argument
        request.setRequestHeader('Content-type', 'application/json');
        const data =
        {
                username: "Test",//Needs to match your webhook bots name
		avatar_url: "", //use a picture from the internet as the profile picure of the webhook bot
		content: "test"//content to send into the forum
        }
        request.send(JSON.stringify(data));
}

sendWebHook();
