var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;
//
//create windows
var winHomeScreen = Titanium.UI.createWindow({
    title:'Happy Hollow Park and Zoo',
    backgroundColor:'#FFFFFF',
    url: 'winmenu.js',
    navBarHidden:true,
    fullscreen : true,  
    exitOnClose: true,
    navBarHidden: true
});


var winParkMap = Titanium.UI.createWindow({
    title:'Park Map',
    navBarHidden:true,
    backgroundColor:'#FFFFFF',
    url: '/ParkMap/parkmap.js',
    fullscreen : true,});

var winAnimals = Titanium.UI.createWindow({
    title:'Animals',
    navBarHidden:true,
    backgroundColor:'#FFFFFF',
    url: 'Animals/animals.js',
    fullscreen : true,});

var winRidesAttractions = Titanium.UI.createWindow({
    title:'Rides & Attractions',
    navBarHidden:true,
    backgroundColor:'#FFFFFF',
    url: 'Attractions/attractions.js',
    fullscreen : true,});

var winGreenTour = Titanium.UI.createWindow({
    title:'Green Tour',
    navBarHidden:true,    
    backgroundColor:'#FFFFFF',
    url: '/GreenTour/greentour.js',
    fullscreen : true,});

var winFacilities = Titanium.UI.createWindow({
    title:'Facilities',
    navBarHidden:true,    
    backgroundColor:'#FFFFFF',
    url: 'Facilities/facilities.js',
    fullscreen : true,});

var winSchedule = Titanium.UI.createWindow({
    title:'Schedule',
    navBarHidden:true,    
    backgroundColor:'#FFFFFF',
    url: 'Schedule/schedule2.js',
    fullscreen : true,});

var winContactUs = Titanium.UI.createWindow({
    title:'Contact Us',
    navBarHidden:true,    
    backgroundColor:'#FFFFFF',
    url: 'ContactUs/contactus.js',
    fullscreen : true,});

//create button labels

//create buttons
var buttonParkMap = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ParkMap/parkmaprest.png',
	backgroundSelectedImage:'/ParkMap/parkmapselect.png',
	top: (Ti.App.SCREEN_HEIGHT/Ti.App.SCREEN_HEIGHT),
	width:Ti.App.SCREEN_WIDTH,
	height:(Ti.App.SCREEN_HEIGHT/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Park Map'});
buttonParkMap.addEventListener('click', function()
{winParkMap.open();});

var buttonAnimals = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Animals/animalsrest.png',
	backgroundSelectedImage:'/Animals/animalsselect.png',
	top:(Ti.App.SCREEN_HEIGHT/7),
	width:Ti.App.SCREEN_WIDTH,
	height:(Ti.App.SCREEN_HEIGHT/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Animals'});

buttonAnimals.addEventListener('click', function()
{winAnimals.open();});

var buttonRidesAttractions = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Attractions/ridesattractionsrest.png',
	backgroundSelectedImage:'/Attractions/ridesattractionsselect.png',
	top:(Ti.App.SCREEN_HEIGHT/7)*2,
	width:Ti.App.SCREEN_WIDTH,
	height:(Ti.App.SCREEN_HEIGHT/7),
	font:{fontSize:'23dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Rides & Attractions'});

buttonRidesAttractions.addEventListener('click', function()
{winRidesAttractions.open();});
	
var buttonGreenTour = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/GreenTour/greentourrest.png',
	backgroundSelectedImage:'/GreenTour/greentourselect.png',
	top:(Ti.App.SCREEN_HEIGHT/7)*3,
	width:Ti.App.SCREEN_WIDTH,
	height:(Ti.App.SCREEN_HEIGHT/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Green Tour'});	
buttonGreenTour.addEventListener('click', function()
{winGreenTour.open();});
	
var buttonFacilities = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Facilities/facilitiesrest.png',
	backgroundSelectedImage:'/Facilities/facilitiesselect.png',
	top:(Ti.App.SCREEN_HEIGHT/7)*4,
	width:Ti.App.SCREEN_WIDTH,
	height:(Ti.App.SCREEN_HEIGHT/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Facilities'});	
	
buttonFacilities.addEventListener('click', function()
{winFacilities.open();});
	
var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Schedule/schedulerest.png',
	backgroundSelectedImage:'/Schedule/scheduleselect.png',
	top:(Ti.App.SCREEN_HEIGHT/7)*5,
	width:Ti.App.SCREEN_WIDTH,
	height:(Ti.App.SCREEN_HEIGHT/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Schedule'});
buttonSchedule.addEventListener('click', function()
{winSchedule.open();});
	
var buttonContactUs = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/contactusrest.png',
	backgroundSelectedImage:'/ContactUs/contactusselect.png',
	top:(Ti.App.SCREEN_HEIGHT/7)*6,
	width: Ti.App.SCREEN_WIDTH,
	height:(Ti.App.SCREEN_HEIGHT/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Contact Us'});
buttonContactUs.addEventListener('click', function()
{winContactUs.open();});
			
winHomeScreen.add(buttonParkMap);
winHomeScreen.add(buttonAnimals);
winHomeScreen.add(buttonRidesAttractions);
winHomeScreen.add(buttonGreenTour);
winHomeScreen.add(buttonFacilities);
winHomeScreen.add(buttonSchedule);
winHomeScreen.add(buttonContactUs);

winHomeScreen.open();

if (Titanium.Network.networkType != Titanium.Network.NETWORK_NONE){ // Network is available, download latest database
        var xhr = Ti.Network.createHTTPClient();
        xhr.open("POST","http://markmyers.me/hhpz/xml/Animals.xml");
        xhr.onerror = function(e) {
            Ti.UI.createAlertDialog({title:'Network Error', message:e.error}).show();
            Ti.API.info('IN ERROR ' + e.error);
        };
        xhr.setTimeout(30000);
        xhr.onload = function() {
            try {
				var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'Animals.xml');
				f.write(this.responseData);
				Ti.API.info(this.responseText); // check the file content on TI info panel.
				}
			catch(E){Ti.UI.createAlertDialog({title:'Application Error', message:E.error}).show();
            };
        };
        xhr.send();
    };
    
if (Titanium.Network.networkType != Titanium.Network.NETWORK_NONE){ // Network is available, download latest database
        var xhr = Ti.Network.createHTTPClient();
        xhr.open("POST","http://markmyers.me/hhpz/xml/Locations.xml");
        xhr.onerror = function(e) {
            Ti.UI.createAlertDialog({title:'Network Error', message:e.error}).show();
            Ti.API.info('IN ERROR ' + e.error);
        };
        xhr.setTimeout(30000);
        xhr.onload = function() {
            try {
				var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'Locations.xml');
				f.write(this.responseData);
				Ti.API.info(this.responseText); // check the file content on TI info panel.
				}
			catch(E){Ti.UI.createAlertDialog({title:'Application Error', message:E.error}).show();
            };
        };
        xhr.send();
    };