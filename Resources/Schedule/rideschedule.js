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

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
    var data = [];
    var doc = this.responseXML.documentElement;
    var elements = doc.getElementsByTagName("times");
    for (var i=0;i<elements.length;i++) {
        var row = Ti.UI.createTableViewRow({
        	height:'80dp'
        });
        row.title = elements.item(i).getAttribute("Times");
        hour = doc.getElementsByTagName("time").item(i).text;

        var hoursLabel = Ti.UI.createLabel({
        	text: hour,
        	color:'#000000',
        	font:{fontSize:'20dp'},
        	textAlign:'left',
        	left:'100dp'
        });
        
        row.add(hoursLabel);
        data.push(row);}
   
    var tableview = Titanium.UI.createTableView({
       top:'50dp',
       data:data,
       height:'auto',
    });
    tableview.setData(data);
    Titanium.UI.currentWindow.add(tableview); 
 

};

win.add(TitleBar);
win.add(lblTitle);
xhr.open('GET','http://hhpz.org/mobile/cf/rideinfo.cfm');
xhr.send();//declare the http client object