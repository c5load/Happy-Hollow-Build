//Titanium.UI.setBackgroundImage('background2.png');
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/contactusrest.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: '50dp'
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
    height: '50dp'
});

var buttonHome = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'homeresting.png',
	backgroundSelectedImage:'homeselected.png',
	top: pHeight*.02, 
	left:pWidth*.05,
	width:'60dp',
	height:'30dp',});
buttonHome.addEventListener('click', function()
{winHomeScreen.open();});

var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'scheduleresting.png',
	backgroundSelectedImage:'scheduleselected.png',
	top:pHeight*.02,
	left:pWidth*.78,
	width:'60dp',
	height:'30dp',});
buttonHome.addEventListener('click', function()
{winSchedule.open();});

//TitleBar.add(lblTitle);

var address = "1300 Senter Road  San Jose, CA 95112";


var lblTitleAddress = Titanium.UI.createLabel({
    text: "Address:",
    color: 'black',
    font: {
        fontSize: '20dp',
        fontWeight: 'bold'
    },
    width: 'auto',
    left: '10dp',
    top: '50dp',
    height: 'auto'
});


var lblAddress = Titanium.UI.createLabel({
    text: "1300 Senter Road, San Jose, CA 95112",
    color: 'black',
    font: {
        fontSize: '20dp',
        fontWeight: 'normal'
    },
    width: 'auto',
    left: '10dp',
    top: '80dp',
    height: 'auto'
});

var lblTitlePhone = Titanium.UI.createLabel({
    text: "Main Office Number:",
    color: 'black',
    font: {
        fontSize: '20dp',
        fontWeight: 'bold'
    },
    width: 'auto',
    left: '10dp',
    top: '120dp',
    height: 'auto'
});


var lblPhone = Titanium.UI.createLabel({
    text: "Main Office:(408)794-6400",
    color: 'black',
    font: {
        fontSize: '20dp',
        fontWeight: 'normal'
    },
    width: 'auto',
    left: '10dp',
    top: '150dp',
    height: 'auto'
});


var buttonCall = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/contactusrest.png',
	backgroundSelectedImage:'/contactusselect.png',
	top:'150dp',
	width:'60dp',
	height:'30dp',
	left: '280dp',
	font:{fontSize:'20dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Call'});	


buttonCall.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4087946400');
});

win.add(TitleBar);
win.add(lblTitle);
win.add(TitleBar);
win.add(lblTitle);
win.add(lblTitleAddress);
win.add(lblAddress);
win.add(lblTitlePhone);
win.add(lblPhone);
win.add(buttonCall);


