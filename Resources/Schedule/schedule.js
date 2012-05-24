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
		fontSize:pWidth/13,
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
{win.close();});

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

var buttonEvents = Titanium.UI.createButton({
	backgroundColor:'#000000',
	title:'Events/Specials',
	textAlign:'center',
	font:{fontSize:pWidth/17, left:pWidth/3},
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
	winEvents.addEventListener('close', gohome);
	winEvents.addEventListener('android:back', function() {
		winEvents.removeEventListener('close', gohome);
		winEvents.close(); winEvents = null
		});		
	winEvents.open({fullscreen:true});	
});

var buttonParkHours = Titanium.UI.createButton({
	backgroundColor:'#000000',
	title:'Park Hours',
	textAlign:'center',
	font:{fontSize:pWidth/17, left:pWidth/3},
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

	winParkHours.addEventListener('close', gohome);
	winParkHours.addEventListener('android:back', function() {
		winParkHours.removeEventListener('close', gohome);
		winParkHours.close(); winParkHours = null
		});		
	winParkHours.open({fullscreen:true});	
});

var buttonRideSchedule = Titanium.UI.createButton({
	backgroundImage:'FivePointForestResting.png',
	title:'Ride Schedule',
	textAlign:'center',
	font:{fontSize:pWidth/17, left:pWidth/3},
	backgroundSelectedImage:'/Schedule/schedulebackground.png',
	top:(pHeight*.1+(pHeight-(pHeight*.1))/6*2), 
	left:0,
	width:pWidth,
	height:(pHeight-(pHeight*.1))/6,});

buttonRideSchedule.addEventListener('click', function()
{var winRideSchedule=Titanium.UI.createWindow({
    title:'Ride Schedule',
    backgroundColor:'#FFFFFF',
    url: 'rideschedule.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true});

	winRideSchedule.addEventListener('close', gohome);
	winRideSchedule.addEventListener('android:back', function() {
		winRideSchedule.removeEventListener('close', gohome);
		winRideSchedule.close(); winRideSchedule = null
		});		
	winRideSchedule.open({fullscreen:true});		
	});

var buttonPuppetShow = Titanium.UI.createButton({
	backgroundImage:'PuppetCastleTheaterResting.png',
	title:'Puppet Show',
	textAlign:'center',
	font:{fontSize:pWidth/17, left:pWidth/3},	
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
	
	winPuppetShow.addEventListener('close', gohome);
	winPuppetShow.addEventListener('android:back', function() {
		winPuppetShow.removeEventListener('close', gohome);
		winPuppetShow.close(); winPuppetShow = null
		});		
	winPuppetShow.open({fullscreen:true});	
});	

var buttonZooHollow = Titanium.UI.createButton({
	backgroundImage:'ZooInTheHollowResting.png',
	title:'Zoo in the Hollow',
	textAlign:'center',
	font:{fontSize:pWidth/17},
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

	winZooHollow.addEventListener('close', gohome);
	winZooHollow.addEventListener('android:back', function() {
		winZooHollow.removeEventListener('close', gohome);
		winZooHollow.close(); winZooHollow = null
		});		
	winZooHollow.open({fullscreen:true});	
});
	
var buttonZooHill = Titanium.UI.createButton({
	backgroundImage:'ZooOnTheHillResting.png',
	title:'Zoo on the Hill',
	textAlign:'center',
	font:{fontSize:pWidth/17},
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

	winZooHill.addEventListener('close', gohome);
	winZooHill.addEventListener('android:back', function() {
		winZooHill.removeEventListener('close', gohome);
		winZooHill.close(); winZooHill = null
		});		
	winZooHill.open({fullscreen:true});	
});

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

function gohome(e){
win.close(); w = null	
}