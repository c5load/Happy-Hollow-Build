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
  showVerticalScrollIndicator:true,
  showHorizontalScrollIndicator:true,
});


var scrollViewCredits =  Titanium.UI.createScrollView({
  height:pHeight*.4,
  width:pWidth,
  top:pHeight*.6,
  contentWidth:pWidth,
  showVerticalScrollIndicator:true,
  showHorizontalScrollIndicator:true,
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
    url: '/Schedule/schedule.js',
    fullscreen : true,  
    navBarHidden: true});

			winSchedule.addEventListener('close', gohome);
			winSchedule.addEventListener('android:back', function() {
			winSchedule.removeEventListener('close', gohome);
			winSchedule.close(); winSchedule = null
			});		
			winSchedule.open({fullscreen:true});		
			});

var lblGuestService=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.14,
	top:'0dp',
	width:pWidth,
})

var lblTextGuestService=Titanium.UI.createLabel({
	height:pHeight*.14,
	width:pWidth*.5,
	left:pWidth*.45,
	top:'0dp',
	text: 'Guest Services/Information/Lost & Found',
	fontSize:'9dp',
	color:'#000000'
})

var btnCallGuestService = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/phone.png',
	top:pHeight*.028,
	width:pWidth*.13,
	height:pWidth*.13,
	left: pWidth*.025});	
	
btnCallGuestService.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4087946400');
});

var btnEmailGuestService = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/email.png',
	top:'0dp',
	width:pWidth*.26,
	height:pWidth*.20,
	left: pWidth*.18});
	
btnEmailGuestService.addEventListener('click', function()
{
var GuestServiceEmail = Ti.UI.createEmailDialog();
    GuestServiceEmail.toRecipients = ['hhguestservices@sanjoseca.gov'];
    GuestServiceEmail.open();	
});

	
var lblParty=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.14,
	top:pHeight*.14,
	width:pWidth,
})

var lblTextParty=Titanium.UI.createLabel({
	height:pHeight*.14,
	top:pHeight*.14,	
	left:pWidth*.45,
	width:pWidth*.5,
	text: 'Party Reservations',
	fontSize:'9dp',
	color:'#000000'
})

var btnCallParty = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/phone.png',
	top:pHeight*.158,
	width:pWidth*.14,
	height:pWidth*.14,
	left: pWidth*.025});	
	
btnCallParty.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4087946449');
});

var btnEmailParty = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/email.png',
	top:pHeight*.14,
	width:pWidth*.26,
	height:pWidth*.20,
	left: pWidth*.18});

btnEmailParty.addEventListener('click', function()
{
var PartyEmail = Ti.UI.createEmailDialog();
    PartyEmail.toRecipients = ['hhparty@sanjoseca.gov'];
    PartyEmail.open();	
});

var lblMembers=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.14,
	top:pHeight*.28,
	width:pWidth,
})

var lblTextMembers=Titanium.UI.createLabel({
	height:pHeight*.14,
	top:pHeight*.28,	
	left:pWidth*.45,
	width:pWidth*.5,
	text: 'Membership Services',
	fontSize:'9dp',
	color:'#000000'
})

var btnCallMembers = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/phone.png',
	top:pHeight*.298,
	width:pWidth*.14,
	height:pWidth*.14,
	left: pWidth*.025});	
	
btnCallMembers.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4087946444');
});

var btnEmailMembers = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/email.png',
	top:pHeight*.28,
	width:pWidth*.26,
	height:pWidth*.20,
	left: pWidth*.18});

btnEmailMembers.addEventListener('click', function()
{
var Members = Ti.UI.createEmailDialog();
    Members.toRecipients = ['HHPZmembers@sanjoseca.gov'];
    Members.open();	
});


var lblEducation=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.14,
	top:pHeight*.42,
	width:pWidth,
})

var lblTextEducation=Titanium.UI.createLabel({
	height:pHeight*.14,
	top:pHeight*.42,	
	left:pWidth*.45,
	width:pWidth*.5,
	text: 'Education Programs',
	fontSize:'9dp',
	color:'#000000'
})

var btnCallEducation = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/phone.png',
	top:pHeight*.438,
	width:pWidth*.14,
	height:pWidth*.14,
	left: pWidth*.025});	
	
btnCallEducation.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4087946420');
});

var btnEmailEducation = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/email.png',
	top:pHeight*.42,
	width:pWidth*.26,
	height:pWidth*.20,
	left: pWidth*.18});

btnEmailEducation.addEventListener('click', function()
{
var Education = Ti.UI.createEmailDialog();
    Education.toRecipients = ['HHPZeducation@sanjoseca.gov'];
    Education.open();	
});

var lblVolunteer=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.14,
	top:pHeight*.56,
	width:pWidth,
})

var lblTextVolunteer=Titanium.UI.createLabel({
	height:pHeight*.14,
	top:pHeight*.56,	
	left:pWidth*.45,
	width:pWidth*.5,
	text: 'Volunteer Programs',
	fontSize:'9dp',
	color:'#000000'
})

var btnCallVolunteer = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/phone.png',
	top:pHeight*.578,
	width:pWidth*.14,
	height:pWidth*.14,
	left: pWidth*.025});	
	
btnCallVolunteer.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4087946425');
});

var btnEmailVolunteer = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/email.png',
	top:pHeight*.56,
	width:pWidth*.26,
	height:pWidth*.20,
	left: pWidth*.18});

btnEmailVolunteer.addEventListener('click', function()
{
var Volunteer = Ti.UI.createEmailDialog();
    Volunteer.toRecipients = ['HHPZvolunteers@sanjoseca.gov'];
    Volunteer.open();	
});

scrollViewContacts.add(lblGuestService);
scrollViewContacts.add(lblTextGuestService);
scrollViewContacts.add(btnCallGuestService);
scrollViewContacts.add(btnEmailGuestService);
scrollViewContacts.add(lblParty);
scrollViewContacts.add(lblTextParty);
scrollViewContacts.add(btnCallParty);
scrollViewContacts.add(btnEmailParty);
scrollViewContacts.add(lblMembers);
scrollViewContacts.add(lblTextMembers);
scrollViewContacts.add(btnCallMembers);
scrollViewContacts.add(btnEmailMembers);
scrollViewContacts.add(lblEducation);
scrollViewContacts.add(lblTextEducation);
scrollViewContacts.add(btnCallEducation);
scrollViewContacts.add(btnEmailEducation);
scrollViewContacts.add(lblVolunteer);
scrollViewContacts.add(lblTextVolunteer);
scrollViewContacts.add(btnCallVolunteer);
scrollViewContacts.add(btnEmailVolunteer);

win.add(scrollViewContacts);


var lblCreditsHappyHollow=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.2,
	top:'0dp',
	width:pWidth,
})

var titleHappyHollow=Titanium.UI.createLabel({
top:'0dp',
left:pWidth*.25,
height:pHeight*.06,
width:pWidth*.5,
text:'Happy Hollow Foundation',
color:'#000000',
    font: {
      fontSize: '12dp',
      fontWeight: 'bold'
        },	
})

var lblCreditsTextHappyHollow=Titanium.UI.createLabel({
	height:pHeight*.2,
	left:pWidth*.25,
	width:pWidth*.5,
	top:pHeight*.015,
	text: 'Nourishing childish behavior since 1958. Donations go to park & zoo improvements and conservation efforts.',
	fontSize:'8dp',
	color:'#000000'
})

var HHLogo = Titanium.UI.createImageView({
	backgroundImage:'logo.png',
	top:pHeight*.05,
	width:pWidth*.17,
	height:pWidth*.15,
	left: pWidth*.025});	

var btnCallHappyHollow = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/phone.png',
	top:pHeight*.02,
	width:pWidth*.13,
	height:pWidth*.13,
	left: pWidth*.82});	
	
btnCallHappyHollow.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4082773498');
});

var btnEmailHappyHollow = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/email.png',
	top:pHeight*.082,
	width:pWidth*.26,
	height:pWidth*.20,
	left: pWidth*.75});
	
btnEmailHappyHollow.addEventListener('click', function()
{
var HappyHollowEmail = Ti.UI.createEmailDialog();
    HappyHollowEmail.toRecipients = ['HeatherLerner@yahoo.com'];
    HappyHollowEmail.open();	
});


var lblHonors=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.2,
	top:pHeight*.2,
	width:pWidth,
	borderColor:'#000000'
})

var titleHonors=Titanium.UI.createLabel({
top:pHeight*.2,
left:pWidth*.25,
height:pHeight*.06,
width:pWidth*.5,
text:'Gary J Sbona Honors Program',
color:'#000000',
    font: {
      fontSize: '12dp',
      fontWeight: 'bold'
        },	
})

var lblTextHonors=Titanium.UI.createLabel({
	height:pHeight*.2,
	left:pWidth*.25,
	top:pHeight*.2,	
	width:pWidth*.5,
	text: 'This app was created by MIS students in the Gary J. Sbona Honors Program, San Jose State University.',
	fontSize:'8dp',
	color:'#000000'
})

var HonorsLogo = Titanium.UI.createImageView({
	backgroundImage:'/ContactUs/honorslogo.png',
	top:pHeight*.25,
	width:pWidth*.17,
	height:pWidth*.15,
	left: pWidth*.025});	


var HonorsWebsite = Titanium.UI.createLabel({
        text: "View our website",
        color: 'blue',
        font: {
            fontSize: '10dp',
            fontWeight: 'bold'
        },
        width:pWidth*.4,
        top:pHeight*.35,
        height: pHeight*.05,
        left:pWidth*.25
});
 
HonorsWebsite.addEventListener('click',function(e)
{
	var honorswebview=Ti.UI.createWebView({ url:'http://www.sjsu.edu/cob/sbonahonors', scalesPageToFit:true});
    var honorswebsite=Ti.UI.createWindow();
    honorswebsite.add(honorswebview);
     honorswebsite.addEventListener('close', function(){w = null;});
	 honorswebsite.addEventListener('android:back', function() {  
           honorswebsite.close();             
            });  
           honorswebsite.open();	
});



var lblByte=Titanium.UI.createImageView({
	backgroundImage:'/backgroundresting.png',
	height:pHeight*.2,
	top:pHeight*.4,
	width:pWidth,
})

var titleByte=Titanium.UI.createLabel({
top:pHeight*.4,
left:pWidth*.25,
height:pHeight*.06,
width:pWidth*.5,
text:'Byte Technology',
color:'#000000',
    font: {
      fontSize: '12dp',
      fontWeight: 'bold'
        },	
})


var lblTextByte=Titanium.UI.createLabel({
	height:pHeight*.2,
	left:pWidth*.25,
	top:pHeight*.39,	
	width:pWidth*.5,
	text: 'Value leaders in professional website design.',
	fontSize:'8dp',
	color:'#000000'
})

var btnCallByte = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/phone.png',
	top:pHeight*.42,
	width:pWidth*.13,
	height:pWidth*.13,
	left: pWidth*.82});	
	
btnCallByte.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:8316569178');
});

var btnEmailByte = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/email.png',
	top:pHeight*.482,
	width:pWidth*.26,
	height:pWidth*.20,
	left: pWidth*.75});
	
btnEmailByte.addEventListener('click', function()
{
var ByteEmail = Ti.UI.createEmailDialog();
    ByteEmail.toRecipients = ['tlow@byte-technology.com'];
    ByteEmail.open();	
});


var ByteWebsite = Titanium.UI.createLabel({
        text: "View our website",
        color: 'blue',
        font: {
            fontSize: '10dp',
            fontWeight: 'bold'
        },
        width:pWidth*.3,
        top:pHeight*.54,
        height: pHeight*.05,
        left:pWidth*.25
});
 
ByteWebsite.addEventListener('click',function(e)
{
	var bytewebview=Ti.UI.createWebView({ url:'http://www.byte-technology.com', scalesPageToFit:true});
    var bytewebsite=Ti.UI.createWindow();
    bytewebsite.add(bytewebview);
     bytewebsite.addEventListener('close', function(){w = null;});
	 bytewebsite.addEventListener('android:back', function() {  
           bytewebsite.close();             
            });  
           bytewebsite.open();	
});


var ByteLink = Titanium.UI.createLabel({
        text: "Watch Video",
        color: 'blue',
        font: {
            fontSize: '10dp',
            fontWeight: 'bold'
        },
        width:pWidth*.3,
        top:pHeight*.54,
        height: pHeight*.05,
        left:pWidth*.51
});
 
ByteLink.addEventListener('click',function(e)
{
     var w = Ti.UI.createWindow();
     w.addEventListener('close', function(){w = null;});
	 w.addEventListener('android:back', function() {  
           w.close();             
            });          
     w.open(Titanium.Platform.openURL('http://www.youtube.com/watch?v=xsf9lv9bg94'));
});

var ByteLogo = Titanium.UI.createImageView({
	backgroundImage:'bytelogo.png',
	top:pHeight*.45,
	width:pWidth*.18,
	height:pWidth*.15,
	left: pWidth*.025});	


scrollViewCredits.add(lblCreditsHappyHollow);
scrollViewCredits.add(lblCreditsTextHappyHollow);
scrollViewCredits.add(titleHappyHollow);
scrollViewCredits.add(HHLogo);
scrollViewCredits.add(btnCallHappyHollow);
scrollViewCredits.add(btnEmailHappyHollow);
scrollViewCredits.add(lblHonors);
scrollViewCredits.add(lblTextHonors);
scrollViewCredits.add(titleHonors);
scrollViewCredits.add(HonorsLogo);
scrollViewCredits.add(HonorsWebsite);
scrollViewCredits.add(lblByte);
scrollViewCredits.add(lblTextByte);
scrollViewCredits.add(titleByte);
scrollViewCredits.add(ByteWebsite);
scrollViewCredits.add(ByteLink);
scrollViewCredits.add(ByteLogo);
scrollViewCredits.add(btnCallByte);
scrollViewCredits.add(btnEmailByte);
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
function gohome(e){
win.close(); winSchedule = null	
}            