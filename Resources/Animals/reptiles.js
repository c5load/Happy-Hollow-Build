var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
    var data = [];
    var doc = this.responseXML.documentElement;
    var elements = doc.getElementsByTagName("AnimalName");
    for (var i=0;i<elements.length;i++) {
        var row = Ti.UI.createTableViewRow({
        	hasChild:true,
        	height:'80dp',
        	backgroundColor:'#C8C8C8'
        });
        row.title = elements.item(i).getAttribute("AnimalName");
        desc = doc.getElementsByTagName("AnimalName").item(i).text;
        animalDesc = doc.getElementsByTagName("Description").item(i).text;
        animalScientific = doc.getElementsByTagName("ScientificName").item(i).text;
        animalClass = doc.getElementsByTagName("Class").item(i).text;
        animalLocation = doc.getElementsByTagName("Location").item(i).text;
        animalYoutube = doc.getElementsByTagName("YoutubeURL").item(i).text;
        animalPicture = doc.getElementsByTagName("PictureURL").item(i).text;

       
        if (animalClass == "Reptile"){
      	var reptileLabel = Ti.UI.createLabel({
        	text: desc,
        	color:'#000000',
        	font:{fontSize:'20dp'},
        	height: '60dp',
        	textAlign:'left',
        	left:'100dp'
        });
        var reptileImage = Ti.UI.createImageView({
        	url: animalPicture,
        	height: '60dp',
        	width: '60dp',
        	left: '0dp'
        });
        row.add(reptileLabel);
        row.add(reptileImage);
        row.item = desc;
        row.item2 = animalDesc;
        row.item3 = animalScientific;
        row.item4 = animalClass;
        row.item5 = animalLocation;
        row.item6 = animalYoutube;
        row.item7 = animalPicture;
        data.push(row);}
    } 
    var tableview = Titanium.UI.createTableView({
       data:data,
       height:'auto',
    });
    tableview.setData(data);
    Titanium.UI.currentWindow.add(tableview); 
    tableview.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({
			url:'specificanimal.js', 
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
			w.animal = e.rowData.item;
			w.animalDesc = e.rowData.item2;
			w.scientific = e.rowData.item3;
			w.classtype = e.rowData.item4;
			w.location = e.rowData.item5;
			w.youTube = e.rowData.item6;
			w.pictureURL = e.rowData.item7;
			
			w.open({fullscreen:true});
		});

};
xhr.open('GET','http://markmyers.me/hhpz/xml/Animals.xml');
xhr.send();//declare the http client object