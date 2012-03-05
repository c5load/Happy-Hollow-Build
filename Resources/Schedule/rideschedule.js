var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'schedulebackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: '50dp'
});

var lblTitle=Titanium.UI.createLabel({
	text:"Schedule",
	color:'white',
	font:{
		fontSize:'30dp',
		fontWeight:'bold',
	},
	width: pWidth,
	left:pWidth/4, 
    top: '0dp',
    height: '50dp'
});




var data = [];

var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'rideinfo.xml');
var xmltext = file.read().text;
var doc = Ti.XML.parseString(xmltext);
var elements = doc.getElementsByTagName("ride");

for (var i=0;i<elements.length;i++) {
    var row = Ti.UI.createTableViewRow({
    	height:'80dp'
    });
    row.title = elements.item(i).getAttribute("Title");
    title = doc.getElementsByTagName("title").item(i).text;
    var hours = [];   
    var titleLabel = Ti.UI.createLabel({
    	text: title,
    	color:'#000000',
    	font:{fontSize:'20dp'},
    	textAlign:'left',
    	left:'0dp'
        });

        row.add(titleLabel);
        data.push(row);}
   
    var tableview = Titanium.UI.createTableView({
       top:'50dp',
   data:data,
   height:'auto',
});
tableview.setData(data);
Titanium.UI.currentWindow.add(tableview); 

tableview.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({
			url:'specificride.js', 
			navBarHidden:true, 
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
			w.open({fullscreen:true});
		});


win.add(TitleBar);
win.add(lblTitle);
