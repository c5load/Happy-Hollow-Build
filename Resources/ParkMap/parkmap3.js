var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 0;

var win = Titanium.UI.currentWindow;


//create views for each category
var map=Titanium.UI.createView({
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

var buttonFindMe = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/ParkMap/findmerest.png',
	backgroundSelectedImage:'/ParkMap/findme.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.8,
	font:{fontSize:'12dp', fontcolor:'black', fontFamily:'Helvetica Neue'},
});

buttonFindMe.addEventListener('click', function()
{
if (FindMeClicked==false){
	FindMeClicked=true;
			if ((xPixel<0)||(xPixel>2064)||(yPixel<0)||(yPixel>1872))
			{findme.visible=false
			alert('You are not at Happy Hollow.');	
				}
			else {
				findme.visible=true;				
				}
} else {
	FindMeClicked=false;
	findme.visible=false
}
});

/*	
buttonFindMe.addEventListener('click', function()
{
if (FindMeClicked==false){
	FindMeClicked=true;

		    	
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 0;


function reportPosition(e) {
		if (!e.success || e.error) {        
		 	alert('error: ' + JSON.stringify(e.error));    
			}    
		else {        
			var accuracy = e.coords.accuracy;        
			var longitude = e.coords.longitude;
		    var latitude = e.coords.latitude; 
		    
		    var xPixel =(720213.809*latitude)+(1147131.61*longitude)+112913088;
		    var yPixel =(-1589582.59*latitude)+(536408.247*longitude)+124701993;
	
		    xPixel=(xPixel/2/1.36)-(pWidth*.06);
		    yPixel=(yPixel/2/1.11)-(pWidth*.06);
/*
	if ((xPixel<0)||(xPixel>5616)||(yPixel<0)||(yPixel>3712))
	//if not at Happy Hollow, do nothing
	{}
	//display location
	else{
		var imgFindMe=Titanium.UI.createImageView({
			image:'findme.png',
			top:yPixel,
			left:xPixel,
			width:pWidth*.2,
    		height:pWidth*.2,
		})
		   scrollViewHorizontal.add(imgFindMe);
		   focusX=(PixelX/2/1.35)-(pWidth*.06);
	   	   focusY=(PixelY/2/1.12)-(pWidth*.06);
	  	   scrollViewHorizontal.scrollTo((focusX-(pWidth*.5)),0);
	       scrollViewVertical.scrollTo(0,(focusY)-(pHeight*.4));
	   	}
	   	           
			alert('latitude: ' + latitude + ' xPixel: ' + xPixel + ' longitude: ' + longitude + ' yPixel: ' + yPixel + ' accuracy: ' + accuracy);    
//			testlabel.visible=true;	
			}
	// this fires once
	Titanium.Geolocation.getCurrentPosition(reportPosition);
	// this fires whenever the distance filter is surpassed
	Titanium.Geolocation.addEventListener('location', reportPosition);

	}
	}else{
		FindMeClicked=false;
		testlabel.visible=false;
	}		

});
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
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},
        	textAlign:'center',    		  
    		color: '#000000'   		
    	});
    	map.add(mapIconAnimal);
    	map.add(mapLabelAnimal);
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
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	});
		map.add(mapIconAttraction);
		map.add(mapLabelAttraction);
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
    		left: (PixelX/2/1.35)-(pWidth*.05),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	});
		map.add(mapIconFacility);
		map.add(mapLabelFacility);	
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
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	});
		map.add(mapIconGreenTour);
		map.add(mapLabelGreenTour);
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
    		Height:pWidth*.18,
    		text: 'Restroom',
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	});
		map.add(mapIconRestroom);
		map.add(mapLabelRestroom);
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
    		Height:pWidth*.18,
    		text: 'Emergency Exit',
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	});
		map.add(mapIconExit);
		map.add(mapLabelExit);
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
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000'   		
    	});
		map.add(mapIconParking);
		map.add(mapLabelParking);
        }        
     }
};
        scrollViewHorizontal.add(map);
//        scrollViewHorizontal.add(animals);
    	animalsopened=true;
//    	scrollViewHorizontal.add(attractions);
		attractionsopened=true;
//		scrollViewHorizontal.add(facilities);
		facilitiesopened=true;
//		scrollViewHorizontal.add(greentour);
		greentouropened=true;
//		scrollViewHorizontal.add(other);

var xPixel;
var yPixel;
var label = Ti.UI.createLabel({
	color:'#000000',
	visible:false
});

var findme = Titanium.UI.createImageView({
	image:'findme.png',
	width:pWidth*.2,
    height:pWidth*.2,
    visible:false
		})
scrollViewHorizontal.add(findme);
		
function reportPosition(e) {    
	if (!e.success || e.error) {        
		label.text = 'error: ' + JSON.stringify(e.error);    
		}    
		else {        
			var accuracy = e.coords.accuracy;        
			var longitude = e.coords.longitude;
		    var latitude = e.coords.latitude;    
		    
		    var xPixel =(720213.809*latitude)+(1147131.61*longitude)+112913088;
		    var yPixel =(-1589582.59*latitude)+(536408.247*longitude)+124701993;
	
		    xPixel=(xPixel/2/1.36)-(pWidth*.06);
		    yPixel=(yPixel/2/1.11)-(pWidth*.06); 		      
		}
			if ((xPixel<0)||(xPixel>2064)||(yPixel<0)||(yPixel>1872))
			{findme.visible=false}
			else {
				findme.top=yPixel;
				findme.left=xPixel;				
				}		
		}		

		// this fires once
		Titanium.Geolocation.getCurrentPosition(reportPosition);
		// this fires whenever the distance filter is surpassed
		Titanium.Geolocation.addEventListener('location', reportPosition);
		
var FindMeClicked=false;

		
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
           Titanium.Geolocation.removeEventListener('location', reportPosition);             
            });
            
xhr.open('GET','http://hhpz.org/mobile/xml/locs.xml');            
xhr.send();
