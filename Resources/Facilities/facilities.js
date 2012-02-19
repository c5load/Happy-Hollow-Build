var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
    var data = [];
    var doc = this.responseXML.documentElement;
    var elements = doc.getElementsByTagName("FacilityName");
    for (var i=0;i<elements.length;i++) {
        var row = Ti.UI.createTableViewRow({
        	hasChild:true,
        	height:'80dp'
        });
        row.title = elements.item(i).getAttribute("FacilityName");
        desc = doc.getElementsByTagName("FacilityName").item(i).text;
        facilityDesc = doc.getElementsByTagName("Description").item(i).text;
        facilityLocation = doc.getElementsByTagName("Location").item(i).text;
        facilityPicture = doc.getElementsByTagName("PictureURL").item(i).text;

       
        var facilityLabel = Ti.UI.createLabel({
        	image:'arrowrest.png',
        	text: desc,
        	color:'#000000',
        	font:{fontSize:'20dp'},
        	textAlign:'left',
        	left:'100dp'
        });
        
            var facilityImage = Ti.UI.createImageView({
        	url: facilityPicture,
        	height: '60dp',
        	width: '60dp',
        	left: '0dp'
        });
        
        row.add(facilityLabel);
        row.add(facilityImage);
        row.item = desc;
        row.item2 = facilityDesc;
        row.item3 = facilityLocation;
        row.item4 = facilityPicture;
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
			url:'specificFacility.js', 
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
			w.facility = e.rowData.item;
			w.facilityDesc = e.rowData.item2;
			w.location = e.rowData.item3;
			w.pictureURL = e.rowData.item4;
			
			w.open({fullscreen:true});
		});

};
xhr.open('GET','http://markmyers.me/hhpz/xml/Facilities.xml');
xhr.send();//declare the http client object