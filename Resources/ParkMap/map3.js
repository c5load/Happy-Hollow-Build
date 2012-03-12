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
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.8,
	font:{fontSize:'12dp', fontcolor:'black', fontFamily:'Helvetica Neue'},
});	
buttonFindMe.addEventListener('click', function()
{
	Ti.include("version.js");

Ti.Geolocation.preferredProvider = "gps";

if (isIPhone3_2_Plus())
{
	//NOTE: starting in 3.2+, you'll need to set the applications
	//purpose property for using Location services on iPhone
	Ti.Geolocation.purpose = "GPS demo";
}

function translateErrorCode(code) {
	if (code == null) {
		return null;
	}
	switch (code) {
		case Ti.Geolocation.ERROR_LOCATION_UNKNOWN:
			return "Location unknown";
		case Ti.Geolocation.ERROR_DENIED:
			return "Access denied";
		case Ti.Geolocation.ERROR_NETWORK:
			return "Network error";
		case Ti.Geolocation.ERROR_HEADING_FAILURE:
			return "Failure to detect heading";
		case Ti.Geolocation.ERROR_REGION_MONITORING_DENIED:
			return "Region monitoring access denied";
		case Ti.Geolocation.ERROR_REGION_MONITORING_FAILURE:
			return "Region monitoring access failure";
		case Ti.Geolocation.ERROR_REGION_MONITORING_DELAYED:
			return "Region monitoring setup delayed";
	}
}


var locationAdded = false;

//
//  SHOW CUSTOM ALERT IF DEVICE HAS GEO TURNED OFF
//
if (Titanium.Geolocation.locationServicesEnabled === false)
{
	Titanium.UI.createAlertDialog({title:'Happy Hollow', message:'Your device has geolocation turned off - please turn it on.'}).show();
}
else
{
	if (Titanium.Platform.name != 'android') {
		var authorization = Titanium.Geolocation.locationServicesAuthorization;
		Ti.API.info('Authorization: '+authorization);
		if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
			Ti.UI.createAlertDialog({
				title:'Happy Hollow',
				message:'You have disallowed Happy Hollow from running geolocation services.'
			}).show();
		}
		else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
			Ti.UI.createAlertDialog({
				title:'Happy Hollow',
				message:'Your system has disallowed Happy Hollow from running geolocation services.'
			}).show();
		}
	}


var locationCallback = function(e)
{
	if (!e.success || e.error)
	{
		updatedLocation.text = 'error:' + JSON.stringify(e.error);
		updatedLatitude.text = '';
		updatedLocationAccuracy.text = '';
		updatedLocationTime.text = '';
		Ti.API.info("Code translation: "+translateErrorCode(e.code));
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
		var alertDialog = Titanium.UI.createAlertDialog({
		title: 'You don\'t appear to be at HHPZ',
		message: 'Locate Me will be disabled',
		buttonNames: ['OK'],
    		cancel: 1
			});
 
			alertDialog.addEventListener('click',function(e){
		if (e.index == 0) {
    //code to execute when the user clicked Yes.
		}
		})
		alertDialog.show();
		
		var alertDialog = Titanium.UI.createAlertDialog({
		title: 'You\'re not at HHPZ', 
		message: 'X pixel ' + xPixel,
		buttonNames: ['OK'], 
    		cancel: 1
		});
 
			alertDialog.addEventListener('click',function(e){
		if (e.index == 0) {
    //code to execute when the user clicked Yes.
		}
		})
		alertDialog.show();
	}
	//IF THE USER IS AT HHPZ
	else 
	{
		var alertDialog = Titanium.UI.createAlertDialog({
		title: 'Holy crap you\'re at Happy Hollow!', 
		message: 'X Pixel ' + xPixel,
		buttonNames: ['OK'], 
    		cancel: 1
		});
 
			alertDialog.addEventListener('click',function(e){
		if (e.index == 0) {
    //code to execute when the user clicked Yes.
		}
		})
		alertDialog.show();
		
		var alertDialog = Titanium.UI.createAlertDialog({
		title: 'Holy crap you\'re at Happy Hollow!', 
		message: 'Y Pixel ' + yPixel,
		buttonNames: ['OK'], 
    		cancel: 1
		});
 
			alertDialog.addEventListener('click',function(e){
		if (e.index == 0) {
    //code to execute when the user clicked Yes.
		}
		})
		alertDialog.show();
		
		
	
	Titanium.API.info('geo - location updated: ' + ' long ' + longitude + ' lat ' + latitude);
	};
	Titanium.Geolocation.addEventListener('location', locationCallback);
	locationAdded = true;

};




if (Titanium.Platform.name == 'android')
{
	//  as the destroy handler will remove the listener, only set the pause handler to remove if you need battery savings
	Ti.Android.currentActivity.addEventListener('pause', function(e) {
		Ti.API.info("pause event received");
		
		if (locationAdded) {
			Ti.API.info("removing location callback on pause");
			Titanium.Geolocation.removeEventListener('location', locationCallback);
			locationAdded = false;
		}
	});
	Ti.Android.currentActivity.addEventListener('destroy', function(e) {
		Ti.API.info("destroy event received");
		
		if (locationAdded) {
			Ti.API.info("removing location callback on destroy");
			Titanium.Geolocation.removeEventListener('location', locationCallback);
			locationAdded = false;
		}
	});
};
};

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
var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{ 
   var data = [];
    var doc = this.responseXML.documentElement;
    var elements = doc.getElementsByTagName("LocName");

    for (var i=0;i<elements.length;i++) {
    	PixelX = doc.getElementsByTagName("PixelX").item(i).text;
        PixelY = doc.getElementsByTagName("PixelY").item(i).text;
        LocationName = doc.getElementsByTagName("LocName").item(i).text;
        Category = doc.getElementsByTagName("Category").item(i).text;

        if (Category == "Animal"){
    	var mapIconAnimal = Titanium.UI.createImageView({
    		url:'animals.png',
    		top: ((PixelY/2/1.5)-(pWidth*.15)/2),
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
    		top: ((PixelY/2/1.5)-(pWidth*.15)/2),
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
    		top: ((PixelY/2/1.5)-(pWidth*.15)/2),
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
    		top: ((PixelY/2/1.5)-(pWidth*.15)/2),
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
    };}}


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

win.addEventListener('android:back', function() {  
           win.close();             
            });
            
            
xhr.open('GET','http://hhpz.org/mobile/xml/Locs.xml');
xhr.send();