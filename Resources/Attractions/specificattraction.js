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

var lblTitle=Titanium.UI.createLabel({
	text:"Rides & Attractions",
	textAlign:'center', 
	color:'white',
	font:{
		fontSize:'20dp',
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
{win.close();});

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
    url: '/Schedule/schedule2.js',
    fullscreen : true,  
    exitOnClose: true,
    navBarHidden: true});
winSchedule.addEventListener('close', function(){winSchedule = null;});
winSchedule.open();});

var winAttractionLabel = Ti.UI.createLabel({
	backgroundImage:'/Attractions/ridesattractionsbackground.png',
	text: win.attraction,
	textWeight:'strong',
	textAlign: pWidth*.1,
	color: 'white',
    font: {
        fontSize: '25dp',
        fontWeight: 'normal'
    },
    width: pWidth,
    textAlign: 'left',
    left: '0dp',
    top: pHeight*.55,
    height: pHeight*.15
})

var image1 = Titanium.UI.createImageView({
	url:'http://hhpz.org/mobile/images/TestAttraction.png',
	width:pWidth,
	height:pHeight*.5,
	top:pHeight*.1,
	left:'0dp'
});
win.add(image1);

//if (win.pictureURL ==='None')
	//don't display a picture
//	{}
	//otherwise create and display an imageView
//	else{ var image = Titanium.UI.createImageView({
//	url:win.pictureURL,
//	width:pWidth,
//	height:pHeight*.5,
//	top:pHeight*.1,
//	left:'0dp'});
	
//	win.add(image);
//	};
	
	var scrollView = Titanium.UI.createScrollView({ 
		contentWidth:'auto', 
		contentHeight:'auto', 
		top:pHeight*.7, 
		showVerticalScrollIndicator:true, 
		showHorizontalScrollIndicator:true }); 
		
	var winAttractionDescription = Ti.UI.createLabel({
	text: win.attractionDesc,
	textAlign: 'center',
	color: 'white',
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
        top:pHeight*.63,
        height: pHeight*.1,
        left:pWidth*.6
});
 
linkE.addEventListener('click',function(e)
{
     var w = Ti.UI.createWindow();
     w.open(Titanium.Platform.openURL(win.youTube));
});
 

win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(winAttractionLabel);
win.add(linkE)};

win.addEventListener('android:back', function() {  
           win.close();             
            });
            
/**
 * @author Myers
 */
/*
var win = Ti.UI.currentWindow;
Ti.UI.createLabel
var winAttraction = Ti.UI.createLabel({
	text: win.attraction,
	textAlign: 'left',
	color: 'white',
    font: {
        fontSize: 40,
        fontWeight: 'normal'
    },
    width: 'auto',
    textAlign: 'center',
    left: 0,
    top: 10,
    height: 'auto'
})


var winAttractionDescription = Ti.UI.createLabel({
	text: win.attractionDesc,
	textAlign: 'left',
	color: 'white',
    font: {
        fontSize: 30,
        fontWeight: 'normal'
    },
    width: 'auto',
    textAlign: 'center',
    left: 0,
    top: 290,
    height: 'auto'
})
if (win.pictureURL ==='None')
	//don't display a picture
	{}
	//otherwise create and display an imageView
	else{ var image = Titanium.UI.createImageView({
	url:win.pictureURL,
	width:'250',
	height:'250',
	top:0,
	right:0});
	
	win.add(image);
	};
var winAnimalDescLabel = Ti.UI.createLabel({
	text: win.attractionDesc,
	color: 'white',
    font: {
        fontSize: 30,
        fontWeight: 'normal'
    },
    width: 'auto',
    textAlign: 'center',
    top: 100,
    height: 'auto'
});

if (win.youTube ==='None')
{}
else{
var linkE = Titanium.UI.createLabel({
        text: "Click for video",
        color: 'blue',
        font: {
            fontSize: 16,
            fontWeight: 'bold'
        },
        width: 'auto',
        textAlign: 'left',
        top:600,
        height: 'auto',
});
 
linkE.addEventListener('click',function(e)
{
     var w = Ti.UI.createWindow();
     w.open(Titanium.Platform.openURL(win.youTube));
});
 
win.add(linkE)};


win.add(winAttraction);
win.add(winAttractionDescription);
*/