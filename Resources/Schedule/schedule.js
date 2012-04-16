var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/Schedule/schedulebackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});

var lblTitle=Titanium.UI.createLabel({
	text:"Schedule",
	textAlign:'center',
	color:'white',
	font:{
		fontSize:'30dp',
		fontWeight:'bold',
	},
	width: pWidth,
	left:'0dp', 
    top: '0dp',
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
{	var winHomeScreen = Titanium.UI.createWindow({
    title:'Happy Hollow Park and Zoo',
    backgroundColor:'#FFFFFF',
    url: '/homescreen.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
winHomeScreen.addEventListener('close', function(){winHome = null;});
	winHomeScreen.open();
	});

imageEvents = Titanium.UI.createImageView({
	backgroundImage:'happyhollow.png',
	width:pWidth*.25,
	height:(pHeight-(pHeight*.1))/6,
	left:'0dp',
	top:pHeight*.1
})

imageParkHours = Titanium.UI.createImageView({
	backgroundImage:'happyhollow.png',
	width:pWidth*.25,
	height:(pHeight-(pHeight*.1))/6,
	left:'0dp',
	top:(pHeight*.1+(pHeight-(pHeight*.1))/6)
})

imageRideSchedule = Titanium.UI.createImageView({
	backgroundImage:'happyhollow.png',
	width:pWidth*.25,
	height:(pHeight-(pHeight*.1))/6,
	left:'0dp',
	top:(pHeight*.1+(pHeight-(pHeight*.1))/6*2)
})

var buttonEvents = Titanium.UI.createButton({
	backgroundColor:'#000000',
	title:'Events',
	textAlign:'center',
	font:{fontSize:'20dp', left:pWidth/3},
	backgroundImage:'../backgroundresting.png',
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:pHeight*.1, 
	left:0,
	width:pWidth,
	height:(pHeight-(pHeight*.1))/6,});
buttonEvents.addEventListener('click', function()
{var winEvents=Titanium.UI.createWindow({
    title:'Events',
    backgroundColor:'#FFFFFF',
    url: 'events.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
winEvents.addEventListener('close', function(){winEvents = null;});
	winEvents.open();});

var buttonParkHours = Titanium.UI.createButton({
	backgroundColor:'#000000',
	title:'Park Hours',
	textAlign:'center',
	font:{fontSize:'20dp', left:pWidth/3},
	backgroundImage:'../backgroundresting.png',
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+(pHeight-(pHeight*.1))/6), 
	left:0,
	width:pWidth,
	height:(pHeight-(pHeight*.1))/6,});
buttonParkHours.addEventListener('click', function()
{var winParkHours=Titanium.UI.createWindow({
    title:'Park Hours',
    backgroundColor:'#FFFFFF',
    url: 'parkhours.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
winParkHours.addEventListener('close', function(){winParkHours = null;});
	winParkHours.open();});

var buttonRideSchedule = Titanium.UI.createButton({
	backgroundImage:'../backgroundresting.png',
	title:'Ride Schedule',
	textAlign:'center',
	font:{fontSize:'20dp', left:pWidth/3},
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+(pHeight-(pHeight*.1))/6*2), 
	left:0,
	width:pWidth,
	height:(pHeight-(pHeight*.1))/6,});

buttonRideSchedule.addEventListener('click', function()
{var winRideSchedule=Titanium.UI.createWindow({
    title:'Ride Schedule',
    backgroundColor:'#FFFFFF',
    url: 'rideschedule3.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true});
winRideSchedule.addEventListener('close', function(){winRideSchedule= null;});    
	winRideSchedule.open();});
	

var buttonPuppetShow = Titanium.UI.createButton({
	backgroundImage:'thumbPuppetCastleTheater.png',
	title:'Puppet Show',
	textAlign:'center',
	font:{fontSize:'20dp', left:pWidth/3},	
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+((pHeight-(pHeight*.1))/6)*3), 
	left:0,
	width:pWidth,
	height:(pHeight-(pHeight*.1))/6,});
buttonPuppetShow.addEventListener('click', function()
{var winPuppetShow=Titanium.UI.createWindow({
    title:'Puppet Show',
    backgroundColor:'#FFFFFF',
    url: 'puppetshows.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
winPuppetShow.addEventListener('close', function(){winPuppetShow= null;}); 
	winPuppetShow.open();});	

//PuppetShowImage = Titanium.UI.createImageView({
//	backgroundImage:'PuppetCastleTheater.png',
//	top:(pHeight*.1+((pHeight-(pHeight*.1))/5)*2)+(pWidth*.05),
//	height:pWidth*.2,
//	width:pWidth*.2,
//	left:pWidth*.05
//})
	
var buttonZooHollow = Titanium.UI.createButton({
	backgroundImage:'thumbZooInTheHollow.png',
	title:'Zoo in the Hollow',
	textAlign:'center',
	font:{fontSize:'20dp'},
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+((pHeight-(pHeight*.1))/6)*4),
	left:0,
	width:pWidth,
	height:(pHeight-(pHeight*.1))/6,});
buttonZooHollow.addEventListener('click', function()
{var winZooHollow=Titanium.UI.createWindow({
    title:'Zoo in the Hollow',
    backgroundColor:'#FFFFFF',
    url: 'zoohollow.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
winZooHollow.addEventListener('close', function(){winZooHollow= null;}); 
	winZooHollow.open();});
	
var buttonZooHill = Titanium.UI.createButton({
	backgroundImage:'thumbZooOnTheHill.png',
	title:'Zoo on the Hill',
	textAlign:'center',
	font:{fontSize:'20dp'},
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+((pHeight-(pHeight*.1))/6)*5),  
	left:0,
	width:pWidth,
	height:(pHeight-(pHeight*.1))/6,});
buttonZooHill.addEventListener('click', function()
{var winZooHill=Titanium.UI.createWindow({
    title:'Zoo on the Hill',
    backgroundColor:'#FFFFFF',
    url: 'zoohill.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
winZooHill.addEventListener('close', function(){winZooHill= null;}); 
	winZooHill.open();});	


win.add(TitleBar);
win.add(lblTitle);
win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonEvents);
win.add(buttonParkHours);
win.add(buttonRideSchedule);
win.add(buttonPuppetShow);
win.add(buttonZooHollow);
win.add(buttonZooHill);
win.add(imageEvents);
win.add(imageParkHours);
win.add(imageRideSchedule);
//win.add(PuppetShowImage);
