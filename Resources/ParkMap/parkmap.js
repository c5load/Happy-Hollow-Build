var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 0;

var win = Titanium.UI.currentWindow;

//create views for each category
var map=Titanium.UI.createView({
  height:2808/1.5,
  width:2064,
  top:'0dp'	
});

var animals=Titanium.UI.createView({
  height:2808/1.5,
  width:2064,
  top:'0dp',	
  visible:false
});

var attractions=Titanium.UI.createView({
  height:2808/1.5,
  width:2064,
  top:'0dp',
  visible:false  		
});

var facilities=Titanium.UI.createView({
  height:2808/1.5,
  width:2064,
  top:'0dp',
  visible:false		
});

var greentour=Titanium.UI.createView({
  height:2808/1.5,
  width:2064,
  top:'0dp'	,
  visible:false
});

var master=Titanium.UI.createView({
  height:2808/1.5,
  width:2064,
  top:'0dp',
  visible:true
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
{	
	win.removeEventListener('open', getposition);	
	win.close();; 	
});

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
    navBarHidden: true});
			winSchedule.addEventListener('close', schedulegohome);
			winSchedule.addEventListener('android:back', function() {
			winSchedule.removeEventListener('close', schedulegohome);
			winSchedule.close(); winSchedule = null
			});		
			winSchedule.open({fullscreen:true});		
			});		    

//declare variables
var animalsopened=false;
var attractionsopened=false;
var facilitiesopened=false;
var greentouropened=false;
var masteropened=true;

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
	if (animalsopened == false){		
		animalsopened=true;
		animals.visible=true;
		attractionsopened=false;
		attractions.visible=false;
		facilitiesopened=false;
		facilities.visible=false;
		greentouropened=false;
		greentour.visible=false;
		masteropened=false;	
		master.visible=false;	
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
		masteropened=true;
		master.visible=true;
		animalsopened=false;
		animals.visible=false;
		attractionsopened=false;
		attractions.visible=false;
		facilitiesopened=false;
		facilities.visible=false;
		greentouropened=false;
		greentour.visible=false;
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
{	
	if (attractionsopened == false){
		attractionsopened=true;
		attractions.visible=true;
		animalsopened=false;
		animals.visible=false;
		facilitiesopened=false;
		facilities.visible=false;
		greentouropened=false;
		greentour.visible=false;
		masteropened=false;	
		master.visible=false;
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
		masteropened=true;
		master.visible=true;
		animalsopened=false;
		animals.visible=false;
		attractionsopened=false;
		attractions.visible=false;
		facilitiesopened=false;
		facilities.visible=false;
		greentouropened=false;
		greentour.visible=false;
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
	if (facilitiesopened == false){		
		facilitiesopened=true;
		facilities.visible=true;
		animalsopened=false;
		animals.visible=false;
		attractionsopened=false;
		attractions.visible=false;
		greentouropened=false;
		greentour.visible=false;
		masteropened=false;	
		master.visible=false;
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
		masteropened=true;
		master.visible=true;
		animalsopened=false;
		animals.visible=false;
		attractionsopened=false;
		attractions.visible=false;
		facilitiesopened=false;
		facilities.visible=false;
		greentouropened=false;
		greentour.visible=false;
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
	if (greentouropened == false){		
		greentouropened=true;
		greentour.visible=true;
		animalsopened=false;
		animals.visible=false;
		attractionsopened=false;
		attractions.visible=false;
		facilitiesopened=false;
		facilities.visible=false;
		masteropened=false;	
		master.visible=false;
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
		masteropened=true;
		master.visible=true;
		animalsopened=false;
		animals.visible=false;
		attractionsopened=false;
		attractions.visible=false;
		facilitiesopened=false;
		facilities.visible=false;
		greentouropened=false;
		greentour.visible=false;
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
//buttonFindMe.addEventListener('click', findme());
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

//declare map; shrunk down a bit to accomodate 
var mapimage =  Titanium.UI.createImageView({
  image:'parkmap.png',
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
  minZoomScale:0.1,
  maxZoomScale:100,
  zoomScale:1
});

win.addEventListener('open', function(e){
    scrollViewHorizontal.scrollTo(pWidth/2, 0);	
    scrollViewVertical.scrollTo(0,pHeight*.8*.3)	
});	

try {
//put locations into map
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"Locs.xml");
	var xmltext = file.read().text;
	var doc = Ti.XML.parseString(xmltext);
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
    		image:'animals.png',
    		selectedImage:'animals.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName    		
    	}); 		
    	mapIconAnimal.addEventListener('click', function(e)
			{			
				var w = Titanium.UI.createWindow({
    				title:'Animal',
    				navBarHidden:true,
    				backgroundColor:'#FFFFFF',
    				url: '/Animals/emptyanimal.js',
    				fullscreen : true});
				var s = e.source;			
				w.name = s.id;
			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			});		
			w.open({fullscreen:true});		
			});					
		master.add(mapIconAnimal);
    	var mapIconAnimal = Titanium.UI.createImageView({
    		image:'animals.png',
    		selectedImage:'animals.png',    		
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName
    	}); 		
    	mapIconAnimal.addEventListener('click', function(e)
			{var w = Titanium.UI.createWindow({
    				title:'Animal',
    				navBarHidden:true,
    				backgroundColor:'#FFFFFF',
    				url: '/Animals/emptyanimal.js',
    				fullscreen : true});
			var s = e.source;		
					w.name = s.id;
			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			});		
			w.open({fullscreen:true});		
			});			
		animals.add(mapIconAnimal);
					    	
    	var mapLabelAnimal=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.02),
    		left: (PixelX/2/1.35)-(pWidth*.09),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},
        	textAlign:'center',    		  
    		color: '#000000'   		
    	});
  		master.add(mapLabelAnimal);  	

		var mapLabelAnimal=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.02),
    		left: (PixelX/2/1.35)-(pWidth*.09),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},
        	textAlign:'center',    		  
    		color: '#000000'   		
    	});
    	animals.add(mapLabelAnimal);
        } 
        
        if (attraction.test(Category)){
    	var mapIconAttraction = Titanium.UI.createImageView({
    		image:'attractions.png',
    		selectedImage:'attractions.png',
    		top: (PixelY/2/1.11)-(pWidth*.06),
    		left: (PixelX/2/1.36)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName
    	});
    	mapIconAttraction.addEventListener('click', function(e)
			{var w = Titanium.UI.createWindow({
    				title:'Attraction',
    				navBarHidden:true,
    				backgroundColor:'#FFFFFF',
    				url: '/Attractions/emptyattraction.js',
    				fullscreen : true});
			var s = e.source;			
					w.name = s.id;
			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			});		
			w.open({fullscreen:true});		
			});				
    	master.add(mapIconAttraction);

    	var mapIconAttraction = Titanium.UI.createImageView({
    		image:'attractions.png',
    		selectedImage:'attractions.png',
    		top: (PixelY/2/1.11)-(pWidth*.06),
    		left: (PixelX/2/1.36)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName
    	});
    	mapIconAttraction.addEventListener('click', function(e)
			{var w = Titanium.UI.createWindow({
    				title:'Attraction',
    				navBarHidden:true,
    				backgroundColor:'#FFFFFF',
    				url: '/Attractions/emptyattraction.js',
    				fullscreen : true});
			var s = e.source;
					w.name = s.id;
			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			});		
			w.open({fullscreen:true});		
			});		
		attractions.add(mapIconAttraction);
		    	
    	var mapLabelAttraction=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.02),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000',
    		id:LocationName 		
    	});
		master.add(mapLabelAttraction);

    	var mapLabelAttraction=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.02),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000',
    		id:LocationName 		
    	});
		attractions.add(mapLabelAttraction);
        } 
        
        if (facility.test(Category)){
    	var mapIconFacility = Titanium.UI.createImageView({
    		image:'facilities.png',
    		selectedImage:'facilities.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName
    	});
    	mapIconFacility.addEventListener('click', function(e)
			{var w = Titanium.UI.createWindow({
    				title:'Facility',
    				navBarHidden:true,
    				backgroundColor:'#FFFFFF',
    				url: '/Facilities/emptyfacility.js',
    				fullscreen : true});
			var s = e.source;
					w.name = s.id;
			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			});		
			w.open({fullscreen:true});		
			});		
		master.add(mapIconFacility);
		
    	var mapIconFacility = Titanium.UI.createImageView({
    		image:'facilities.png',
    		selectedImage:'facilities.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName
    	});
    	mapIconFacility.addEventListener('click', function(e)
			{var w = Titanium.UI.createWindow({
    				title:'Facility',
    				navBarHidden:true,
    				backgroundColor:'#FFFFFF',
    				url: '/Facilities/emptyfacility.js',
    				fullscreen : true});
			var s = e.source;
					w.name = s.id;
			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			});		
			w.open({fullscreen:true});		
			});	
        facilities.add(mapIconFacility);
        												    	
    	var mapLabelFacility=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.02),
    		left: (PixelX/2/1.35)-(pWidth*.05),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000',
    		id:LocationName   		
    	});
		master.add(mapLabelFacility);
		
    	var mapLabelFacility=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.02),
    		left: (PixelX/2/1.35)-(pWidth*.05),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000',  
    		id:LocationName 		
    	}); 	
        facilities.add(mapLabelFacility);	
        } 
        
        if (greenTour.test(Category)){
    	var mapIconGreenTour = Titanium.UI.createImageView({
    		image:'greentour.png',
    		selectedImage:'greentour.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.36)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName
    	});
    	mapIconGreenTour.addEventListener('click', function(e)
			{var w = Titanium.UI.createWindow({
    				title:'Green Tour',
    				navBarHidden:true,
    				backgroundColor:'#FFFFFF',
    				url: '/GreenTour/emptygreentour.js',
    				fullscreen : true});
			var s = e.source;
					w.name = s.id;
			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			});		
			w.open({fullscreen:true});		
			});	
		master.add(mapIconGreenTour);
		
    	var mapIconGreenTour = Titanium.UI.createImageView({
    		image:'greentour.png',
    		selectedImage:'greentour.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.36)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName
    	});
    	mapIconGreenTour.addEventListener('click', function(e)
			{var w = Titanium.UI.createWindow({
    				title:'Green Tour',
    				navBarHidden:true,
    				backgroundColor:'#FFFFFF',
    				url: '/GreenTour/emptygreentour.js',
    				fullscreen : true});
			var s = e.source;
					w.name = s.id;
			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			});		
			w.open({fullscreen:true});		
			});	
        greentour.add(mapIconGreenTour);
        						    	
    	var mapLabelGreenTour=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.02),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000',
    		id:LocationName   		
    	});
		master.add(mapLabelGreenTour);
		
    	var mapLabelGreenTour=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.02),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000',
    		id:LocationName   		
    	});
        greentour.add(mapLabelGreenTour);						    	
        }
        
        if (restroom.test(Category)){
    	var mapIconRestroom = Titanium.UI.createImageView({
    		image:'restroom.png',
    		backgroundImage:'restroom.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName
    	});
    	mapIconRestroom.addEventListener('click', function(e)
			{var w = Titanium.UI.createWindow({
    				title:'Facility',
    				navBarHidden:true,
    				backgroundColor:'#FFFFFF',
    				url: '/Facilities/emptyfacility.js',
    				fullscreen : true});
			var s = e.source;
			w.name = s.id;
			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			});		
			w.open({fullscreen:true});		
			});	
		master.add(mapIconRestroom);
		
    	var mapIconRestroom = Titanium.UI.createImageView({
    		image:'restroom.png',
    		selectedImage:'restroom.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName,
    	});
    	mapIconRestroom.addEventListener('click', function(e)
			{var w = Titanium.UI.createWindow({
    				title:'Facility',
    				navBarHidden:true,
    				backgroundColor:'#FFFFFF',
    				url: '/Facilities/emptyfacility.js',
    				fullscreen : true});
			var s = e.source;
			w.name = s.id;
			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			});		
			w.open({fullscreen:true});		
			});	
    	facilities.add(mapIconRestroom);
    																		    	
    	var mapLabelRestroom=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.05),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: 'Restroom',
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000',
    		id:LocationName   		
    	});
		master.add(mapLabelRestroom);
		   	
    	var mapLabelRestroom=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.05),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: 'Restroom',
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000',
    		id:LocationName   		
    	});
        facilities.add(mapLabelRestroom);
        }      
          
        if (exit.test(Category)){
    	var mapIconExit = Titanium.UI.createImageView({
    		image:'emergency.png',
    		selectedImage:'emergency.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName
    	});
    	mapIconExit.addEventListener('click', function(e)
			{var w = Titanium.UI.createWindow({
    				title:'Facility',
    				navBarHidden:true,
    				backgroundColor:'#FFFFFF',
    				url: '/Facilities/emptyfacility.js',
    				fullscreen : true});
			var s = e.source;
					w.name = s.id;
			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			});		
			w.open({fullscreen:true});		
			});	
		master.add(mapIconExit);
													    	
    	var mapIconExit = Titanium.UI.createImageView({
    		image:'emergency.png',
    		selectedImage:'emergency.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName
    	});
    	mapIconExit.addEventListener('click', function(e)
			{var w = Titanium.UI.createWindow({
    				title:'Facility',
    				navBarHidden:true,
    				backgroundColor:'#FFFFFF',
    				url: '/Facilities/emptyfacility.js',
    				fullscreen : true});
			var s = e.source;
					w.name = s.id;
			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			});		
			w.open({fullscreen:true});		
			});	
        facilities.add(mapIconExit);
        
    	var mapLabelExit=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.05),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: 'Emergency Exit',
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000',
    		id:LocationName   		
    	});
		master.add(mapLabelExit);
        
    	var mapLabelExit=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.05),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: 'Emergency Exit',
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000',
    		id:LocationName   		
    	});    	    
        facilities.add(mapLabelExit);    	
        }        
     
        if (parkinglot.test(Category)){
    	var mapIconParking = Titanium.UI.createImageView({
    		image:'parkinglot.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName
    	});    	
		master.add(mapIconParking);
		
    	var mapIconParking = Titanium.UI.createImageView({
    		image:'parkinglot.png',
    		top: (PixelY/2/1.12)-(pWidth*.06),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.12,
    		Height:pWidth*.12,
    		id:LocationName
    	}); 	  
        facilities.add(mapIconParking);
        						
    	var mapLabelParking=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.04),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000',
    		id:LocationName   		
    	});
		master.add(mapLabelParking);
		   	
    	var mapLabelParking=Titanium.UI.createLabel({
    		top: (PixelY/2/1.12)+(pWidth*.04),
    		left: (PixelX/2/1.35)-(pWidth*.06),
    		width:pWidth*.15,
    		Height:pWidth*.18,
    		text: LocationName,
        	font:{fontSize:'8dp', fontWeight:'bold'},    		  
    		color: '#000000',
    		id:LocationName   		
    	});
        facilities.add(mapLabelParking);
        }        
     }
    }   
    catch(E){Ti.UI.createAlertDialog({message:'No data for this feature.'}).show();
    };
 //       scrollViewHorizontal.add(map);
        scrollViewHorizontal.add(animals);
    	scrollViewHorizontal.add(attractions);
		scrollViewHorizontal.add(facilities);
		scrollViewHorizontal.add(greentour);
		scrollViewHorizontal.add(master);
		
var xPixel;
var yPixel;

var findme = Titanium.UI.createImageView({
	image:'findme.png',
	width:pWidth*.2,
    height:pWidth*.2,
    visible:false
		})
scrollViewHorizontal.add(findme);
			
		function getposition(e){ 	
			function reportPosition(e) {    
				if (!e.success || e.error) {     
			  			buttonFindMe.addEventListener('click', error);
			  		//	buttonFindMe.removeEventListener('click', error);
					}    
					else {
						buttonFindMe.removeEventListener('click', error);
						        
						var accuracy = e.coords.accuracy;        
						var longitude = e.coords.longitude;
					    var latitude = e.coords.latitude;    

					    var xPixel =(741335.9909771*latitude)+(1189535.9497897*longitude)+117292224.5836240;
					    var yPixel =(-1501162.1549418*latitude)+(566071.8640451*longitude)+125016516.3800889;
					    					    
					  //  var xPixel =(720213.809*latitude)+(1147131.61*longitude)+112913088;
					  //  var yPixel =(-1589582.59*latitude)+(536408.247*longitude)+124701993;
				
					    xPixel=(xPixel/2/1.36)-(pWidth*.06); 		    
					    yPixel=(yPixel/2/1.11)-(pWidth*.06); 		      
					    
						if ((xPixel<0)||(xPixel>2064)||(yPixel<0)||(yPixel>1872))
						{findme.visible=false}
						else {
							findme.top=yPixel;
							findme.left=xPixel;			
							}
						}		
					}
					// this fires once
					Titanium.Geolocation.getCurrentPosition(reportPosition);
					// this fires whenever the distance filter is surpassed
					Titanium.Geolocation.addEventListener('location', reportPosition);		
		}

	setInterval(getposition, 1000);

win.addEventListener('open', getposition);
				
var FindMeClicked=false;
		
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

function gohome(e){
win.close(); 
w = null; 	
win.removeEventListener('open', getposition);
}
function schedulegohome(e){
win.close(); 
winSchedule = null;	
win.removeEventListener('open', getposition);
}

//function error(e){
//	findme.visible = false;
//	Titanium.UI.createAlertDialog({title:'Alert', message:'Geolocation is disabled.'}).show();
//}
function error(e){
	findme.visible = false;
}

//win.addEventListener('android:back', function(){
//	win.removeEventListener('open', getposition);
//});