var xhr = Titanium.Network.createHTTPClient();

var win = Titanium.UI.currentWindow;

xhr.onload = function()
{
    var data = [];
    var doc = this.responseXML.documentElement;
    var elements = doc.getElementsByTagName("AttractionName");
    for (var i=0;i<elements.length;i++) {
        var row = Ti.UI.createTableViewRow({
        	hasChild:true,
        	height:'80dp'
        });
        row.title = elements.item(i).getAttribute("AttractionName");
        desc = doc.getElementsByTagName("AttractionName").item(i).text;
        attractionDesc = doc.getElementsByTagName("AttractionDescription").item(i).text;
        attractionLocation = doc.getElementsByTagName("Location").item(i).text;
        attractionYoutube = doc.getElementsByTagName("YoutubeURL").item(i).text;
        attractionPicture = doc.getElementsByTagName("PictureURL").item(i).text;

       
        var mammalLabel = Ti.UI.createLabel({
        	text: desc,
        	color:'#000000',
        	font:{fontSize:'20dp'},
        	textAlign:'left',
        	left:'100dp'        	
        });
        row.add(mammalLabel);
        row.item = desc;
        row.item2 = attractionDesc;
        row.item3 = attractionLocation;
        row.item4 = attractionYoutube;
        row.item5 = attractionPicture;
        data.push(row);}
   
    var tableview = Titanium.UI.createTableView({
       data:data,
       height:'auto',
    });
    tableview.setData(data);
    Titanium.UI.currentWindow.add(tableview); 
    tableview.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({
			url:'specificattraction.js', 
   			title:'',
   			backgroundcolor:'black',
   			fullscreen:true });
			var b = Titanium.UI.createButton({
				title:'Close',
				style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			w.setLeftNavButton(b);
			b.addEventListener('click',function()
			{
				w.close();
			});
			w.attraction = e.rowData.item;
			w.attractionDesc = e.rowData.item2;
			w.location = e.rowData.item3;
			w.youTube = e.rowData.item4;
			w.pictureURL = e.rowData.item5;
			
			w.open({fullscreen:true});
		});

};
xhr.open('GET','http://markmyers.me/hhpz/xml/Attractions.xml');
xhr.send();//declare the http client object