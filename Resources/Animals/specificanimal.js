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
    url: '/app.js',
    navBarHidden:true,
    fullscreen : true,  
    exitOnClose: true,
    navBarHidden: true
});
	winHomeScreen.open();
		win.close();
	});

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
    url: '/Schedule/schedule2.js',
    fullscreen : true,  
    exitOnClose: true,
    navBarHidden: true});
winSchedule.addEventListener('close', function(){winSchedule = null;});
winSchedule.open();});


var winAnimalLabel = Titanium.UI.createLabel({
	backgroundImage:'animalsbackground.png',	
	textWeight:'strong',
	text: win.animal,
	textAlign: pWidth*.1,
	color: 'white',
    font: {
        fontSize: '25dp',
        fontWeight: 'normal'
    },
    width: pWidth,
    textAlign: 'left',
    left: '0dp',
    top: pHeight*.45,
    height: pHeight*.15
})

var winAnimalScientific = Ti.UI.createLabel({
	text: win.scientific,
	textAlign: pWidth*.1,
	color: 'white',
    font: {
        fontSize: '18dp',
        fontWeight: 'normal'
    },
    width: 'auto',
    textAlign: 'center',
    left:'0dp',
    top:pHeight*.53,
    height: pHeight*.1,
})

if (win.pictureURL ==='None')
	//don't display a picture
	{}
	//otherwise create and display an imageView
	else{ var image = Titanium.UI.createImageView({
	url:win.pictureURL,
	width:pWidth,
	height:pHeight*.5,
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
		
	var winAnimalDescription = Ti.UI.createLabel({
	text: win.animalDesc,
	textAlign: 'center',
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
		Titanium.UI.currentWindow.add(scrollView);
		
		

		

if (win.youTube ==='None')
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
        top:pHeight*.53,
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

var BottomBar=Titanium.UI.createImageView({
	backgroundColor:'#333333',
    width: pWidth,
    left: '0dp',
    top: pHeight*.9,
    height: pHeight*.11
});
 
var buttonMap = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundSelectedColor:'#FFFFFF',
	backgroundImage:'/ParkMap/findonmap.png',
	top: pHeight*.9,
	width:pWidth*.25,
	height:pHeight*.11,
	left:'0dp',
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Park Map'});		
buttonMap.addEventListener('click', function()
{var winParkMap = Titanium.UI.createWindow({
    title:'Park Map',
    navBarHidden:true,
    backgroundColor:'#FFFFFF',
    url: 'ParkMap/mapempty.js',
    fullscreen : true});
winParkMap.addEventListener('close', function(){winParkMap = null;});
	winParkMap.open();
	});


win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(winAnimalLabel);
win.add(winAnimalScientific);
win.add(winAnimalDescription);
win.add(linkE)};
win.add(BottomBar);
win.add(buttonMap);

win.addEventListener('android:back', function() {  
           win.close();             
            });
