var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;


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
    url: '/Schedule/schedule2.js',
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
		mapIconAnimal.hide();

//		mapIconAnimal.visible=true;
		mapIconAttraction.visible=false;
		mapIconFacility.visible=false;
		mapIconGreenTour.visible=false;
//		animals.visible=true;
//		attractions.visible=false;
//		facilities.visible=false;
//		greentour.visible=false;
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
	title:'Animals'});	
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

var buttonFindMe = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/ParkMap/findme.png',
	borderSelectedColor:'#FFFFFF',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.8,
	font:{fontSize:'12dp', fontcolor:'black', fontFamily:'Helvetica Neue'},
});	
buttonFindMe.addEventListener('click', function()
{
Titanium.Geolocation.getCurrentPosition(function(e)
{
    if (e.error)
    {
        alert('HFL cannot get your current location');
        return;
    }
 
    var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;
    
	var xPixel =((720213.809* latitude)+(1147131.61*longitude)+112913088);
	var yPixel =((-1589582.59* latitude)+(536408.247*longitude)+124701993);
	//Titanium.Geolocation.distanceFilter = 100; //changed after first location event

	if ((xPixel<0)||(xPixel>5616)||(yPixel<0)||(yPixel>3712))
	//IF NOT AT HHPZ
	{
		alert('You don\'t appear to be at Happy Hollow');}
	else{
		var LocateMe=Titanium.UI.createImageView({
			image:'findme.png',
			top:yPixel,
			left:xPixel
		})
	};
});
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
  minZoomScale:0,  
  maxZoomScale:10, 
  zoomScale:5,  
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
scrollViewVertical.addEventListener('pinch',function(e){
      if (e.scale>1){
      	if (e.scale>scrollViewVertical.zoomScale){
            scrollViewVertical.zoomScale=e.scale;
            }else{
            scrollViewVertical.zoomScale=scrollViewVertical.oldZoom + (e.scale-1);}
            }
            else
              if (e.scale<scrollViewVertical.zoomScale)
                scrollViewVertical.zoomScale=scrollViewVertical.zoomScale - (1-e.scale);
            }); 
            scrollViewVertical.addEventListener('touchend',function(e){
            scrollViewVertical.oldZoom=scrollViewVertical.zoomScale;
            });


    
//put locations into map, not sure what the ratio for pixels is...right now it's kind of trial and error
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"Locations.xml");
	var xmltext = file.read().text;
	var doc = Ti.XML.parseString(xmltext);
	var elements = doc.getElementsByTagName("LocationName");

    for (var i=0;i<elements.length;i++) {
    	PixelX = doc.getElementsByTagName("PixelX").item(i).text;
        PixelY = doc.getElementsByTagName("PixelY").item(i).text;
        LocationName = doc.getElementsByTagName("LocationName").item(i).text;
        Category = doc.getElementsByTagName("Category").item(i).text;

        if (Category == "Animal"){
    	var mapIconAnimal = Titanium.UI.createButton({
    		backgroundImage:'animals.png',
    		top: ((PixelY/2/1.5)-(pWidth*.15)/2),
    		left: (PixelX/2/1.5)-(pWidth*.15)/2,
    		width:pWidth*.125,
    		pHeight:pWidth*.125,
    	})
    	
    	var mapLabelAnimal=Titanium.UI.createLabel({
     		top: (PixelY/2/1.5),
    		left: (PixelX/2/1.5)-(pWidth*.125)/2,
    		width:pWidth*.18,
    		pHeight:pWidth*.1,
    		text: LocationName,
        	font:{fontSize:'10dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	})
    	scrollViewHorizontal.add(mapIconAnimal);
    	scrollViewHorizontal.add(mapLabelAnimal);
    //	animals.add(mapLabelAnimal);
    //	scrollViewHorizontal.add(animals);
    	animalsopened=true;
    };
    
        if (Category == "Attraction"){
    	var mapIconAttraction = Titanium.UI.createButton({
    		backgroundImage:'attractions.png',
    		title:LocationName,
    		top: ((PixelY/2/1.5)-(pWidth*.15)/2),
    		left: (PixelX/2/1.5)-(pWidth*.15)/2,
    		width:pWidth*.125,
    		pHeight:pWidth*.125,
    	});
    	
  //  	var mapLabelAttraction=Titanium.UI.createLabel({
   //  		top: (PixelY/2/1.5),
   // 		left: (PixelX/2/1.5)-(pWidth*.125)/2,
   // 		width:pWidth*.18,
   // 		pHeight:pWidth*.15,
   // 		text: LocationName,
    //    	font:{fontSize:'10dp', fontWeight:'bold'},    		  
    //		color: '#000000'   		
    //	})
		mapimage.add(mapIconAttraction);
	//	attractions.add(mapLabelAttraction);
	//	scrollViewHorizontal.add(attractions);
		attractionsopened=true;
    };
    
        if (Category == "Facility"){
    	var mapIconFacility = Titanium.UI.createButton({
    		title:LocationName,
    		backgroundImage:'facilities.png',
    		top: ((PixelY/2/1.5)-(pWidth*.15)/2),
    		left: (PixelX/2/1.5)-(pWidth*.15)/2,
    		width:pWidth*.125,
    		pHeight:pWidth*.125,
    	});
    	
  //  	var mapLabelFacility=Titanium.UI.createLabel({
   //  		top: (PixelY/2/1.5),
   // 		left: (PixelX/2/1.5)-(pWidth*.125)/2,
   // 		width:pWidth*.18,
   // 		pHeight:pWidth*.15,
   // 		text: LocationName,
    //    	font:{fontSize:'10dp', fontWeight:'bold'},    		  
    //		color: '#000000'   		
    //	})
		mapimage.add(mapIconFacility);
	//	facilities.add(mapLabelFacility);
	//	scrollViewHorizontal.add(facilities);
		facilitiesopened=true;
    };
    
        if (Category == "Green Tour"){
    	var mapIconGreenTour = Titanium.UI.createButton({
    		title:LocationName,
    		backgroundImage:'greentour.png',
    		top: ((PixelY/2/1.5)-(pWidth*.15)/2),
    		left: (PixelX/2/1.5)-(pWidth*.15)/2,
    		width:pWidth*.125,
    		pHeight:pWidth*.125,
    	});
    	
   // 	var mapLabelGreenTour=Titanium.UI.createLabel({
    // 		top: (PixelY/2/1.5),
    //		left: (PixelX/2/1.5)-(pWidth*.125)/2,
    //		width:pWidth*.18,
    //		pHeight:pWidth*.15,
    //		text: LocationName,
     //   	font:{fontSize:'10dp', fontWeight:'bold'},    		  
    //		color: '#000000'   		
    //	})
		mapimage.add(mapIconGreenTour);
//		greentour.add(mapLabelGreenTour);
//		scrollViewHorizontal.add(greentour);
		greentouropened=true;
    };}


//put horizontal scrollview into vertical scrollview and add to window
//scrollViewHorizontal.add(mapimage);
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

win.addEventListener('android:back', function() {  
           win.close();             
            });