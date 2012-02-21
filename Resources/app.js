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
	top: (pHeight/pHeight),
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Park Map'});
buttonParkMap.addEventListener('click', function()
{winParkMap.open();});

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
{winAnimals.open();});

var buttonRidesAttractions = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Attractions/ridesattractionsrest.png',
	backgroundSelectedImage:'/Attractions/ridesattractionsselect.png',
	top:(pHeight/7)*2,
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'23dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Rides & Attractions'});

buttonRidesAttractions.addEventListener('click', function()
{winRidesAttractions.open();});
	
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
{winGreenTour.open();});
	
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
{winFacilities.open();});
	
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
{winSchedule.open();});
	
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
{winContactUs.open();});
			
winHomeScreen.add(buttonParkMap);
winHomeScreen.add(buttonAnimals);
winHomeScreen.add(buttonRidesAttractions);
winHomeScreen.add(buttonGreenTour);
winHomeScreen.add(buttonFacilities);
winHomeScreen.add(buttonSchedule);
winHomeScreen.add(buttonContactUs);

winHomeScreen.open();
