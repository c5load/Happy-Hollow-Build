var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'schedulebackground.png',
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
{var winHomeScreen=Titanium.UI.createWindow({
    title:'Happy Hollow Park and Zoo',
    backgroundColor:'#FFFFFF',
    url: '..app.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winHomeScreen.open();});


var buttonkeeparoundcarousel = Titanium.UI.createButton({
	backgroundColor:'#000000',
	title:'Keep-Around Carousel',
	textAlign:pWidth*.04,
	font:{fontSize:'20dp'},
	backgroundImage:'../backgroundresting.png',
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:pHeight*.1, 
	left:'0dp',
	width:pWidth,
	height:(pHeight-(pHeight*.1))/8,});
buttonkeeparoundcarousel.addEventListener('click', function()
{var winkeeparoundcarousel=Titanium.UI.createWindow({
    title:'Keep-Around Carousel',
    backgroundColor:'#FFFFFF',
    url: 'keeparoundcarousel.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winkeeparoundcarousel.open();});


var buttonpacificfruitexpress= Titanium.UI.createButton({
	backgroundColor:'#000000',
	title:'Pacific Fruit Express',
	textAlign:pWidth*.04,
	font:{fontSize:'20dp'},
	backgroundImage:'../backgroundresting.png',
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+(pHeight-(pHeight*.1))/8), 
	left:'0dp',
	width:pWidth,
	height:(pHeight-(pHeight*.1))/8,});
buttonpacificfruitexpress.addEventListener('click', function()
{var winpacificfruitexpress=Titanium.UI.createWindow({
    title:'Pacific Fruit Express',
    backgroundColor:'#FFFFFF',
    url: 'pacificfruitexpress.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winpacificfruitexpress.open();});
	

var buttonkiddieswing = Titanium.UI.createButton({
	backgroundColor:'#000000',
	title:'Kidde Swing',
	textAlign:pWidth*.04,
	font:{fontSize:'20dp'},	
	backgroundImage:'../backgroundresting.png',
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+((pHeight-(pHeight*.1))/8)*2), 
	left:'0dp',
	width:pWidth,
	height:(pHeight-(pHeight*.1))/8,});
buttonkiddieswing.addEventListener('click', function()
{var winkiddieswing=Titanium.UI.createWindow({
    title:'Kiddie Swing',
    backgroundColor:'#FFFFFF',
    url: 'kiddieswing.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winkiddieswing.open();});	
	

var buttonminiputtputt = Titanium.UI.createButton({
	backgroundColor:'#000000',
	title:'Events',
	textAlign:pWidth*.04,
	font:{fontSize:'20dp'},
	backgroundImage:'../backgroundresting.png',
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+((pHeight-(pHeight*.1))/8)*3), 
	left:'0dp',
	width:pWidth,
	height:(pHeight-(pHeight*.1))/8,});
buttonminiputtputt.addEventListener('click', function()
{var winminiputtputt=Titanium.UI.createWindow({
    title:'Mini Putt-Putt',
    backgroundColor:'#FFFFFF',
    url: 'miniputtputt.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winminiputtputt.open();});

var buttondannythedragon = Titanium.UI.createButton({
	backgroundColor:'#000000',
	title:'Danny the Dragon',
	textAlign:pWidth*.04,
	font:{fontSize:'20dp'},
	backgroundImage:'../backgroundresting.png',
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+((pHeight-(pHeight*.1))/8)*4), 
	left:'0dp',
	width:pWidth,
	height:(pHeight-(pHeight*.1))/8,});
buttondannythedragon.addEventListener('click', function()
{var windannythedragon=Titanium.UI.createWindow({
    title:'Danny the Dragon',
    backgroundColor:'#FFFFFF',
    url: 'dannythedragon.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	windannythedragon.open();});
	
var buttongrannybugs = Titanium.UI.createButton({
	backgroundColor:'#000000',
	title:'Granny Bugs',
	textAlign:pWidth*.04,
	font:{fontSize:'20dp'},
	backgroundImage:'../backgroundresting.png',
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+((pHeight-(pHeight*.1))/8)*5), 
	left:'0dp',
	width:pWidth,
	height:(pHeight-(pHeight*.1))/8,});
buttongrannybugs.addEventListener('click', function()
{var wingrannybugs=Titanium.UI.createWindow({
    title:'Granny Bugs',
    backgroundColor:'#FFFFFF',
    url: 'grannybugs.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	wingrannybugs.open();});	
	
var buttonfroghopper = Titanium.UI.createButton({
	backgroundColor:'#000000',
	title:'Frog Hopper',
	textAlign:pWidth*.04,
	font:{fontSize:'20dp'},
	backgroundImage:'../backgroundresting.png',
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+((pHeight-(pHeight*.1))/8)*6), 
	left:'0dp',
	width:pWidth,
	height:(pHeight-(pHeight*.1))/8,});
buttonfroghopper.addEventListener('click', function()
{var winfroghopper=Titanium.UI.createWindow({
    title:'Frog Hopper',
    backgroundColor:'#FFFFFF',
    url: 'froghopper.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winfroghopper.open();});
	
var buttonteamkids = Titanium.UI.createButton({
	backgroundColor:'#000000',
	title:'Team Kids',
	textAlign:pWidth*.04,
	font:{fontSize:'20dp'},
	backgroundImage:'../backgroundresting.png',
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+((pHeight-(pHeight*.1))/8)*7), 
	left:'0dp',
	width:pWidth,
	height:(pHeight-(pHeight*.1))/8,});
buttonteamkids.addEventListener('click', function()
{var winteamkids=Titanium.UI.createWindow({
    title:'Team Kids',
    backgroundColor:'#FFFFFF',
    url: 'teamkids.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winteamkids.open();});	


win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonkeeparoundcarousel);
win.add(buttonpacificfruitexpress);
win.add(buttonkiddieswing);
win.add(buttonminiputtputt);
win.add(buttondannythedragon);
win.add(buttongrannybugs);
win.add(buttonfroghopper);
win.add(buttonteamkids);
