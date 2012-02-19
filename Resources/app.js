var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;


//create windows
var winHomeScreen = Titanium.UI.createWindow({
    title:'Happy Hollow Park and Zoo',
    backgroundColor:'#FFFFFF',
    url: 'winmenu.js',
    fullscreen : true,  
    exitOnClose: true,
    navBarHidden: true
});


var winParkMap = Titanium.UI.createWindow({
    title:'Park Map',
    backgroundColor:'#FFFFFF',
    url: '/ParkMap/parkmap.js',
    fullscreen : true,});

var winAnimals = Titanium.UI.createWindow({
    title:'Animals',
    backgroundColor:'#FFFFFF',
    url: 'Animals/animals.js',
    fullscreen : true,});

var winRidesAttractions = Titanium.UI.createWindow({
    title:'Rides & Attractions',
    backgroundColor:'#FFFFFF',
    url: 'Attractions/attractions.js',
    fullscreen : true,});

var winGreenTour = Titanium.UI.createWindow({
    title:'Green Tour',
    backgroundColor:'#FFFFFF',
    url: '/GreenTour/greentour.js',
    fullscreen : true,});

var winFacilities = Titanium.UI.createWindow({
    title:'Facilities',
    backgroundColor:'#FFFFFF',
    url: 'Facilities/facilities.js',
    fullscreen : true,});

var winSchedule = Titanium.UI.createWindow({
    title:'Schedule',
    backgroundColor:'#FFFFFF',
    url: 'Schedule/schedule.js',
    fullscreen : true,});

var winContactUs = Titanium.UI.createWindow({
    title:'Contact Us',
    backgroundColor:'#FFFFFF',
    url: 'ContactUs/contactus.js',
    fullscreen : true,});

//create button labels
var parkmapicon= Titanium.UI.createImageView({
	image:'parkmapicon.png',
	top: pHeight - pHeight,
	left:'0dp',
	width:'80dp',
	height:'60dp'});

var animalsicon= Titanium.UI.createImageView({
	image:'animalsicon.png',
	top: (pHeight/7),
	left:'0dp',
	width:'80dp',
	height:'60dp'});
	
var ridesattractionsicon= Titanium.UI.createImageView({
	image:'ridesattractionsicon.png',
	top: (pHeight/7)*2,
	left:'0dp',
	width:'80dp',
	height:'60dp'});

var greentouricon= Titanium.UI.createImageView({
	image:'greentouricon.png',
	top: (pHeight/7)*3,
	left:'0dp',
	width:'80dp',
	height:'60dp'});

var facilitiesicon= Titanium.UI.createImageView({
	image:'facilitiesicon.png',
	top: (pHeight/7)*4,
	left:'0dp',
	width:'80dp',
	height:'60dp'});
	
var scheduleicon= Titanium.UI.createImageView({
	image:'scheduleicon.png',
	top: (pHeight/7)*5,
	left:'0dp',
	width:'80dp',
	height:'60dp'});
			
var contactusicon= Titanium.UI.createImageView({
	image:'contactusicon.png',
	top: (pHeight/7)*6,
	left:'0dp',
	width:'80dp',
	height:'60dp'});
				
var arrowicon= Titanium.UI.createLabel({
	image:'arrow.png',
	left:'280dp',
	width:'60dp',
	height:'60dp'});

//create buttons
var buttonParkMap = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'parkmaprest.png',
	backgroundSelectedImage:'parkmapselect.png',
	top: (pHeight/pHeight),
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Park Map'});
buttonParkMap.addEventListener('click', function()
{winParkMap.open();});

var buttonAnimals = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'animalsrest.png',
	backgroundSelectedImage:'animalsselect.png',
	top:(pHeight/7),
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Animals'});

buttonAnimals.addEventListener('click', function()
{winAnimals.open();});

var buttonRidesAttractions = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'ridesattractionsrest.png',
	backgroundSelectedImage:'ridesattractionsselect.png',
	top:(pHeight/7)*2,
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'25dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Rides & Attractions'});

buttonRidesAttractions.addEventListener('click', function()
{winRidesAttractions.open();});
	
var buttonGreenTour = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'greentourrest.png',
	backgroundSelectedImage:'greentourselect.png',
	top:(pHeight/7)*3,
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Green Tour'});	
buttonGreenTour.addEventListener('click', function()
{winGreenTour.open();});
	
var buttonFacilities = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'facilitiesrest.png',
	backgroundSelectedImage:'facilitiesselect.png',
	top:(pHeight/7)*4,
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Facilities'});	
	
buttonFacilities.addEventListener('click', function()
{winFacilities.open();});
	
var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'schedulerest.png',
	backgroundSelectedImage:'scheduleselect.png',
	top:(pHeight/7)*5,
	width:pWidth,
	height:(pHeight/7),
	font:{fontSize:'30dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Schedule'});
buttonSchedule.addEventListener('click', function()
{winSchedule.open();});
	
var buttonContactUs = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'contactusrest.png',
	backgroundSelectedImage:'contactusselect.png',
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
winHomeScreen.add(parkmapicon);
winHomeScreen.add(animalsicon);
winHomeScreen.add(ridesattractionsicon);
winHomeScreen.add(greentouricon);
winHomeScreen.add(facilitiesicon);
winHomeScreen.add(scheduleicon);
winHomeScreen.add(contactusicon);
	
winHomeScreen.open();
