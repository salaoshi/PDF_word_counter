//Word Counter v1.01
// (c) 2005 Marco Lara.

app.addMenuItem({ cName: "Word Count", cParent: "Tools", cEnable: "event.rc = event.target != null", cExec: "wordCount()"});

function wordCount()
{
	//app.drawString("Please wait");
	//app.drawString("Hello, Java world!",20, 20);
	//app.alert("hhh");
	var counter = 0;
	for (var i = 0; i < this.numPages; i++)	counter += this.getPageNumWords(i);
	app.alert("Words in this document: " + counter , 3 );
	
}
