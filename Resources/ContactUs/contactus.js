//Titanium.UI.setBackgroundImage('background2.png');
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/ContactUs/contactusbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});

var lblTitle=Titanium.UI.createLabel({
	text:"Contact Us",
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
{var winHomeScreen=Titanium.UI.createWindow({
    title:'Happy Hollow Park and Zoo',
    backgroundColor:'#FFFFFF',
    url: '/app.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winHomeScreen.open();});

var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'scheduleresting.png',
	backgroundSelectedImage:'scheduleselected.png',
	top:pHeight*.02,
	left:pWidth*.78,
	width:pWidth*.17,
	height:pHeight*.07,});
buttonHome.addEventListener('click', function()
{var winSchedule=Titanium.UI.createWindow({
    title:'Schedule',
    backgroundColor:'#FFFFFF',
    url: '/Schedule/schedule2.js',
    navBarHidden:true,
    fullscreen : true,  
});
	winSchedule.open();});


var address = "1300 Senter Road  San Jose, CA 95112";


var lblTitleAddress = Titanium.UI.createLabel({
    text: "Address:",
    color: 'black',
    font: {
        fontSize: '20dp',
        fontWeight: 'bold'
    },
    width: pWidth,
    left: pWidth*.02,
    top: pHeight*.10,
    height: pHeight*.1
});


var lblAddress = Titanium.UI.createLabel({
    text: "1300 Senter Road, San Jose, CA 95112",
    color: 'black',
    font: {
        fontSize: '20dp',
        fontWeight: 'normal'
    },
    width: pWidth,
    left: pWidth*.02,
    top: pHeight*.15,
    height: pHeight*.1
});

var lblTitlePhone = Titanium.UI.createLabel({
    text: "Main Office Number:",
    color: 'black',
    font: {
        fontSize: '20dp',
        fontWeight: 'bold'
    },
    width: pWidth,
    left: pWidth*.02,
    top: pHeight*.25,
    height: pHeight*.1
});


var lblPhone = Titanium.UI.createLabel({
    text: "Main Office:(408)794-6400",
    color: 'black',
    font: {
        fontSize: '20dp',
        fontWeight: 'normal'
    },
    width: pWidth,
    left: pWidth*.02,
    top: pHeight*.30,
    height: pHeight*.1
});


var buttonCall = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/phone.png',
//	backgroundImage:'/ContactUs/contactusrest.png',
//	backgroundSelectedImage:'/ContactUs/contactusselect.png',
	top:pHeight*.30,
	width:pWidth*.14,
	height:pHeight*.08,
	left: pWidth*.78,
	font:{fontSize:'20dp',fontWeight:'bold',fontFamily:'Helvetica Neue'}});	


buttonCall.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4087946400');
});

win.add(TitleBar);
win.add(lblTitle);
win.add(lblTitleAddress);
win.add(lblAddress);
win.add(lblTitlePhone);
win.add(lblPhone);
win.add(buttonCall);
win.add(buttonHome);
win.add(buttonSchedule);


