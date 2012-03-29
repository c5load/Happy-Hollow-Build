var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	backgroundImage:'/Attractions/ridesattractionsbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});

var lblTitle=Titanium.UI.createLabel({
	text:"Rides & Attractions",
	textAlign:'center', 
	color:'white',
	font:{
		fontSize:'15dp',
		fontWeight:'bold',
	},
	width: pWidth, 
    top: '0dp',
    left:'0dp',    
    height: pHeight*.1
});

var buttonHome = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Attractions/homeresting.png',
	backgroundSelectedImage:'/Attractions/homeselected.png',
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
    fullscreen : true
});
winHomeScreen.addEventListener('close', function(){winHome = null;});
	winHomeScreen.open();
});


var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Attractions/scheduleresting.png',
	backgroundSelectedImage:'/Attractions/scheduleselected.png',
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



var buttonSmallRides = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Attractions/smallridesselect.png',
	top:pHeight*.11,
	left:pWidth*.2,
	width:pWidth*.3,
	height:pHeight*.07,});
buttonSmallRides.addEventListener('click', function()
{
	buttonSmallRides.backgroundImage='/Attractions/smallridesselect.png';
	buttonSmallAttractions.backgroundImage='/Attractions/smallattractionsrest.png',
//	scrollViewRides.visible=true;
	tableviewRides.visible=true;
//	scrollViewAttractions.visible=false	
	tableviewAttractions.visible=false;
});
	
var buttonSmallAttractions = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Attractions/smallattractionsrest.png',
	top:pHeight*.11,
	left:pWidth*.5,
	width:pWidth*.3,
	height:pHeight*.07,});
buttonSmallAttractions.addEventListener('click', function()
{
	buttonSmallAttractions.backgroundImage='/Attractions/smallattractionsselect.png';
	buttonSmallRides.backgroundImage='/Attractions/smallridesrest.png',
	tableviewAttractions.visible=true;
	tableviewRides.visible=false;
});

var tableviewRides = Titanium.UI.createTableView({
	top:pHeight*.2,
	height:pHeight*.7
    });

var tableviewAttractions = Titanium.UI.createTableView({
 	top:pHeight*.2,
 	height:pHeight*.7,
 	visible:false
    });
    		
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function()
{
    var data = [];
    var dataAttractions = [];
    var doc = this.responseXML.documentElement;
    var elements = doc.getElementsByTagName("AttractionName");            
    for (var i=0;i<elements.length;i++) {		    
  		   
		    var row = Ti.UI.createTableViewRow({
		    	hasChild:true,
		    	height:pHeight*.13,
		    	backgroundImage: '../backgroundresting.png',
		    	selectedBackgroundImage: '../ridesattractionsbackground.png'});

    		row.title = elements.item(i).getAttribute("AttractionName");
		    desc = doc.getElementsByTagName("AttractionName").item(i).text;
		    attractionDesc = doc.getElementsByTagName("Description").item(i).text;
            attractionDesc = attractionDesc.replace(/(\r\n|\n|\r)/gm, "");		    
		    attractionLocation = doc.getElementsByTagName("Loc").item(i).text;
		    attractionYoutube = doc.getElementsByTagName("YoutubeURL").item(i).text;
            attractionYoutube = attractionYoutube.replace(/(\r\n|\n|\r)/gm, "");	
		    attractionPicture = doc.getElementsByTagName("PictureURL").item(i).text;
		    attractionPicture = attractionPicture.replace(/(\r\n|\n|\r)/gm, "");
		    attractionThumbnail = doc.getElementsByTagName("ThumbnailURL").item(i).text;
		    attractionThumbnail = attractionThumbnail.replace(/(\r\n|\n|\r)/gm, "");
		   	Category = doc.getElementsByTagName("AttractionOrRide").item(i).text;		    
       
       		var ride=/.*Ride.*/;
        	var attraction=/.*Attraction.*/;


        	if (ride.test(Category)){		      		       	      
		    var attractionLabel = Ti.UI.createLabel({
	    	text: desc,
	    	color:'#000000',
	    	font:{fontSize:'20dp'},
			height:pHeight*.13,
	    	textAlign:'left',
	    	left:pWidth*.23
	    	});         	
		    		    
		    var attractionImage = Ti.UI.createImageView({
		    	image:attractionThumbnail,
		    	height: pWidth*.18,
		    	width: pWidth*.18,
		    	left: pWidth*.025
		    	});
		    	              
		    row.add(attractionLabel);
		    row.add(attractionImage); 		    
		    row.item = desc;
		    row.item2 = attractionDesc;
		    row.item3 = attractionLocation;
		    row.item4 = attractionYoutube;
		    row.item5 = attractionPicture;
			
	   		data.push(row);	   	
			}
            if (attraction.test(Category)){		      		       	      
		    var attractionLabel = Ti.UI.createLabel({
	    	text: desc,
	    	color:'#000000',
	    	font:{fontSize:'20dp'},
			height:pHeight*.13,
	    	textAlign:'left',
	    	left:pWidth*.23
	    	});         	
		    		    
		    var attractionImage = Ti.UI.createImageView({
		    	url:attractionThumbnail,
		    	height: pWidth*.18,
		    	width: pWidth*.18,
		    	left: pWidth*.025
		    	});
		    	               
		    row.add(attractionLabel);
		    row.add(attractionImage);
		    row.item = desc;
		    row.item2 = attractionDesc;
		    row.item3 = attractionLocation;
		    row.item4 = attractionYoutube;
		    row.item5 = attractionPicture;
			
	   		dataAttractions.push(row);
	   			
	
	}
}
    tableviewRides.setData(data);
	win.add(tableviewRides);
    tableviewRides.addEventListener('click',function(e)
		{	
			var w = Ti.UI.createWindow({
   			backgroundColor:'#FFFFFF',
			url:'specificattraction.js', 
			navBarHidden:true,
   			title:'',
   			fullscreen:true });
   			w.addEventListener('close', function(){w = null;}); 
			var b = Titanium.UI.createButton({
				title:'Close',
				style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			w.setLeftNavButton(b);
			b.addEventListener('click',function()
			{
				w.close();
			});
				w.attraction = e.rowData.item;
				w.attractionDesc = e.rowData.item2;
				w.location = e.rowData.item3;
				w.youTube = e.rowData.item4;
				w.pictureURL = e.rowData.item5;
			
			w.open({fullscreen:true});
		});
		

    tableviewAttractions.setData(dataAttractions);
	win.add(tableviewAttractions);
    tableviewAttractions.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({
   			backgroundColor:'#FFFFFF',
			url:'specificattraction.js', 
			navBarHidden:true,
   			title:'',
   			fullscreen:true });
   			w.addEventListener('close', function(){w = null;}); 
			var b = Titanium.UI.createButton({
				title:'Close',
				style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			w.setLeftNavButton(b);
			b.addEventListener('click',function()
			{
				w.close();
			});
				w.attraction = e.rowData.item;
				w.attractionDesc = e.rowData.item2;
				w.location = e.rowData.item3;
				w.youTube = e.rowData.item4;
				w.pictureURL = e.rowData.item5;
			
			w.open({fullscreen:true});
		});	
};

var BottomBar=Titanium.UI.createImageView({
	backgroundColor:'#333333',
    width: pWidth,
    left: '0dp',
    top: pHeight*.9,
    height: pHeight*.11
});

var buttonAnimals = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/Animals/animaliconscolor.png',
	backgroundSelectedImage:'/Animals/animalsicon.png',
	top: pHeight*.9,
	width:pWidth*.25,
	height:pHeight*.11,
	left:'0dp',
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Animals'});		
buttonAnimals.addEventListener('click', function()
{var winAnimals = Titanium.UI.createWindow({
    title:'Animals',
    navBarHidden:true,
    backgroundColor:'#FFFFFF',
    url: 'Animals/animals.js',
    fullscreen : true});
winAnimals.addEventListener('close', function(){winAnimals = null;});
	
	winAnimals.open();
	});
	

var buttonFacilities = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/Facilities/facilitiesiconcolor.png',
	backgroundSelectedImage:'/Facilities/facilitiesicon.png',
	top: pHeight*.9,
	width:pWidth*.25,
	height:pHeight*.11,
	left:pWidth*.25,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Facilities'});		
buttonFacilities.addEventListener('click', function()
{var winFacilities = Titanium.UI.createWindow({
    title:'Facilities',
    navBarHidden:true,    
    backgroundColor:'#FFFFFF',
    url: 'Facilities/facilities.js',
    fullscreen : true,});	
 winFacilities.addEventListener('close', function(){winFacilities = null;}); 
	winFacilities.open();});


var buttonGreenTour = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/GreenTour/greentouriconcolor.png',
	backgroundSelectedImage:'/GreenTour/greentouricon.png',
	top: pHeight*.9,
	width:pWidth*.25,
	height:pHeight*.11,
	left:pWidth*.5,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Green Tour'});		
buttonGreenTour.addEventListener('click', function()
{
	var winGreenTour = Titanium.UI.createWindow({
    title:'Green Tour',
    navBarHidden:true,    
    backgroundColor:'#FFFFFF',
    url: '/GreenTour/greentour.js',
    fullscreen : true,});
 winGreenTour.addEventListener('close', function(){winGreenTour = null;});   
	winGreenTour.open();});

win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(BottomBar);
win.add(buttonAnimals);
win.add(buttonFacilities);
win.add(buttonGreenTour);
win.add(buttonSmallRides);
win.add(buttonSmallAttractions);

win.addEventListener('android:back', function() {  
           win.close();             
            });
            
xhr.open('GET','http://hhpz.org/mobile/xml/Attractions.xml');
xhr.send();//declare the http client object
