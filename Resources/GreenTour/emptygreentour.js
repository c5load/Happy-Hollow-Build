var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/GreenTour/greentourbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});
win.add(TitleBar);

var lblTitle=Titanium.UI.createLabel({
	text:"Green Tour",
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
win.add(lblTitle);

var buttonHome = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/GreenTour/homeresting.png',
	backgroundSelectedImage:'/GreenTour/homeselected.png',
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
	backgroundImage:'/GreenTour/scheduleresting.png',
	backgroundSelectedImage:'/GreenTour/scheduleselected.png',
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
	backgroundImage:'greentourbackground.png',	
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

var selectedGreenTour=win.name.replace(/(\r\n|\n|\r)/gm, "");
var selectedGreenTourTest=".*" + selectedGreenTour + ".*";
var selectedGreenTourExpression= new RegExp(selectedGreenTourTest);

var greentourName = ""
var greentourDesc = ""
var greentourPicture = ""     
var greentourThumbnail = ""

var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function()
{
    var data = [];
    var doc = this.responseXML.documentElement;
	var elements = doc.getElementsByTagName("GreenTourName");

    for (var i=0;i<elements.length;i++) {
 		var greentourLocation = doc.getElementsByTagName("Loc").item(i).text;
        greentourLocation = greentourLocation.replace(/(\r\n|\n|\r)/gm, ""); 

		if (selectedGreenTourExpression.test(greentourLocation)){        
        greentourName = doc.getElementsByTagName("GreenTourName").item(i).text;
        greentourName = greentourName.replace(/(\r\n|\n|\r)/gm, ""); 
        greentourDesc = doc.getElementsByTagName("Description").item(i).text;
        greentourDesc = greentourDesc.replace(/(\r\n|\n|\r)/gm, "");                                
        greentourPicture = doc.getElementsByTagName("PictureURL").item(i).text;
        greentourPicture = greentourPicture.replace(/(\r\n|\n|\r)/gm, "");        
        greentourThumbnail = doc.getElementsByTagName("ThumbnailURL").item(i).text;
        greentourThumbnail = greentourThumbnail.replace(/(\r\n|\n|\r)/gm, "");      
   		}
	};
			var winGreenTourLabel = Titanium.UI.createLabel({
				textWeight:'strong',
				text: greentourName,
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
			win.add(winGreenTourLabel);
			
			if (greentourPicture ==='None')
				//don't display a picture
				{}
				//otherwise create and display an imageView
				else{ var image = Titanium.UI.createImageView({
				image:greentourPicture,
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
				
			var splitresult = greentourDesc.split("$$$");		
			var numberofSentences = greentourDesc.split("$$$").length;
			
			var desc = '';
			for (var i=0;i<numberofSentences;i++) {
			    desc = desc + splitresult[i] + '\n';	
			}
			
				var winGreenTourDescription = Ti.UI.createLabel({
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
			
					scrollView.add(winGreenTourDescription);
					win.add(scrollView);					
			
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
				winParkMap.name = greentourLocation;
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

xhr.open('GET','http://hhpz.org/mobile/xml/GreenTour.xml');
xhr.send();//declare the http client object