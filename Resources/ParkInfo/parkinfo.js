Titanium.UI.setBackgroundImage('background2.png');
var win = Titanium.UI.currentWindow;

var back=Titanium.UI.createImageView({
  url:'logo.png',
  height : 130,
  width : 130
});
win.add(back);



var winAdmissionInfo = Titanium.UI.createWindow({
	url:'admission.js',
	titleid:'admission',
	backgroundImage:'../background2.png'
});

var winGuestMember = Titanium.UI.createWindow({
	url:'guestmember.js',
	titleid:'guest_and_member_services',
	backgroundImage:'../background2.png'
});


var buttonAdmission = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'../bluebutton.png',
	backgroundSelectedImage:'../bluebutton.png',
	backgroundDisabledImage:'../bluebutton.png',
	top:270,
	width:301,
	height:57,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Admission Info'});

var buttonGuestMember= Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'../purplebutton.png',
	backgroundSelectedImage:'../purplebutton.png',
	backgroundDisabledImage:'../purplebutton.png',
	top:340,
	width:301,
	height:57,
	font:{fontSize:12,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Guest and Member Services'});
	
	buttonAdmission.addEventListener('click', function()
{

	win.close()
	// create a button to close window
	var buttonAdmission = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'yellowbutton.png',
	backgroundSelectedImage:'yellowbutton.png',
	backgroundDisabledImage:'yellowbutton.png',
	top:700,
	width:301,
	height:57,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Home Screen'});
	
	winAdmission.add(buttonHomeScreen);
	buttonParkInfo.addEventListener('click', function()
	{
		winAdmission.close();
		win.open();
	});

	winAdmission.open();
});

buttonGuestMember.addEventListener('click', function()
{

	win.close()
	// create a button to close window
	var buttonBack = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'yellowbutton.png',
	backgroundSelectedImage:'yellowbutton.png',
	backgroundDisabledImage:'yellowbutton.png',
	top:700,
	width:301,
	height:57,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Back'});
	
	winGuestMember.add(buttonBack);
	buttonBack.addEventListener('click', function()
	{
		winGuestMember.close();
		win.open();
	});

	winGuestMember.open();
});

win.add(buttonGuestMember);
win.add(buttonAdmission);