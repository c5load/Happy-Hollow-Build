var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
    var data = [];
    var doc = this.responseXML.documentElement;
    var elements = doc.getElementsByTagName("GreenTourName");
    for (var i=0;i<elements.length;i++) {
        var row = Ti.UI.createTableViewRow({
        	hasChild:true,
        	height:'80dp'
        });
        row.title = elements.item(i).getAttribute("GreenTourName");
        desc = doc.getElementsByTagName("GreenTourName").item(i).text;
        greentourDesc = doc.getElementsByTagName("Description").item(i).text;
        greentourLocation = doc.getElementsByTagName("Location").item(i).text;
		greentourPicture=doc.getElementsByTagName("PictureURL").item(i).text;
        greentourThumbnail = doc.getElementsByTagName("ThumbnailURL").item(i).text;
               
        var greentourLabel = Ti.UI.createLabel({
        	text: desc,
        	color:'#000000',
        	font:{fontSize:'20dp'},
        	textAlign:'left',
        	left:'100dp'
        });
        
        var greentourImage = Ti.UI.createImageView({
        	url: greentourThumbnail,
        	height: '60dp',
        	width: '60dp',
        	left: '0dp'
        });
        
        row.add(greentourLabel);
        row.add(greentourImage);
        row.item = desc;
        row.item2 = greentourDesc;
        row.item3 = greentourLocation;
        row.item4 = greentourPicture;
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
			url:'specificgreentour.js', 
   			title:'',
   			backgroundcolor:'#FFFFFF',
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
			w.greentour = e.rowData.item;
			w.greentourDesc = e.rowData.item2;
			w.location = e.rowData.item3;
			w.pictureURL = e.rowData.item4;
			
			w.open({fullscreen:true});
		});

};
xhr.open('GET','http://hhpz.org/mobile/xml/export.xml');
xhr.send();//declare the http client object