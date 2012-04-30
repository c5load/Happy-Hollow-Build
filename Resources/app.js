var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

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

//create buttons
var buttonParkMap = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ParkMap/parkmaprest.png',
	backgroundSelectedImage:'/ParkMap/parkmapselect.png',
	top: (pHeight/pHeight),
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Park Map'});
	
buttonParkMap.addEventListener('click', function()
{	
	var winParkMap = Titanium.UI.createWindow({
    title:'Park Map',
    navBarHidden:true,
    backgroundColor:'#FFFFFF',
    url: 'ParkMap/parkmap.js',
    fullscreen : true,});
winParkMap.addEventListener('close', function(){winParkMap = null;});
winParkMap.open();
});

var buttonAnimals = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Animals/animalsrest.png',
	backgroundSelectedImage:'/Animals/animalsselect.png',
	top:(pHeight/7),
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Animals'});

buttonAnimals.addEventListener('click', function()
	{var winAnimals = Titanium.UI.createWindow({
	    title:'Animals',
	    navBarHidden:true,
	    backgroundColor:'#FFFFFF',
	    url: 'Animals/animals.js',
	    fullscreen : true});
		winAnimals.addEventListener('close', function(){winAnimals = null;});
		winAnimals.open();
		});

var buttonRidesAttractions = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Attractions/ridesattractionsrest.png',
	backgroundSelectedImage:'/Attractions/ridesattractionsselect.png',
	top:(pHeight/7)*2,
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'18dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Rides & Attractions'});

buttonRidesAttractions.addEventListener('click', function()
{
	var winRidesAttractions = Titanium.UI.createWindow({
    title:'Rides & Attractions',
    navBarHidden:true,
    backgroundColor:'#FFFFFF',
    url: 'Attractions/attractions.js',
    fullscreen : true,});
winRidesAttractions.addEventListener('close', function(){winRidesAttractions= null;});
    
	winRidesAttractions.open();});
	
var buttonGreenTour = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/GreenTour/greentourrest.png',
	backgroundSelectedImage:'/GreenTour/greentourselect.png',
	top:(pHeight/7)*3,
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Green Tour'});	
buttonGreenTour.addEventListener('click', function()
{
	var winGreenTour = Titanium.UI.createWindow({
    title:'Green Tour',
    navBarHidden:true,    
    backgroundColor:'#FFFFFF',
    url: '/GreenTour/greentour.js',
    fullscreen : true,});
 winGreenTour.addEventListener('close', function(){winGreenTour = null;});   
	winGreenTour.open();});
	
var buttonFacilities = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Facilities/facilitiesrest.png',
	backgroundSelectedImage:'/Facilities/facilitiesselect.png',
	top:(pHeight/7)*4,
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Facilities'});	
	
buttonFacilities.addEventListener('click', function()
{
var winFacilities = Titanium.UI.createWindow({
    title:'Facilities',
    navBarHidden:true,    
    backgroundColor:'#FFFFFF',
    url: 'Facilities/facilities.js',
    fullscreen : true,});	
 winFacilities.addEventListener('close', function(){winFacilities = null;}); 
	winFacilities.open();});
	
var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Schedule/schedulerest.png',
	backgroundSelectedImage:'/Schedule/scheduleselect.png',
	top:(pHeight/7)*5,
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Schedule'});
buttonSchedule.addEventListener('click', function()
{
	var winSchedule = Titanium.UI.createWindow({
    title:'Schedule',
    navBarHidden:true,    
    backgroundColor:'#FFFFFF',
    url: 'Schedule/schedule.js',
    fullscreen : true,});
 winSchedule.addEventListener('close', function(){winSchedule = null;});     
	winSchedule.open();});
	
var buttonContactUs = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/ContactUs/contactusrest.png',
	backgroundSelectedImage:'/ContactUs/contactusselect.png',
	top:(pHeight/7)*6,
	width: pWidth,
	height:(pHeight/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Contact Us'});
buttonContactUs.addEventListener('click', function()
{
	var winContactUs = Titanium.UI.createWindow({
    title:'Contact Us',
    navBarHidden:true,    
    backgroundColor:'#FFFFFF',
    url: 'ContactUs/contactus.js',
    fullscreen : true,});
 winContactUs.addEventListener('close', function(){winContactUs = null;});     
	winContactUs.open();});
			
winHomeScreen.add(buttonParkMap);
winHomeScreen.add(buttonAnimals);
winHomeScreen.add(buttonRidesAttractions);
winHomeScreen.add(buttonGreenTour);
winHomeScreen.add(buttonFacilities);
winHomeScreen.add(buttonSchedule);
winHomeScreen.add(buttonContactUs);

//winHomeScreen.open();

Ti.Gesture.addEventListener('orientationchange', function(e) {
    Ti.Android.currentActivity.setRequestedOrientation(Ti.Android.SCREEN_ORIENTATION_PORTRAIT);
});

var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'Animals.xml');
if (file.exists()) { file.deleteFile(); }

var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'Attractions.xml');
if (file.exists()) { file.deleteFile(); }

var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'Facilities.xml');
if (file.exists()) { file.deleteFile(); }

var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'GreenTour.xml');
if (file.exists()) { file.deleteFile(); }

var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'Locs.xml');
if (file.exists()) { file.deleteFile(); }

var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'Specials.xml');
if (file.exists()) { file.deleteFile(); }

var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'RideSchedule.xml');
if (file.exists()) { file.deleteFile(); }

var file = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'Schedule.xml');
if (file.exists()) { file.deleteFile(); }

if (Titanium.Network.networkType != Titanium.Network.NETWORK_NONE){ // Network is available, download latest database
        var xhr = Ti.Network.createHTTPClient();
        xhr.open("GET","http://hhpz.org/mobile/xml/Animals.xml");
        xhr.onerror = function(e) {
            Ti.UI.createAlertDialog({title:'Network Error', message:'You must have an internet connection to access most of the features of this application.'}).show();
            Ti.API.info('IN ERROR ' + e.error);
        };
        xhr.setTimeout(15000);

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
        xhr.open("GET","http://hhpz.org/mobile/xml/Attractions.xml");
        xhr.setTimeout(30000);
        xhr.onload = function() {
            try {
				var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'Attractions.xml');
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
        xhr.open("GET","http://hhpz.org/mobile/xml/Facilities.xml");
        xhr.setTimeout(30000);
        xhr.onload = function() {
            try {
				var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'Facilities.xml');
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
        xhr.open("GET","http://hhpz.org/mobile/xml/GreenTour.xml");
        xhr.setTimeout(30000);
        xhr.onload = function() {
            try {
				var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'GreenTour.xml');
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
       xhr.open("GET","http://hhpz.org/mobile/xml/Locs.xml");
        xhr.setTimeout(30000);
        xhr.onload = function() {
           try {
				var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,"Locs.xml");
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
        xhr.open("GET","http://hhpz.org/mobile/xml/Specials.xml");
        xhr.setTimeout(30000);
        xhr.onload = function() {
            try {
				var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'Specials.xml');
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
       xhr.open("GET","http://hhpz.org/mobile/cf/rideinfo.cfm");
        xhr.setTimeout(30000);
        xhr.onload = function() {
           try {
				var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,"RideSchedule.xml");
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
       xhr.open("GET","http://www.hhpz.org/index.cfm/id/161/lang/1/");
        xhr.setTimeout(30000);
        xhr.onload = function() {
           try {
				var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,"Schedule.xml");
				f.write(this.responseData);
				Ti.API.info(this.responseText); // check the file content on TI info panel.
				}
			catch(E){Ti.UI.createAlertDialog({title:'Application Error', message:E.error}).show();
            };
        };
        xhr.send();
};

setTimeout(function() {
winHomeScreen.open();
}, 4000);

//winHomeScreen.open();
