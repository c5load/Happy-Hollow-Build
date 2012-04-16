var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.currentWindow;


var TitleBar=Titanium.UI.createImageView({
	image:'/Animals/animalsbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});
win.add(TitleBar);

var lblTitle=Titanium.UI.createLabel({
	text:"Animals",
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
	backgroundImage:'/Animals/homeresting.png',
	backgroundSelectedImage:'/Animals/homeselected.png',
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
    navBarHidden: true
});
winHomeScreen.addEventListener('close', function(){winHome = null;});
	winHomeScreen.open();
	});
win.add(buttonHome);

var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Animals/scheduleresting.png',
	backgroundSelectedImage:'/Animals/scheduleselected.png',
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
	backgroundImage:'animalsbackground.png',	
    width: pWidth,
	top:pHeight*.5,
	height:pHeight*.1,
})
win.add(winBar);

var winAnimalLabel = Titanium.UI.createLabel({
	textWeight:'strong',
	text: win.animal,
	textAlign: pWidth*.1,
	color: 'white',
    font: {
        fontSize: '20dp',
        fontWeight: 'bold'
    },
    width: pWidth,
    textAlign: 'left',
    left: pWidth*.02,
	top:pHeight*.46,
	height:pHeight*.1,
})
win.add(winAnimalLabel);

if (win.scientific ==='None')
{}
else {var winAnimalScientific = Ti.UI.createLabel({
	text: win.scientific,
	textAlign: pWidth*.1,
	color: 'white',
    font: {
        fontSize: '18dp',
        fontWeight: 'normal'
    },
    width: 'auto',
    textAlign: 'center',
    left:pWidth*.02,
    top:pHeight*.52,
    height: pHeight*.1,
});

win.add(winAnimalScientific);
};

if (win.pictureURL ==='None')
	//don't display a picture
	{}
	//otherwise create and display an imageView
	else{ var image = Titanium.UI.createImageView({
	image:win.pictureURL,
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
		top:pHeight*.6,
		height:pHeight*.3, 
		scrollType:'vertical',
		showVerticalScrollIndicator:true, 
		showHorizontalScrollIndicator:true }); 

var finaldescription=win.animalDesc;		
var splitresult = finaldescription.split("$$$");		
var numberofSentences = finaldescription.split("$$$").length;

var desc = '';
for (var i=0;i<numberofSentences;i++) {
    desc = desc + splitresult[i] + '\n';	
}

	var winAnimalDescription = Ti.UI.createLabel({
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

		scrollView.add(winAnimalDescription);
		win.add(scrollView);
		

if (win.youTube ==='None')
{}
else{
var linkE = Titanium.UI.createLabel({
        text: "Click for video",
        color: 'blue',
        font: {
            fontSize: '18dp',
            fontWeight: 'normal'
        },
        width:'auto',
        textAlign: 'left',
        top:pHeight*.52,
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
     w.open(Titanium.Platform.openURL(win.youTube));
});
win.add(linkE);
}

var BottomBar=Titanium.UI.createImageView({
	backgroundColor:'#333333',
    width: pWidth,
    left: '0dp',
    top: pHeight*.9,
    height: pHeight*.11
});
win.add(BottomBar);

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
	winParkMap.name=win.location;
	winParkMap.open({fullscreen:true});
	});
win.add(buttonMap);

win.addEventListener('android:back', function() {  
           win.close();             
            });