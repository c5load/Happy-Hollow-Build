var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

//create views for each category
var map=Titanium.UI.createView({
  opacity:.25,
  height:2808/1.5,
  width:2064,
  top:'0dp'	
});

var animals=Titanium.UI.createView({
  opacity:.25,
  height:2808/1.5,
  width:2064,
  top:'0dp'	
});

var attractions=Titanium.UI.createView({
  opacity:.25,
  height:2808/1.5,
  width:2064,
  top:'0dp'		
});

var facilities=Titanium.UI.createView({
  opacity:.25,
  height:2808/1.5,
  width:2064,
  top:'0dp'		
});

var greentour=Titanium.UI.createView({
  opacity:.25,
  height:2808/1.5,
  width:2064,
  top:'0dp'	
});

var other=Titanium.UI.createView({
  opacity:.25,
  height:2808/1.5,
  width:2064,
  top:'0dp'	
});

//declare title bar and buttons
var TitleBar=Titanium.UI.createImageView({
	image:'/ParkMap/parkmapbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});

var lblTitle=Titanium.UI.createLabel({
	text:"Park Map",
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

var buttonHome = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'homeresting.png',
	backgroundSelectedImage:'homeselected.png',
	top: pHeight*.02, 
	left:pWidth*.04,
	width:pWidth*.19,
	height:pHeight*.07,});
buttonHome.addEventListener('click', function()
{	var winHomeScreen = Titanium.UI.createWindow({
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

//declare variables
var animalsopened=false;
var attractionsopened=false;
var facilitiesopened=false;
var greentouropened=false;


//declare bottom tabs/buttons
var buttonAnimals = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/Animals/animaliconscolor.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*0,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Animals'});	
buttonAnimals.addEventListener('click', function()
{
	if (animalsopened == true){
		animalsopened=false;
		animals.visible=true;
		attractions.visible=false;
		facilities.visible=false;
		greentour.visible=false;
		attractionsopened=true;
		facilitiesopened=true;
		greentouropened=true;
		buttonAnimals.borderColor='#FFFFFF';
		buttonAnimals.color='#000000'; 
		buttonAttractions.borderColor='#333333';
		buttonAttractions.color="#FFFFFF";
		buttonFacilities.borderColor='#333333';
		buttonFacilities.color="#FFFFFF";
		buttonGreenTour.borderColor='#333333';
		buttonGreenTour.color="#FFFFFF"	
	}
	else {		
		animals.visible=true;
		attractions.visible=true;
		facilities.visible=true;
		greentour.visible=true;
		animalsopened=true;
		attractionsopened=true;
		facilitiesopened=true;
		greentouropened=true;
		buttonAnimals.borderColor='#333333';
		buttonAnimals.color="#FFFFFF"				
 	};
   });


var buttonAttractions = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/Attractions/ridesattractionsiconcolor.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.2,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Attractions'});
buttonAttractions.addEventListener('click', function()
{	if (attractionsopened == true){
		attractionsopened=false;
		attractions.visible=true;
		animals.visible=false;
		facilities.visible=false;
		greentour.visible=false;
		animalsopened=true;
		facilitiesopened=true;
		greentouropened=true;
		buttonAttractions.borderColor='#FFFFFF';
		buttonAttractions.color='#000000'; 
		buttonAnimals.borderColor='#333333';
		buttonAnimals.color="#FFFFFF";
		buttonFacilities.borderColor='#333333';
		buttonFacilities.color="#FFFFFF";
		buttonGreenTour.borderColor='#333333';
		buttonGreenTour.color="#FFFFFF"	
	}
	else {		
		animals.visible=true;
		attractions.visible=true;
		facilities.visible=true;
		greentour.visible=true;
		animalsopened=true;
		attractionsopened=true;
		facilitiesopened=true;
		greentouropened=true;
		buttonAttractions.borderColor='#333333',
		buttonAttractions.color="#FFFFFF"
 	};
});

var buttonFacilities = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/Facilities/facilitiesiconcolor.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.4,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Facilities'});		
buttonFacilities.addEventListener('click', function()
{
	if (facilitiesopened == true){
		facilitiesopened=false;
		facilities.visible=true;
		animals.visible=false;
		attractions.visible=false;
		greentour.visible=false;
		animalsopened=true;	
		attractionsopened=true;
		greentouropened=true;
		buttonFacilities.borderColor='#FFFFFF';
		buttonFacilities.color='#000000'; 
		buttonAnimals.borderColor='#333333';
		buttonAnimals.color="#FFFFFF";
		buttonAttractions.borderColor='#333333';
		buttonAttractions.color="#FFFFFF";
		buttonGreenTour.borderColor='#333333';
		buttonGreenTour.color="#FFFFFF"	
	}
	else {		
		animals.visible=true;
		attractions.visible=true;
		facilities.visible=true;
		greentour.visible=true;
		animalsopened=true;
		attractionsopened=true;
		facilitiesopened=true;
		greentouropened=true;
		buttonFacilities.borderColor='#333333',
		buttonFacilities.color="#FFFFFF"
 	};
});

var buttonGreenTour = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/GreenTour/greentouriconcolor.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.6,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Green Tour'});	
buttonGreenTour.addEventListener('click', function()
{
	if (greentouropened == true){
		greentouropened=false;
		greentour.visible=true;
		animals.visible=false;
		attractions.visible=false;
		facilities.visible=false;
		animalsopened=true;
		attractionsopened=true;
		facilitiesopened=true;
		buttonGreenTour.borderColor='#FFFFFF';
		buttonGreenTour.color='#000000'; 
		buttonAnimals.borderColor='#333333';
		buttonAnimals.color="#FFFFFF";
		buttonAttractions.borderColor='#333333';
		buttonAttractions.color="#FFFFFF";
		buttonFacilities.borderColor='#333333';
		buttonFacilities.color="#FFFFFF";
	}
	else {		
		animals.visible=true;
		attractions.visible=true;
		facilities.visible=true;
		greentour.visible=true;
		animalsopened=true;
		attractionsopened=true;
		facilitiesopened=true;
		greentouropened=true;
		buttonGreenTour.borderColor='#333333',
		buttonGreenTour.color="#FFFFFF"
 	}
});

var latitude;
var longitude;
var xPixel;
var yPixel;
/*
	//  SET DISTANCE FILTER.  THIS DICTATES HOW OFTEN AN EVENT FIRES BASED ON THE DISTANCE THE DEVICE MOVES
	//  THIS VALUE IS IN METERS
	//
	Titanium.Geolocation.distanceFilter = 10;

	//
	// GET CURRENT POSITION - THIS FIRES ONCE
	//
	Titanium.Geolocation.getCurrentPosition(function(e)
	{
		if (!e.success || e.error)
		{
		}

		longitude = e.coords.longitude;
		latitude = e.coords.latitude;
});

	//
	// EVENT LISTENER FOR GEO EVENTS - THIS WILL FIRE REPEATEDLY (BASED ON DISTANCE FILTER)
	//
	var locationCallback = function(e)
	{
		if (!e.success || e.error)
		{
		}

		longitude = e.coords.longitude;
		latitude = e.coords.latitude;

		xPixel =(720213.809*latitude)+(1147131.61*longitude)+112913088;
		yPixel =(-1589582.59*latitude)+(536408.247*longitude)+124701993;
	
		xPixel=(xPixel/2/1.36)-(pWidth*.06);
		yPixel=(yPixel/2/1.11)-(pWidth*.06);
		//Titanium.Geolocation.distanceFilter = 100; //changed after first location event

		
		setTimeout(function()
		{
		alert(longitude);
	    alert(yPixel);
	    alert(latitude)
		alert(xPixel);
		},100);
};

Titanium.Geolocation.addEventListener('location', locationCallback);
*/

var buttonFindMe = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
//	backgroundSelectedColor:'#FFFFFF',
	backgroundImage:'/ParkMap/findmerest.png',
	backgroundSelectedImage:'/ParkMap/findme.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.8,
	font:{fontSize:'12dp', fontcolor:'black', fontFamily:'Helvetica Neue'},
});

	
buttonFindMe.addEventListener('click', function()
{		alert(longitude);
	    alert(yPixel);
	    alert(latitude)
		alert(xPixel);});
/*Titanium.Geolocation.getCurrentPosition(function(e)
{
    if (e.error)
    {
        alert('HFL cannot get your current location');
        return;
    }
    
    longitude = e.coords.longitude;
    latitude = e.coords.latitude;

    xPixel =(720213.809*latitude)+(1147131.61*longitude)+112913088;
    yPixel =(-1589582.59*latitude)+(536408.247*longitude)+124701993;
	
	xPixel=(xPixel/2/1.36)-(pWidth*.06);
	yPixel=(yPixel/2/1.11)-(pWidth*.06);    

	alert(longitude);
   	alert(yPixel);
   	alert(latitude);
    alert(xPixel);
 });
});

	var locationCallback = function(e)
	{
		if (!e.success || e.error)
		{
		}   
	   	longitude = e.coords.longitude;
		latitude = e.coords.latitude;

		//Titanium.Geolocation.distanceFilter = 100; //changed after first location event

	xPixel =(720213.809*latitude)+(1147131.61*longitude)+112913088;
	yPixel =(-1589582.59*latitude)+(536408.247*longitude)+124701993;
	
	xPixel=(xPixel/2/1.36)-(pWidth*.06);
	yPixel=(yPixel/2/1.11)-(pWidth*.06);

		setTimeout(function()
		{
		alert(longitude);
  		alert(yPixel);
  		alert(latitude);
   		alert(xPixel);	
		},100);  
		
};

Titanium.Geolocation.addEventListener('location', locationCallback);
*/
	
//declare map; shrunk down a bit to accomodate 
var mapimage =  Titanium.UI.createImageView({
  url:'parkmap.png',
  height:2808/1.5,
  width:2064,
  });
map.add(mapimage);

//declare horizontal scrollview
var scrollViewHorizontal =  Titanium.UI.createScrollView({
  height:'auto',
  width:'auto',
  top:'0dp',
  borderRadius:0,
  contentHeight:'auto',
  scrollType:'horizontal',
  showVerticalScrollIndicator:false,
  showHorizontalScrollIndicator:false,
  minZoomScale:0.1,
  maxZoomScale:100,
  zoomScale:.1
});

//add map into horizontal scrollview
//scrollViewHorizontal.add(mapimage);

//declare vertical scrollview
var scrollViewVertical =  Titanium.UI.createScrollView({
  height:pHeight*.8,
  width:pWidth,
  top:pHeight*.1,
  borderRadius:0,
  contentWidth:pWidth,
  showVerticalScrollIndicator:false,
  showHorizontalScrollIndicator:false,
  minZoomScale:0.1,
  maxZoomScale:100,
  zoomScale:1
});


//put locations into map, not sure what the ratio for pixels is...right now it's kind of trial and error
//    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"Locations.xml");
//	var xmltext = file.read().text;
//	var doc = Ti.XML.parseString(xmltext);
//	var elements = doc.getElementsByTagName("LocationName");   

    
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function()
{
    var doc = this.responseXML.documentElement;
    var elements = doc.getElementsByTagName("LocName");            

    for (var i=0;i<elements.length;i++) {
    	var PixelX = doc.getElementsByTagName("PixelX").item(i).text;
        var PixelY = doc.getElementsByTagName("PixelY").item(i).text;
        var LocationName = doc.getElementsByTagName("LocName").item(i).text;
        var Category = doc.getElementsByTagName("Category").item(i).text;

        var animal=/.*Animal.*/;
        var attraction=/.*Attraction.*/;
        var facility=/.*Facility.*/;
        var greenTour=/.*Green Tour.*/;
        var restroom=/.*Restroom.*/;
        var exit=/.*Emergency Exit.*/;
        var parkinglot=/.*Parking Lot.*/;
                                
        if (animal.test(Category)){
    	var mapIconAnimal = Titanium.UI.createImageView({
    		url:'animals.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    	});
    	
    	var mapLabelAnimal=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.01),
    		left: (PixelX/2/1.35)-(pWidth*.09),
    		width:pWidth*.15,
    		Height:pWidth*.12,
    		text: LocationName,
        	font:{fontSize:'9dp', fontWeight:'bold'},
        	textAlign:'center',    		  
    		color: '#000000'   		
    	});
    	animals.add(mapIconAnimal);
    	animals.add(mapLabelAnimal);
        } 
        
        if (attraction.test(Category)){
    	var mapIconAttraction = Titanium.UI.createImageView({
    		url:'attractions.png',
    		top: (PixelY/2/1.11)-(pWidth*.06),
    		left: (PixelX/2/1.36)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    	});
    	
    	var mapLabelAttraction=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.01),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.12,
    		text: LocationName,
        	font:{fontSize:'9dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	});
		attractions.add(mapIconAttraction);
		attractions.add(mapLabelAttraction);
        } 
        
        if (facility.test(Category)){
    	var mapIconFacility = Titanium.UI.createImageView({
    		url:'facilities.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    	});
    	
    	var mapLabelFacility=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.01),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.12,
    		text: LocationName,
        	font:{fontSize:'9dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	});
		facilities.add(mapIconFacility);
		facilities.add(mapLabelFacility);	
        } 
        
        if (greenTour.test(Category)){
    	var mapIconGreenTour = Titanium.UI.createImageView({
    		url:'greentour.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.36)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    	});
    	
    	var mapLabelGreenTour=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.01),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.12,
    		text: LocationName,
        	font:{fontSize:'9dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	});
		greentour.add(mapIconGreenTour);
		greentour.add(mapLabelGreenTour);
        }
        
        if (restroom.test(Category)){
    	var mapIconRestroom = Titanium.UI.createImageView({
    		url:'restroom.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    	});
    	
    	var mapLabelRestroom=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.04),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.12,
    		text: 'Restroom',
        	font:{fontSize:'9dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	});
		other.add(mapIconRestroom);
		other.add(mapLabelRestroom);
        }      
          
        if (exit.test(Category)){
    	var mapIconExit = Titanium.UI.createImageView({
    		url:'emergency.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    	});
    	
    	var mapLabelExit=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.04),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.12,
    		text: 'Emergency Exit',
        	font:{fontSize:'9dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	});
		other.add(mapIconExit);
		other.add(mapLabelExit);
        }        
     
        if (parkinglot.test(Category)){
    	var mapIconParking = Titanium.UI.createImageView({
    		url:'parkinglot.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    	});
    	
    	var mapLabelParking=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.04),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.12,
    		text: LocationName,
        	font:{fontSize:'9dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	});
		other.add(mapIconParking);
		other.add(mapLabelParking);
        }        
     }
};
        scrollViewHorizontal.add(map);
        scrollViewHorizontal.add(animals);
    	animalsopened=true;
    	scrollViewHorizontal.add(attractions);
		attractionsopened=true;
		scrollViewHorizontal.add(facilities);
		facilitiesopened=true;
		scrollViewHorizontal.add(greentour);
		greentouropened=true;
		scrollViewHorizontal.add(other);
		
//put horizontal scrollview into vertical scrollview and add to window
scrollViewVertical.add(scrollViewHorizontal);
win.add(scrollViewVertical); 
scrollViewHorizontal.scrollTo(pWidth/2, 0);
scrollViewVertical.scrollTo(0,pHeight*.8*.5);

        
win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(buttonAnimals);
win.add(buttonAttractions);
win.add(buttonFacilities);
win.add(buttonGreenTour);
win.add(buttonFindMe);

win.addEventListener('android:back', function() { 
           win.close();             
            });
            
xhr.open('GET','http://hhpz.org/mobile/xml/locs.xml');            
xhr.send();
