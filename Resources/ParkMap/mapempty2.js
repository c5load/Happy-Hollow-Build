var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

//create views for each category
var map=Titanium.UI.createView({
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
{
	Titanium.Geolocation.removeEventListener('location', reportPosition); 	
	win.close();
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

var buttonFindMe = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundSelectedColor:'#FFFFFF',
	backgroundImage:'/ParkMap/findme.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:'0dp',
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

//declare map; shrunk down a bit to accomodate 
var mapimage =  Titanium.UI.createImageView({
  image:'emptymap.png',
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
  minZoomScale:0.1,
  maxZoomScale:100,
  zoomScale:.1
});

map.add(mapimage);
scrollViewHorizontal.add(map);

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

var focusX = 0;
var focusY = 0;

	var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"Locs.xml");
	var xmltext = file.read().text;
	var doc = Ti.XML.parseString(xmltext);
	var elements = doc.getElementsByTagName("LocName"); 
	  
    for (var i=0;i<elements.length;i++) {
    	var PixelX = doc.getElementsByTagName("PixelX").item(i).text;
        PixelX = PixelX.replace(/(\r\n|\n|\r)/gm, "");
        var PixelY = doc.getElementsByTagName("PixelY").item(i).text;
        PixelY = PixelY.replace(/(\r\n|\n|\r)/gm, "");
        var LocationName = doc.getElementsByTagName("LocName").item(i).text;
        LocationName= LocationName.replace(/(\r\n|\n|\r)/gm, "");               
        var Category = doc.getElementsByTagName("Category").item(i).text;

        var animal=/.*Animal.*/;
        var attraction=/.*Attraction.*/;
        var facility=/.*Facility.*/;
        var greenTour=/.*Green Tour.*/;
        var restroom=/.*Restroom.*/;
        var exit=/.*Emergency Exit.*/;
        var parkinglot=/.*Parking Lot.*/;
        
       	var selectedLocation=win.name.replace(/(\r\n|\n|\r)/gm, "");
		var selectedLocationTest=".*" + selectedLocation + ".*";
		var selectedLocationExpression= new RegExp(selectedLocationTest);

		if (selectedLocationExpression.test(LocationName)){
	      if (animal.test(Category)){
	    	var mapIconAnimal = Titanium.UI.createImageView({
	    		image:'animals.png',
	    		top: (PixelY/2/1.12)-(pWidth*.06),
	    		left: (PixelX/2/1.35)-(pWidth*.06),
	    		width:pWidth*.12,
	    		Height:pWidth*.12,
	    	});
	    	
	    	var mapLabelAnimal=Titanium.UI.createLabel({
	    		top: (PixelY/2/1.12)+(pWidth*.04),
	    		left: (PixelX/2/1.35)-(pWidth*.09),
	    		width:pWidth*.15,
	    		Height:pWidth*.12,
	    		text: LocationName,
	        	font:{fontSize:'9dp', fontWeight:'bold'},
	        	textAlign:'center',    		  
	    		color: '#000000'   		
	    	});
	    	scrollViewHorizontal.add(mapIconAnimal);
	    	scrollViewHorizontal.add(mapLabelAnimal);
            focusX=(PixelX/2/1.35)-(pWidth*.06);
	    	focusY=(PixelY/2/1.12)-(pWidth*.06);			    	
	        } 
	        else
	        if (attraction.test(Category)){
	    	var mapIconAttraction = Titanium.UI.createImageView({
	    		image:'attractions.png',
	    		top: (PixelY/2/1.11)-(pWidth*.06),
	    		left: (PixelX/2/1.36)-(pWidth*.06),
	    		width:pWidth*.12,
	    		Height:pWidth*.12,
	    	});
	    	
	    	var mapLabelAttraction=Titanium.UI.createLabel({
	    		top: (PixelY/2/1.12)+(pWidth*.04),
	    		left: (PixelX/2/1.35)-(pWidth*.06),
	    		width:pWidth*.15,
	    		Height:pWidth*.12,
	    		text: LocationName,
	        	font:{fontSize:'9dp', fontWeight:'bold'},    		  
	    		color: '#000000'   		
	    	});
			scrollViewHorizontal.add(mapIconAttraction);
			scrollViewHorizontal.add(mapLabelAttraction);
	    	focusX=(PixelX/2/1.35)-(pWidth*.06);
	    	focusY=(PixelY/2/1.12)-(pWidth*.06);						
	        } 
	        else
	        if (facility.test(Category)){
	    	var mapIconFacility = Titanium.UI.createImageView({
	    		image:'facilities.png',
	    		top: (PixelY/2/1.12)-(pWidth*.06),
	    		left: (PixelX/2/1.35)-(pWidth*.06),
	    		width:pWidth*.12,
	    		Height:pWidth*.12,
	    	});
	    	
	    	var mapLabelFacility=Titanium.UI.createLabel({
	    		top: (PixelY/2/1.12)+(pWidth*.04),
	    		left: (PixelX/2/1.35)-(pWidth*.06),
	    		width:pWidth*.15,
	    		Height:pWidth*.12,
	    		text: LocationName,
	        	font:{fontSize:'9dp', fontWeight:'bold'},    		  
	    		color: '#000000'   		
	    	});
			scrollViewHorizontal.add(mapIconFacility);
			scrollViewHorizontal.add(mapLabelFacility);	
	    	focusX=(PixelX/2/1.35)-(pWidth*.06);
	    	focusY=(PixelY/2/1.12)-(pWidth*.06);		
	        } 
	        else
	        if (greenTour.test(Category)){
	    	var mapIconGreenTour = Titanium.UI.createImageView({
	    		image:'greentour.png',
	    		top: (PixelY/2/1.12)-(pWidth*.06),
	    		left: (PixelX/2/1.36)-(pWidth*.06),
	    		width:pWidth*.12,
	    		Height:pWidth*.12,
	    	});
	    	
	    	var mapLabelGreenTour=Titanium.UI.createLabel({
	    		top: (PixelY/2/1.12)+(pWidth*.04),
	    		left: (PixelX/2/1.35)-(pWidth*.06),
	    		width:pWidth*.15,
	    		Height:pWidth*.12,
	    		text: LocationName,
	        	font:{fontSize:'9dp', fontWeight:'bold'},    		  
	    		color: '#000000'   		
	    	});
			scrollViewHorizontal.add(mapIconGreenTour);
			scrollViewHorizontal.add(mapLabelGreenTour);
	    	focusX=(PixelX/2/1.35)-(pWidth*.06);
	    	focusY=(PixelY/2/1.12)-(pWidth*.06);					
	        }        	
        else {
        if (restroom.test(Category)){
    	var mapIconRestroom = Titanium.UI.createImageView({
    		image:'restroom.png',
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
			scrollViewHorizontal.add(mapIconRestroom);
			scrollViewHorizontal.add(mapLabelRestroom);
	    	focusX=(PixelX/2/1.35)-(pWidth*.06);
	    	focusY=(PixelY/2/1.12)-(pWidth*.06);
        }      

        else 
        if (parkinglot.test(Category)){
    	var mapIconParking = Titanium.UI.createImageView({
    		image:'parkinglot.png',
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
			scrollViewHorizontal.add(mapIconParking);
			scrollViewHorizontal.add(mapLabelParking);
	    	focusX=(PixelX/2/1.35)-(pWidth*.06);
	    	focusY=(PixelY/2/1.12)-(pWidth*.06);	
        }        
        else 
        if (exit.test(Category)){
    	var mapIconExit = Titanium.UI.createImageView({
    		image:'emergency.png',
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
    		scrollViewHorizontal.add(mapIconExit);
			scrollViewHorizontal.add(mapLabelExit);
	    	focusX=(PixelX/2/1.35)-(pWidth*.06);
	    	focusY=(PixelY/2/1.12)-(pWidth*.06);
     }}}
};		
		
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
		    yPixel=(yPixel/2/1.11)+(pWidth*.04); 		    		      
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

win.addEventListener('open', function(e){
    scrollViewHorizontal.scrollTo((focusX-(pWidth*.5)),0);	
    scrollViewVertical.scrollTo(0,(focusY)-(pHeight*.4))	
});	

var BottomBar=Titanium.UI.createImageView({
	backgroundColor:'#333333',
    width: pWidth,
    left: '0dp',
    top: pHeight*.9,
    height: pHeight*.11
});
        
win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(BottomBar);

win.add(buttonFindMe);

function schedulegohome(e){
win.close(); 
winSchedule = null;
Titanium.Geolocation.removeEventListener('location', reportPosition); 	
}       