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

// state vars used by resume/pause
var headingAdded = false;
var locationAdded = false;

//
//  SHOW CUSTOM ALERT IF DEVICE HAS GEO TURNED OFF
//
if (Titanium.Geolocation.locationServicesEnabled === false)
{
	Titanium.UI.createAlertDialog({title:'Kitchen Sink', message:'Your device has geo turned off - turn it on.'}).show();
}
else
{
	if (Titanium.Platform.name != 'android') {
		var authorization = Titanium.Geolocation.locationServicesAuthorization;
		Ti.API.info('Authorization: '+authorization);
		if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
			Ti.UI.createAlertDialog({
				title:'Kitchen Sink',
				message:'You have disallowed Titanium from running geolocation services.'
			}).show();
		}
		else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
			Ti.UI.createAlertDialog({
				title:'Kitchen Sink',
				message:'Your system has disallowed Titanium from running geolocation services.'
			}).show();
		}
	}

	//
	// IF WE HAVE COMPASS GET THE HEADING
	//
	if (Titanium.Geolocation.hasCompass)
	{
		//
		//  TURN OFF ANNOYING COMPASS INTERFERENCE MESSAGE
		//
		Titanium.Geolocation.showCalibration = false;

		//
		// SET THE HEADING FILTER (THIS IS IN DEGREES OF ANGLE CHANGE)
		// EVENT WON'T FIRE UNLESS ANGLE CHANGE EXCEEDS THIS VALUE
		Titanium.Geolocation.headingFilter = 90;

		//
		//  GET CURRENT HEADING - THIS FIRES ONCE
		//
		Ti.Geolocation.getCurrentHeading(function(e)
		{
			if (e.error)
			{
				currentHeading.text = 'error: ' + e.error;
				Ti.API.info("Code translation: "+translateErrorCode(e.code));
				return;
			}
			var x = e.heading.x;
			var y = e.heading.y;
			var z = e.heading.z;
			var magneticHeading = e.heading.magneticHeading;
			var accuracy = e.heading.accuracy;
			var trueHeading = e.heading.trueHeading;
			var timestamp = e.heading.timestamp;

			currentHeading.text = 'x:' + x + ' y: ' + y + ' z:' + z;
			Titanium.API.info('geo - current heading: ' + new Date(timestamp) + ' x ' + x + ' y ' + y + ' z ' + z);
		});

		//
		// EVENT LISTENER FOR COMPASS EVENTS - THIS WILL FIRE REPEATEDLY (BASED ON HEADING FILTER)
		//
		var headingCallback = function(e)
		{
			if (e.error)
			{
				updatedHeading.text = 'error: ' + e.error;
				Ti.API.info("Code translation: "+translateErrorCode(e.code));
				return;
			}

			var x = e.heading.x;
			var y = e.heading.y;
			var z = e.heading.z;
			var magneticHeading = e.heading.magneticHeading;
			var accuracy = e.heading.accuracy;
			var trueHeading = e.heading.trueHeading;
			var timestamp = e.heading.timestamp;

			updatedHeading.text = 'x:' + x + ' y: ' + y + ' z:' + z;
			updatedHeadingTime.text = 'timestamp:' + new Date(timestamp);
			updatedHeading.color = 'red';
			updatedHeadingTime.color = 'red';
			setTimeout(function()
			{
				updatedHeading.color = '#444';
				updatedHeadingTime.color = '#444';

			},100);

			Titanium.API.info('geo - heading updated: ' + new Date(timestamp) + ' x ' + x + ' y ' + y + ' z ' + z);
		};
		Titanium.Geolocation.addEventListener('heading', headingCallback);
		headingAdded = true;
	}
	else
	{
		Titanium.API.info("No Compass on device");
		currentHeading.text = 'No compass available';
		updatedHeading.text = 'No compass available';
	}

	//
	//  SET ACCURACY - THE FOLLOWING VALUES ARE SUPPORTED
	//
	// Titanium.Geolocation.ACCURACY_BEST
	// Titanium.Geolocation.ACCURACY_NEAREST_TEN_METERS
	// Titanium.Geolocation.ACCURACY_HUNDRED_METERS
	// Titanium.Geolocation.ACCURACY_KILOMETER
	// Titanium.Geolocation.ACCURACY_THREE_KILOMETERS
	//
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;

	//
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
			currentLocation.text = 'error: ' + JSON.stringify(e.error);
			Ti.API.info("Code translation: "+translateErrorCode(e.code));
			alert('error ' + JSON.stringify(e.error));
			return;
		}

		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;
		Ti.API.info('speed ' + speed);
		currentLocation.text = 'long:' + longitude + ' lat: ' + latitude;

		Titanium.API.info('geo - current location: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
	});

	//
	// EVENT LISTENER FOR GEO EVENTS - THIS WILL FIRE REPEATEDLY (BASED ON DISTANCE FILTER)
	//
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
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;

		//Titanium.Geolocation.distanceFilter = 100; //changed after first location event

		updatedLocation.text = 'long:' + longitude;
		updatedLatitude.text = 'lat: '+ latitude;
		updatedLocationAccuracy.text = 'accuracy:' + accuracy;
		updatedLocationTime.text = 'timestamp:' +new Date(timestamp);

		updatedLatitude.color = 'red';
		updatedLocation.color = 'red';
		updatedLocationAccuracy.color = 'red';
		updatedLocationTime.color = 'red';
		setTimeout(function()
		{
			updatedLatitude.color = '#444';
			updatedLocation.color = '#444';
			updatedLocationAccuracy.color = '#444';
			updatedLocationTime.color = '#444';

		},100);

		// reverse geo
		Titanium.Geolocation.reverseGeocoder(latitude,longitude,function(evt)
		{
			if (evt.success) {
				var places = evt.places;
				if (places && places.length) {
					reverseGeo.text = places[0].address;
				} else {
					reverseGeo.text = "No address found";
				}
				Ti.API.debug("reverse geolocation result = "+JSON.stringify(evt));
			}
			else {
				Ti.UI.createAlertDialog({
					title:'Reverse geo error',
					message:evt.error
				}).show();
				Ti.API.info("Code translation: "+translateErrorCode(e.code));
			}
		});


		Titanium.API.info('geo - location updated: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
	};
	Titanium.Geolocation.addEventListener('location', locationCallback);
	locationAdded = true;
}
var addr = "2065 Hamilton Avenue San Jose California 95125";

Titanium.Geolocation.forwardGeocoder(addr,function(evt)
{
	Ti.API.info('in forward ');
	forwardGeo.text = "lat:"+evt.latitude+", long:"+evt.longitude;
	Titanium.Geolocation.reverseGeocoder(evt.latitude,evt.longitude,function(evt)
	{
		if (evt.success) {
			var text = "";
			for (var i = 0; i < evt.places.length; i++) {
				text += "" + i + ") " + evt.places[i].address + "\n";
			}
			Ti.API.info('Reversed forward: '+text);
		}
		else {
			Ti.UI.createAlertDialog({
				title:'Forward geo error',
				message:evt.error
			}).show();
			Ti.API.info("Code translation: "+translateErrorCode(e.code));
		}
	});
});

if (Titanium.Platform.name == 'android')
{
	//  as the destroy handler will remove the listener, only set the pause handler to remove if you need battery savings
	Ti.Android.currentActivity.addEventListener('pause', function(e) {
		Ti.API.info("pause event received");
		if (headingAdded) {
			Ti.API.info("removing heading callback on pause");
			Titanium.Geolocation.removeEventListener('heading', headingCallback);
			headingAdded = false;
		}
		if (locationAdded) {
			Ti.API.info("removing location callback on pause");
			Titanium.Geolocation.removeEventListener('location', locationCallback);
			locationAdded = false;
		}
	});
	Ti.Android.currentActivity.addEventListener('destroy', function(e) {
		Ti.API.info("destroy event received");
		if (headingAdded) {
			Ti.API.info("removing heading callback on destroy");
			Titanium.Geolocation.removeEventListener('heading', headingCallback);
			headingAdded = false;
		}
		if (locationAdded) {
			Ti.API.info("removing location callback on destroy");
			Titanium.Geolocation.removeEventListener('location', locationCallback);
			locationAdded = false;
		}
	});
	Ti.Android.currentActivity.addEventListener('resume', function(e) {
		Ti.API.info("resume event received");
		if (!headingAdded) {
			Ti.API.info("adding heading callback on resume");
			Titanium.Geolocation.addEventListener('heading', headingCallback);
			headingAdded = true;
		}
		if (!locationAdded) {
			Ti.API.info("adding location callback on resume");
			Titanium.Geolocation.addEventListener('location', locationCallback);
			locationAdded = true;
		}
	});
}


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

win.addEventListener('android:back', function() {  
           win.close();             
            });