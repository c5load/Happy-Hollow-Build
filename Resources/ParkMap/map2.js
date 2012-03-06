var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

//create views for each category
var animals=Titanium.UI.createView({
  opacity:.25,
  height:'auto',
  width:'auto',
  top:'0dp'	
});

var attractions=Titanium.UI.createView({
  opacity:.25,
  height:'auto',
  width:'auto',
  top:'0dp'		
});

var facilities=Titanium.UI.createView({
  opacity:.25,
  height:'auto',
  width:'auto',
  top:'0dp'		
});

var greentour=Titanium.UI.createView({
  opacity:.25,
  height:'auto',
  width:'auto',
  top:'0dp'	
});

var winHomeScreen = Titanium.UI.createWindow({
    title:'Happy Hollow Park and Zoo',
    backgroundColor:'#FFFFFF',
    url: '/homescreen.js',
    fullscreen : true,  
    exitOnClose: true,
    navBarHidden: true
});

var winSchedule = Titanium.UI.createWindow({
    title:'Schedule',
    backgroundColor:'#FFFFFF',
    url: '/Schedule/schedule2.js',
    fullscreen : true,  
    exitOnClose: true,
    navBarHidden: true
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
{winHomeScreen.open();});

var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'scheduleresting.png',
	backgroundSelectedImage:'scheduleselected.png',
	top:pHeight*.02,
	left:pWidth*.78,
	width:pWidth*.17,
	height:pHeight*.07,});
buttonHome.addEventListener('click', function()
{winSchedule.open();});

//declare variables
var animalsopened=false;
var attractionsopened=false;
var facilitiesopened=false;
var greentouropened=false;

//declare bottom tabs/buttons
var buttonAnimals = Titanium.UI.createButton({
	color:'black',
	backgroundColor:'#595454',
	backgroundImage:'/Animals/animaliconscolor.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*0,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Animals'});	
buttonAnimals.addEventListener('click', function()
{
	if (animalsopened=true){
		animals.hide(); 
		animalsopened=false;
	}
	else {
//		scrollViewHorizontal.add(animals); 
//		animalsopened=true;
       if (Category == "Animal"){
    	var mapIconAnimal = Titanium.UI.createImageView({
    		url:'animals.png',
    		top: (PixelY/2/1.5)-(pWidth*.15)/2,
    		left: (PixelX/2/1.5)-(pWidth*.15)/2,
    		width:pWidth*.125,
    		pHeight:pWidth*.125,
    	});
    	
    	var mapLabelAnimal=Titanium.UI.createLabel({
     		top: (PixelY/2/1.5),
    		left: (PixelX/2/1.5)-(pWidth*.125)/2,
    		width:pWidth*.18,
    		pHeight:pWidth*.1,
    		text: LocationName,
        	font:{fontSize:'10dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	})
    	animals.add(mapIconAnimal);
    	animals.add(mapLabelAnimal);
    	scrollViewHorizontal.add(animals);
    	animalsopened=true;
    };
	}
});

var buttonAttractions = Titanium.UI.createButton({
	color:'black',
	backgroundColor:'#595454',	
	backgroundImage:'/Attractions/ridesattractionsiconcolor.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.2,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Attractions'});
buttonAttractions.addEventListener('click', function()
{
	if (attractionsopened=true){
		attractions.hide(); 
		attractionsopened=false;
	}
	else {
		scrollViewHorizontal.add(attractions); 
		attractionsopened=true;
	}
});

var buttonFacilities = Titanium.UI.createButton({
	color:'black',
	backgroundColor:'#595454',
	backgroundImage:'/Facilities/facilitiesiconcolor.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.4,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Facilities'});		
buttonFacilities.addEventListener('click', function()
{
	if (facilitiesopened=true){
		facilities.hide(); 
		facilitiesopened=false;
	}
	else {
		scrollViewHorizontal.add(facilities); 
		facilitiesopened=true;
	}
});

var buttonGreenTour = Titanium.UI.createButton({
	color:'black',
	backgroundColor:'#595454',
	backgroundImage:'/GreenTour/greentouriconcolor.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.6,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Animals'});	
buttonGreenTour.addEventListener('click', function()
{
	if (greentouropened=true){
		greentour.hide(); 
		greentouropened=false;
	}
	else {
		scrollViewHorizontal.add(greentour); 
		greentouropened=true;
	}
});

var buttonFindMe = Titanium.UI.createButton({
	color:'black',
	backgroundColor:'#595454',
	backgroundImage:'/ParkMap/findme.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.8,
	font:{fontSize:'12dp', fontcolor:'black', fontFamily:'Helvetica Neue'},
});	



//declare map; shrunk down a bit to accomodate 
var mapimage =  Titanium.UI.createImageView({
  url:'parkmap.png',
  height:2808/1.5,
  width:2064,
  });


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
  minZoomScale:1,  
  maxZoomScale:15, 
  zoomScale:1,
  oldZoom:1
});

//add map into horizontal scrollview
scrollViewHorizontal.add(mapimage);

//declare vertical scrollview
var scrollViewVertical =  Titanium.UI.createScrollView({
  height:pHeight*.8,
  width:pWidth,
  top:pHeight*.1,
  borderRadius:0,
  contentWidth:pWidth,
  showVerticalScrollIndicator:false,
  showHorizontalScrollIndicator:false,
  minZoomScale:1,  
  maxZoomScale:15, 
  zoomScale:1,
  oldZoom:1
});



//put locations into map, not sure what the ratio for pixels is...right now it's kind of trial and error
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'Locations.xml');
	var xmltext = file.read().text;
	var doc = Ti.XML.parseString(xmltext);
	var elements = doc.getElementsByTagName("Loc");

    for (var i=0;i<elements.length;i++) {
    	PixelX = doc.getElementsByTagName("PixelX").item(i).text;
        PixelY = doc.getElementsByTagName("PixelY").item(i).text;
        LocationName = doc.getElementsByTagName("LocationName").item(i).text;
        Category = doc.getElementsByTagName("Category").item(i).text;

        if (Category == "Animal"){
    	var mapIconAnimal = Titanium.UI.createImageView({
    		url:'animals.png',
    		top: (PixelY/2/1.5)-(pWidth*.15)/2,
    		left: (PixelX/2/1.5)-(pWidth*.15)/2,
    		width:pWidth*.125,
    		pHeight:pWidth*.125,
    	});
    	
    	var mapLabelAnimal=Titanium.UI.createLabel({
     		top: (PixelY/2/1.5),
    		left: (PixelX/2/1.5)-(pWidth*.125)/2,
    		width:pWidth*.18,
    		pHeight:pWidth*.1,
    		text: LocationName,
        	font:{fontSize:'10dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	})
    	animals.add(mapIconAnimal);
    	animals.add(mapLabelAnimal);
    	scrollViewHorizontal.add(animals);
    	animalsopened=true;
    };
    
        if (Category == "Attraction"){
    	var mapIconAttraction = Titanium.UI.createImageView({
    		url:'attractions.png',
    		top: (PixelY/2/1.5)-(pWidth*.15)/2,
    		left: (PixelX/2/1.5)-(pWidth*.15)/2,
    		width:pWidth*.125,
    		pHeight:pWidth*.125,
    	});
    	
    	var mapLabelAttraction=Titanium.UI.createLabel({
     		top: (PixelY/2/1.5),
    		left: (PixelX/2/1.5)-(pWidth*.125)/2,
    		width:pWidth*.18,
    		pHeight:pWidth*.15,
    		text: LocationName,
        	font:{fontSize:'10dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	})
		attractions.add(mapIconAttraction);
		attractions.add(mapLabelAttraction);
		scrollViewHorizontal.add(attractions);
		attractionsopened=true;
    };
    
        if (Category == "Facility"){
    	var mapIconFacility = Titanium.UI.createImageView({
    		url:'facilities.png',
    		top: (PixelY/2/1.5)-(pWidth*.15)/2,
    		left: (PixelX/2/1.5)-(pWidth*.15)/2,
    		width:pWidth*.125,
    		pHeight:pWidth*.125,
    	});
    	
    	var mapLabelFacility=Titanium.UI.createLabel({
     		top: (PixelY/2/1.5),
    		left: (PixelX/2/1.5)-(pWidth*.125)/2,
    		width:pWidth*.18,
    		pHeight:pWidth*.15,
    		text: LocationName,
        	font:{fontSize:'10dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	})
		facilities.add(mapIconFacility);
		facilities.add(mapLabelFacility);
		scrollViewHorizontal.add(facilities);
		facilitiesopened=true;
    };
    
        if (Category == "Green Tour"){
    	var mapIconGreenTour = Titanium.UI.createImageView({
    		url:'greentour.png',
    		top: (PixelY/2/1.5)-(pWidth*.15)/2,
    		left: (PixelX/2/1.5)-(pWidth*.15)/2,
    		width:pWidth*.125,
    		pHeight:pWidth*.125,
    	});
    	
    	var mapLabelGreenTour=Titanium.UI.createLabel({
     		top: (PixelY/2/1.5),
    		left: (PixelX/2/1.5)-(pWidth*.125)/2,
    		width:pWidth*.18,
    		pHeight:pWidth*.15,
    		text: LocationName,
        	font:{fontSize:'10dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	})
		greentour.add(mapIconGreenTour);
		greentour.add(mapLabelGreenTour);
		scrollViewHorizontal.add(greentour);
		greentouropened=true;
    };}


//put horizontal scrollview into vertical scrollview and add to window
scrollViewVertical.add(scrollViewHorizontal);
win.add(scrollViewVertical);
   
 
win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(buttonAnimals);
win.add(buttonAttractions);
win.add(buttonFacilities);
win.add(buttonGreenTour);
win.add(buttonFindMe);