var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;


var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/ParkMap/parkmapbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});

var lblTitle=Titanium.UI.createLabel({
	text:"Park Map",
	textAlign:'center', 	
	color:'white',
	font:{
		fontSize:'25dp',
		fontWeight:'bold',
	},
	width: pWidth,
    top: '0dp',
    left:'0dp',
    height: pHeight*.1
});

var buttonHome = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'homeresting.png',
	backgroundSelectedImage:'homeselected.png',
	top: pHeight*.02, 
	left:pWidth*.04,
	width:pWidth*.19,
	height:pHeight*.07,});
buttonHome.addEventListener('click', function()
{winHomeScreen.open();});

var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'scheduleresting.png',
	backgroundSelectedImage:'scheduleselected.png',
	top:pHeight*.02,
	left:pWidth*.78,
	width:pWidth*.17,
	height:pHeight*.07,});
buttonHome.addEventListener('click', function()
{winSchedule.open();});
		
var buttonAnimals = Titanium.UI.createButton({
	color:'black',
	backgroundColor:'#595454',
	backgroundImage:'/Animals/animaliconscolor.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*0,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Animals'});	

var buttonAttractions = Titanium.UI.createButton({
	color:'black',
	backgroundColor:'#595454',	
	backgroundImage:'/Attractions/ridesattractionsiconcolor.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.2,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Attractions'});	
	
var buttonFacilities = Titanium.UI.createButton({
	color:'black',
	backgroundColor:'#595454',
	backgroundImage:'/Facilities/facilitiesiconcolor.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.4,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Facilities'});		

var buttonGreenTour = Titanium.UI.createButton({
	color:'black',
	backgroundColor:'#595454',
	backgroundImage:'/GreenTour/greentouriconcolor.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.6,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Animals'});	

var buttonFindMe = Titanium.UI.createButton({
	color:'black',
	backgroundColor:'#595454',
	backgroundImage:'/ParkMap/findme.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.8,
	font:{fontSize:'12dp', fontcolor:'black', fontFamily:'Helvetica Neue'},
});	

//var mapview = Ti.UI.createImageView({
//	image:'parkmap.png',
//	width:'auto',
//	height:'auto',
//	top:'0dp',
//	left:'0dp'
//	width:pWidth,
//	height:pHeight*.8,
//	top:pHeight*.1,
//	left:'0dp'
//});
//win.add(mapview);


//var lblTest=Titanium.UI.createLabel({
//	text:"TEST",
//	textAlign:'bottom',
//	right:'0', 	
//	color:'#000000',
//	font:{
//		fontSize:'25dp',
//		fontWeight:'bold',
//	},
//	width:pWidth*.5,
 //   top: '0dp',
  //  left:'0dp',
   // height: pHeight*.5
//});
//map.add(lblTest);


var scale = Ti.UI.create2DMatrix().scale(1);
var map=Ti.UI.createWebView({image:'parkmap.png', transform:scale, size:{ width:pWidth, height:pHeight*.8}, 
	top:pHeight*.1, scalesPageToFit:true});
win.add(map);


//var scrollview = Ti.UI.createScrollView({
//	zoomScale:1,
//	backgroundImage:'parkmap.png',
//	top:pHeight*.1,
 //   height:pHeight*.8,
  //  width:pWidth,
    /* left & right work too */
   // contentHeight:pHeight*.1,
    //contentWidth:pWidth*.25
//})


//scrollview.add(mapview);
//win.add(scrollview);


//    var data = [];
    
//    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'Locs.xml');
//	var xmltext = file.read().text;
//	var doc = Ti.XML.parseString(xmltext);
//	var elements = doc.getElementsByTagName("Loc");

 //   for (var i=0;i<elements.length;i++) {
  //  	LocName = doc.getElementsByTagName("LocName").item(i).text;
   // 	PixelX = doc.getElementsByTagName("PixelX").item(i).text;
   // 	PixelY = doc.getElementsByTagName("PixelY").item(i).text;
   // 	var mapLabel = Titanium.UI.createLabel({
   // 		color:'#000000',
   // 		top:PixelY/2,
   // 		left:PixelX/2,
   // 		text: LocName  
   // 	});
   // 	mapview.add(mapLabel);
   // };

win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(buttonAnimals);
win.add(buttonAttractions);
win.add(buttonFacilities);
win.add(buttonGreenTour);
win.add(buttonFindMe);
//win.add(map);
//win.add(imageView);



