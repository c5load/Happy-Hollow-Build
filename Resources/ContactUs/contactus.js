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
	text:'Contact Us',
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

var CreditsBar=Titanium.UI.createImageView({
	image:'/ContactUs/contactusbackground.png',
    width: pWidth,
    left: '0dp',
    top: pHeight*.5,
    height: pHeight*.1
});

var lblCredits=Titanium.UI.createLabel({
	text:"Thank you to the following sponsors",
	textAlign:'center', 	
	color:'white',
	font:{
		fontSize:'20dp',
		fontWeight:'bold',
	},
	width: pWidth,
    top: pHeight*.5,
    left:'0dp',
    height: pHeight*.1
});


//declare scrollviews
var scrollViewContacts =  Titanium.UI.createScrollView({
  height:pHeight*.4,
  width:pWidth,
  top:pHeight*.1,
  contentWidth:pWidth,
  showVerticalScrollIndicator:false,
  showHorizontalScrollIndicator:false,
});


var scrollViewCredits =  Titanium.UI.createScrollView({
  height:pHeight*.4,
  width:pWidth,
  top:pHeight*.6,
  contentWidth:pWidth,
  showVerticalScrollIndicator:false,
  showHorizontalScrollIndicator:false,
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

var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'scheduleresting.png',
	backgroundSelectedImage:'scheduleselected.png',
	top:pHeight*.02,
	left:pWidth*.78,
	width:pWidth*.17,
	height:pHeight*.07,});
buttonSchedule.addEventListener('click', function()
{
	var winSchedule = Titanium.UI.createWindow({
    title:'Schedule',
    backgroundColor:'#FFFFFF',
    url: '/Schedule/schedule2.js',
    fullscreen : true,  
    exitOnClose: true,
    navBarHidden: true});
winSchedule.addEventListener('close', function(){winSchedule = null;});
winSchedule.open();});


var lblContactHappyHollow=Titanium.UI.createLabel({
	backgroundImage:'../backgroundresting.png',
	height:pHeight*.1,
	top:'0dp',
	width:pWidth,
	text: 'Happy Hollow: 1300 Senter Road, San Jose, CA 95112',
	fontSize:'10dp',
	fontColor:'black',
	textAlign:pWidth*.5
})

var btnCallHappyHollow = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/phone.png',
	top:'auto',
	width:pWidth*.14,
	height:pHeight*.08,
	left: pWidth*.05});	
	
btnCallHappyHollow.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4087946400');
});

lblContactHappyHollow.add(btnCallHappyHollow);

var lblContactJon=Titanium.UI.createLabel({
	backgroundImage:'../backgroundresting.png',
	height:pHeight*.1,
	top:pHeight*.1,
	width:pWidth,
	text: 'Jon Moog:Operations Director',
	fontSize:'10dp',
	fontColor:'black',
	textAlign:pWidth*.5
})

var btnCallJon = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/phone.png',
	top:'auto',
	width:pWidth*.14,
	height:pHeight*.08,
	left: pWidth*.05});	
	
btnCallJon.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4087946403');
});

lblContactJon.add(btnCallJon);


scrollViewContacts.add(lblContactHappyHollow);
scrollViewContacts.add(lblContactJon);
win.add(scrollViewContacts);

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
win.add(CreditsBar);
win.add(lblCredits);
//win.add(lblTitleAddress);
//win.add(lblAddress);
//win.add(lblTitlePhone);
//win.add(lblPhone);
//win.add(buttonCall);
win.add(buttonHome);
win.add(buttonSchedule);

win.addEventListener('android:back', function() {  
           win.close();             
            });

