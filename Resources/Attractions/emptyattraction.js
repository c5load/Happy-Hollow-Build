var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/Attractions/ridesattractionsbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});
win.add(TitleBar);

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
win.add(lblTitle);

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
    fullscreen : true,  
    exitOnClose: true,
    navBarHidden: true
});
winHomeScreen.addEventListener('close', function(){winHome = null;});
	winHomeScreen.open();
	});
win.add(buttonHome);

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
win.add(buttonSchedule);

var winBar = Titanium.UI.createLabel({
	backgroundImage:'ridesattractionsbackground.png',	
    width: pWidth,
	top:pHeight*.5,
	height:pHeight*.15,
})
win.add(winBar);

var BottomBar=Titanium.UI.createImageView({
	backgroundColor:'#333333',
    width: pWidth,
    left: '0dp',
    top: pHeight*.9,
    height: pHeight*.11
});
win.add(BottomBar);

var selectedAttraction=win.name.replace(/(\r\n|\n|\r)/gm, "");
var selectedAttractionTest=".*" + selectedAttraction + ".*";
var selectedAttractionExpression= new RegExp(selectedAttractionTest);

var attractionName = ""
var attractionDesc = ""
var attractionYoutube = "" 
var attractionPicture = ""     
var attractionThumbnail = ""

var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function()
{
    var data = [];
    var doc = this.responseXML.documentElement;
	var elements = doc.getElementsByTagName("AttractionName");

    for (var i=0;i<elements.length;i++) {
 		var attractionLocation = doc.getElementsByTagName("Loc").item(i).text;
        attractionLocation = attractionLocation.replace(/(\r\n|\n|\r)/gm, "");      
	
		if (selectedAttractionExpression.test(attractionLocation)){
			
        attractionName = doc.getElementsByTagName("AttractionName").item(i).text;
        attractionName = attractionName.replace(/(\r\n|\n|\r)/gm, ""); 
        attractionDesc = doc.getElementsByTagName("Description").item(i).text;
        attractionDesc = attractionDesc.replace(/(\r\n|\n|\r)/gm, "");                        
        attractionYoutube = doc.getElementsByTagName("YoutubeURL").item(i).text;
        attractionYoutube = attractionYoutube.replace(/(\r\n|\n|\r)/gm, "");        
        attractionPicture = doc.getElementsByTagName("PictureURL").item(i).text;
        attractionPicture = attractionPicture.replace(/(\r\n|\n|\r)/gm, "");        
        attractionThumbnail = doc.getElementsByTagName("ThumbnailURL").item(i).text;
        attractionThumbnail = attractionThumbnail.replace(/(\r\n|\n|\r)/gm, ""); 
    		}
	};
	       
			var winAttractionLabel = Titanium.UI.createLabel({
				textWeight:'strong',
				text: attractionName,
				textAlign: pWidth*.1,
				color: 'white',
			    font: {
			        fontSize: '25dp',
			        fontWeight: 'normal'
			    },
			    width: pWidth,
			    textAlign: 'left',
			    left: pWidth*.02,
				top:pHeight*.5,
				height:pHeight*.1,
			})
			win.add(winAttractionLabel);
			
			if (attractionPicture ==='None')
				//don't display a picture
				{}
				//otherwise create and display an imageView
				else{ var image = Titanium.UI.createImageView({
				image:attractionPicture,
				width:pWidth,
				height:pHeight*.4,
				top:pHeight*.1,
				left:'0dp'});
				
				win.add(image);
				};
				
				var scrollView = Titanium.UI.createScrollView({
					backgroundcolor:'#FFFFFF', 
					contentWidth:'auto', 
					contentHeight:'auto', 
					top:pHeight*.65,
					height:pHeight*.25,
					scrollType:'vertical',
					showVerticalScrollIndicator:true, 
					showHorizontalScrollIndicator:true }); 
				
			var splitresult = attractionDesc.split("$$$");		
			var numberofSentences = attractionDesc.split("$$$").length;
			
			var desc = '';
			for (var i=0;i<numberofSentences;i++) {
			    desc = desc + splitresult[i] + '\n';	
			}
			
				var winAttractionDescription = Ti.UI.createLabel({
				text: desc,
				textAlign: 'left',
				color: '#000000',
			    font: {
			        fontSize: '18dp',
			        fontWeight: 'normal'
			    },
			    width: pWidth,
			    left: '0dp',
			    top: '0dp',
			    height: 'auto'
			})
			
					scrollView.add(winAttractionDescription);
					win.add(scrollView);
					
				
			if (attractionYoutube ==='None')
			{}
			else{
			var linkE = Titanium.UI.createLabel({
			        text: "Click for video",
			        color: 'blue',
			        font: {
			            fontSize: '20dp',
			            fontWeight: 'bold'
			        },
			        width:'auto',
			        textAlign: 'left',
			        top:pHeight*.55,
			        height: pHeight*.1,
			        left:pWidth*.6
			});
			 
			linkE.addEventListener('click',function(e)
			{
			     var w = Ti.UI.createWindow();
			     w.addEventListener('close', function(){w = null;});
				 w.addEventListener('android:back', function() {  
			           w.close();             
			            });          
			     w.open(Titanium.Platform.openURL(attractionYoutube));
			});
			win.add(linkE);
			}
			
			var buttonMap = Titanium.UI.createButton({
				backgroundColor:'#333333',
				borderColor:'#333333',
				backgroundImage:'/ParkMap/findonmaprest.png',
				backgroundSelectedImage:'/ParkMap/findonmap.png',
				top: pHeight*.9,
				width:pWidth*.2,
				height:pHeight*.11,
				left:'0dp',
				font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
				});		
			buttonMap.addEventListener('click', function()
			{var winParkMap = Titanium.UI.createWindow({
			    title:'Park Map',
			    navBarHidden:true,
			    backgroundColor:'#FFFFFF',
			    url: 'ParkMap/mapempty.js',
			    fullscreen : true});
			winParkMap.addEventListener('close', function(){winParkMap = null;});
				winParkMap.name = attractionLocation;
				winParkMap.open({fullscreen:true});
				});
			win.add(buttonMap);
			} 	


   


/* IPHONE CODE
var buttonMap = Titanium.UI.createButton({
	backgroundColor:'#333333',
	borderColor:'#333333',
	backgroundImage:'/ParkMap/findonmaprest.png',
	backgroundSelectedImage:'/ParkMap/findonmap.png',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:pWidth*.2,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	});		
buttonMap.addEventListener('click', function()
{var winParkMap = Titanium.UI.createWindow({
    title:'Park Map',
    navBarHidden:true,
    backgroundColor:'#FFFFFF',
    url: 'ParkMap/mapempty.js',
    fullscreen : true});
winParkMap.addEventListener('close', function(){winParkMap = null;});
	winParkMap.name=win.animal;
	winParkMap.open({fullscreen:true});
	});
	
var buttonBack = Titanium.UI.createButton({
	backgroundColor:'#333333',
	borderColor:'#333333',
	backgroundImage:'/back.png',
	backgroundSelectedColor:'#FFFFFF',
	top: pHeight*.9,
	width:pWidth*.2,
	height:pHeight*.11,
	left:'0dp',
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	});		
buttonMap.addEventListener('click', function()
{win.close();});	
*/

//win.add(BottomBar);
//win.add(buttonBack);
//win.add(buttonMap);
//win.add(TitleBar);
//win.add(lblTitle);
//win.add(buttonHome);
//win.add(buttonSchedule);
//win.add(winBar);
//win.add(winAnimalLabel);
//win.add(winAnimalScientific);
//win.add(winAnimalDescription);
//win.add(linkE)};


win.addEventListener('android:back', function() {  
           win.close();             
            });

xhr.open('GET','http://hhpz.org/mobile/xml/Attractions.xml');
xhr.send();//declare the http client object