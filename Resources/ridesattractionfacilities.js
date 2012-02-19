/**
 * @author Myers
 */



var winRidesAttractionsFacilities = Titanium.UI.createWindow({
    title:'Rides, Attractions, and Facilities',
    backgroundColor:'#000',
    url: 'winmenu.js',
    fullscreen : true,
    backgroundImage:'background.png'
});


var winAnimals = Titanium.UI.createWindow({
	url:'/Animals/animals.js',
	titleid:'animals',
	fullscreen : true});
	
var winAttractions = Titanium.UI.createWindow({
	url:'/Attractions/attractions.js',
	titleid:'attractions',
	fullscreen : true});
	
var winFacilities = Titanium.UI.createWindow({
	url:'/Facilities/facilities.js',
	titleid:'facilities',
	fullscreen : true});
	
var buttonAnimals = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'purplebutton.png',
	backgroundSelectedImage:'purplebutton.png',
	backgroundDisabledImage:'purplebutton.png',
	top:340,
	width:301,
	height:57,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Animals'});
	

var buttonAttractions = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'purplebutton.png',
	backgroundSelectedImage:'purplebutton.png',
	backgroundDisabledImage:'purplebutton.png',
	top:420,
	width:301,
	height:57,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Attractions'});
	

var buttonFacilities = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'purplebutton.png',
	backgroundSelectedImage:'purplebutton.png',
	backgroundDisabledImage:'purplebutton.png',
	top:500,
	width:301,
	height:57,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Facilities'});
	
	
winRidesAttractionsFacilities.add(buttonAnimals);
winRidesAttractionsFacilities.add(buttonAttractions);
winRidesAttractionsFacilities.add(buttonFacilities);

buttonAnimals.addEventListener('click', function()
{
	winAnimals.open();
	winRidesAttractionsFacilities.close()
	/* create a button to close window
	var buttonRidesAttractionsFacilities = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'yellowbutton.png',
	backgroundSelectedImage:'yellowbutton.png',
	backgroundDisabledImage:'yellowbutton.png',
	top:340,
	width:301,
	height:57,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Animals, Attractions, & Facilities'});
	
	winAnimals.add(buttonRidesAttractionsFacilities);
	buttonRidesAttractionsFacilities.addEventListener('click', function()
	{
		winAnimals.close();
		winRidesAttractionsFacilities.open();
	});*/

	
});



buttonAttractions.addEventListener('click', function()
{
	winAttractions.open();
	winRidesAttractionsFacilities.close()/*
	// create a button to close window
	var buttonRidesAttractionsFacilities= Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'yellowbutton.png',
	backgroundSelectedImage:'yellowbutton.png',
	backgroundDisabledImage:'yellowbutton.png',
	top:420,
	width:301,
	height:57,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Animals, Attractions, & Facilities'});
	
	winAttractions.add(buttonRidesAttractionsFacilities);
	buttonRidesAttractionsFacilities.addEventListener('click', function()
	{
		winAttractions.close();
		winRidesAttractionsFacilities.open();
	});
*/
	
});



buttonFacilities.addEventListener('click', function()
{
	winFacilities.open();
	winRidesAttractionsFacilities.close() /*
	// create a button to close window
	var buttonRidesAttractionsFacilities = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'yellowbutton.png',
	backgroundSelectedImage:'yellowbutton.png',
	backgroundDisabledImage:'yellowbutton.png',
	top:500,
	width:301,
	height:57,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Animals, Attractions, & Facilities'});
	
	winFacilities.add(buttonHomeScreen);
	buttonRidesAttractionsFacilities.addEventListener('click', function()
	{
		winFacilities.close();
		winRidesAttractionsFacilities.open();
	});
	*/
		
});
	



winRidesAttractionsFacilities.open();
