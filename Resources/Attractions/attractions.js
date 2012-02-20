var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/ridesattractionsrest.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: '50dp'
});

var lblTitle=Titanium.UI.createLabel({
	text:"Rides & Attractions",
	textAlign:'center', 
	color:'white',
	font:{
		fontSize:'20dp',
		fontWeight:'bold',
	},
	width: pWidth, 
    top: '0dp',
    left:'0dp',    
    height: '50dp'
});

var buttonHome = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Attractions/homeresting.png',
	backgroundSelectedImage:'/Attractions/homeselected.png',
	top: pHeight*.02, 
	left:pWidth*.03,
	width:'60dp',
	height:'30dp',});
buttonHome.addEventListener('click', function()
{winHomeScreen.open();});

var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Attractions/scheduleresting.png',
	backgroundSelectedImage:'/Attractions/scheduleselected.png',
	top:pHeight*.02,
	left:pWidth*.8,
	width:'60dp',
	height:'30dp',});
buttonHome.addEventListener('click', function()
{winSchedule.open();});

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
        	height:'80dp',
        	backgroundImage: '../backgroundresting.png',
        	selectedBackgroundImage: '../ridesattractionsrest.png'        	
        });
        row.title = elements.item(i).getAttribute("AttractionName");
        desc = doc.getElementsByTagName("AttractionName").item(i).text;
        attractionDesc = doc.getElementsByTagName("AttractionDescription").item(i).text;
        attractionLocation = doc.getElementsByTagName("Location").item(i).text;
        attractionYoutube = doc.getElementsByTagName("YoutubeURL").item(i).text;
        attractionPicture = doc.getElementsByTagName("PictureURL").item(i).text;

       
        var attractionLabel = Ti.UI.createLabel({
        	text: desc,
        	color:'#000000',
        	font:{fontSize:'20dp'},
        	textAlign:'left',
        	left:'100dp'        	
        });
        
        var attractionImage = Ti.UI.createImageView({
        	url: attractionPicture,
        	height: '60dp',
        	width: '60dp',
        	left: '0dp'
        });
        
        row.add(attractionLabel);
        row.add(attractionImage);
        row.item = desc;
        row.item2 = attractionDesc;
        row.item3 = attractionLocation;
        row.item4 = attractionYoutube;
        row.item5 = attractionPicture;
        data.push(row);}
   
    var tableview = Titanium.UI.createTableView({
       data:data,
       top:'50dp',
       height:'auto',
    });
    tableview.setData(data);
    Titanium.UI.currentWindow.add(tableview); 
    tableview.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({
			url:'specificattraction.js',
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
			w.attraction = e.rowData.item;
			w.attractionDesc = e.rowData.item2;
			w.location = e.rowData.item3;
			w.youTube = e.rowData.item4;
			w.pictureURL = e.rowData.item5;
			
			w.open({fullscreen:true});
		});

};
win.add(TitleBar);
win.add(lblTitle);
win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
xhr.open('GET','http://markmyers.me/hhpz/xml/Attractions.xml');
xhr.send();//declare the http client object