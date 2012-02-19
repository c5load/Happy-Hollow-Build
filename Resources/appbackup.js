// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundImage('background2.png');
var winHomeScreen = Titanium.UI.createWindow({
    title:'Happy Hollow Park and Zoo',
    backgroundColor:'#000',
    url: 'winmenu.js',
    fullscreen : true,
    backgroundImage:'background.png'
});


var winParkInfo = Titanium.UI.createWindow({
	url:'/ParkInfo/parkinfo.js',
	titleid:'park_info',
	fullscreen : true,
	backgroundImage:'background2.png'});

var winAnimals = Titanium.UI.createWindow({
	url:'/ridesattractionfacilities.js',
	titleid:'animals',
	fullscreen : true,
	backgroundImage:'background2.png'});


var winParkMap = Titanium.UI.createWindow({
	url:'/ParkMap/parkmap.js',
	titleid:'park_map',
	fullscreen : true,
	backgroundImage:'background2.png'});


var winSchedule = Titanium.UI.createWindow({
	url:'/Schedule/schedule.js',
	titleid:'park_map',
	fullscreen : true,
	backgroundImage:'background2.png'});


var winContactUs = Titanium.UI.createWindow({
	url:'/ContactUs/contactus.js',
	titleid:'park_map',
	fullscreen : true,
	backgroundImage:'background2.png'});

//
// create buttons
//


var buttonParkMap = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'parkmaprest.png',
	backgroundSelectedImage:'parkmapselect.png',
	top:'0dp',
	width:'320dp',
	height:'70dp',
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Contact Us'});




	// create a button to close window
	//ar buttonHomeScreen = Titanium.UI.createButton({
	//color:'#fff',
	//backgroundImage:'yellowbutton.png',
	//backgroundSelectedImage:'yellowbutton.png',
	//backgroundDisabledImage:'yellowbutton.png',
	//top:600,
	//width:301,
	//height:57,
	//font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	//title:'Home Screen'});
	
	//winParkMap.add(buttonHomeScreen);
	//buttonHomeScreen.addEventListener('click', function()
	//{
		
	//	winHomeScreen.open();
	//});

	//winParkMap.open();



winHomeScreen.open();