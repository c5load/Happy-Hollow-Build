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
{var winHomeScreen = Titanium.UI.createWindow({
    title:'Happy Hollow Park and Zoo',
    backgroundColor:'#FFFFFF',
    url: '/homescreen.js',
    navBarHidden:true,
    fullscreen : true,  
});
	winHomeScreen.addEventListener('close', function(){winHome = null;});
	winHomeScreen.open();});

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
    url: '/Schedule/schedule.js',
    fullscreen : true,  
    exitOnClose: true,
    navBarHidden: true});
winSchedule.addEventListener('close', function(){winSchedule = null;});
winSchedule.open();});


var lblContactHappyHollow=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.14,
	top:'0dp',
	width:pWidth,
})

var lblTextHappyHollow=Titanium.UI.createLabel({
	height:pHeight*.14,
	width:pWidth*.5,
	left:pWidth*.5,
	top:'0dp',
	text: 'Happy Hollow Main Office',
	fontSize:'10dp',
	color:'#000000'
})

var btnCallHappyHollow = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/phone.png',
	top:pHeight*.028,
	width:pWidth*.13,
	height:pWidth*.13,
	left: pWidth*.025});	
	
btnCallHappyHollow.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4087946400');
});

var btnEmailHappyHollow = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/email.png',
	top:'0dp',
	width:pWidth*.26,
	height:pWidth*.20,
	left: pWidth*.18});
	
btnEmailHappyHollow.addEventListener('click', function()
{
var HHemailDialog = Ti.UI.createEmailDialog();
    HHemailDialog.toRecipients = ['hhguestservice@sanjoseca.gov'];
    HHemailDialog.open();	
});

	
var lblContactJon=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.14,
	top:pHeight*.14,
	width:pWidth,
})

var lblTextJon=Titanium.UI.createLabel({
	height:pHeight*.14,
	top:pHeight*.14,	
	left:pWidth*.5,
	width:pWidth*.5,
	text: 'Jon Moog:Operations Director',
	fontSize:'10dp',
	color:'#000000'
})

var btnCallJon = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/phone.png',
	top:pHeight*.158,
	width:pWidth*.14,
	height:pWidth*.14,
	left: pWidth*.025});	
	
btnCallJon.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4087946403');
});

var btnEmailJon = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/email.png',
	top:pHeight*.14,
	width:pWidth*.26,
	height:pWidth*.20,
	left: pWidth*.18});

btnEmailHappyHollow.addEventListener('click', function()
{
var emailDialog = Ti.UI.createEmailDialog();
    emailDialog.toRecipients = ['jonathan.moog@sanjoseca.gov'];
    emailDialog.open();	
});


scrollViewContacts.add(lblContactHappyHollow);
scrollViewContacts.add(lblTextHappyHollow);
scrollViewContacts.add(btnCallHappyHollow);
scrollViewContacts.add(btnEmailHappyHollow);
scrollViewContacts.add(lblContactJon);
scrollViewContacts.add(lblTextJon);
scrollViewContacts.add(btnCallJon);
scrollViewContacts.add(btnEmailJon);

win.add(scrollViewContacts);


var lblCreditsHappyHollow=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.14,
	top:'0dp',
	width:pWidth,
})

var lblCreditsTextHappyHollow=Titanium.UI.createLabel({
	height:pHeight*.14,
	left:pWidth*.25,
	width:pWidth*.75,
	top:'0dp',
	text: 'Happy Hollow Park & Zoo has provided fun and entertainment for many years',
	fontSize:'10dp',
	color:'#000000'
})

var HHLogo = Titanium.UI.createImageView({
	backgroundImage:'logo.png',
	top:pHeight*.025,
	width:pWidth*.15,
	height:pWidth*.15,
	left: pWidth*.025});	

var lblHonors=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.14,
	top:pHeight*.14,
	width:pWidth,
	borderColor:'#000000'
})

var lblTextHonors=Titanium.UI.createLabel({
	height:pHeight*.14,
	left:pWidth*.25,
	top:pHeight*.14,	
	width:pWidth*.75,
	text: 'This app created by MIS students in the Gary J. Sbona Honors Program, San Jose State University.',
	fontSize:'10dp',
	color:'#000000'
})

var HonorsLogo = Titanium.UI.createImageView({
	backgroundImage:'/ContactUs/honorslogo.png',
	top:pHeight*.155,
	width:pWidth*.15,
	height:pWidth*.15,
	left: pWidth*.025});	

var lblByte=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.14,
	top:pHeight*.28,
	width:pWidth,
})

var lblTextByte=Titanium.UI.createLabel({
	height:pHeight*.14,
	left:pWidth*.25,
	top:pHeight*.28,	
	width:pWidth*.75,
	text: 'Byte Technologies offers solutions to its clients.',
	fontSize:'10dp',
	color:'#000000'
})

var lblTest=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.14,
	top:pHeight*.42,
	width:pWidth,
})

//var ByteLogo = Titanium.UI.createImageView({
//	backgroundImage:'',
//	top:pHeight*.168,
//	width:pWidth*.13,
//	height:pWidth*.13,
//	left: pWidth*.025});	


scrollViewCredits.add(lblCreditsHappyHollow);
scrollViewCredits.add(lblCreditsTextHappyHollow);
scrollViewCredits.add(HHLogo);
scrollViewCredits.add(lblHonors);
scrollViewCredits.add(lblTextHonors);
scrollViewCredits.add(HonorsLogo);
scrollViewCredits.add(lblByte);
scrollViewCredits.add(lblTextByte);
//scrollViewCredits.add(ByteLogo);
scrollViewCredits.add(lblTest);
win.add(scrollViewCredits);


win.add(TitleBar);
win.add(lblTitle);
win.add(CreditsBar);
win.add(lblCredits);
win.add(buttonHome);
win.add(buttonSchedule);

win.addEventListener('android:back', function() {  
           win.close();             
            });