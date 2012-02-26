/**
 * @author Myers
 */
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;



var win = Ti.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/Facilities/Facilitiesbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});

var lblTitle=Titanium.UI.createLabel({
	text:"Facilities",
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
	backgroundImage:'/Facilities/homeresting.png',
	backgroundSelectedImage:'/Facilities/homeselected.png',
	top: pHeight*.02, 
	left:pWidth*.04,
	width:pWidth*.19,
	height:pHeight*.07,});
buttonHome.addEventListener('click', function()
{var winHomeScreen=Titanium.UI.createWindow({
    title:'Happy Hollow Park and Zoo',
    backgroundColor:'#FFFFFF',
    url: '/app.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winHomeScreen.open();});

var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Facilities/scheduleresting.png',
	backgroundSelectedImage:'/Facilities/scheduleselected.png',
	top:pHeight*.02,
	left:pWidth*.78,
	width:pWidth*.17,
	height:pHeight*.07,});
buttonHome.addEventListener('click', function()
{var winSchedule=Titanium.UI.createWindow({
    title:'Schedule',
    backgroundColor:'#FFFFFF',
    url: '/Schedule/schedule2.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winSchedule.open();});


var winFacility = Ti.UI.createLabel({
	backgroundImage: '/Facilities/facilitiesbackground.png',
	textWeight:'strong',
	text: win.facility,
	textAlign: pWidth*.1,
	color: '#FFFFFF',
    font: {
        fontSize: '25dp',
        color:'#000000',
        fontWeight: 'normal'
    },
    width: pWidth,
    textAlign: 'left',
    left: '0dp',
    top: pHeight*.55,
    height: pHeight*.15
})

var scrollView = Titanium.UI.createScrollView({ 
		contentWidth:'auto', 
		contentHeight:'auto', 
		top:pHeight*.7, 
		showVerticalScrollIndicator:true, 
		showHorizontalScrollIndicator:true }); 

var winFacilityDescription = Ti.UI.createLabel({
	text: win.facilityDesc,
	textAlign: 'left',
	color: 'white',
    font: {
        fontSize: '18dp',
        color:'#000000',
        fontWeight: 'normal'
    },
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: 'auto'
})
		scrollView.add(winFacilityDescription);
		Titanium.UI.currentWindow.add(scrollView);
		
		
if (win.pictureURL ==='None')
	//don't display a picture
	{}
	//otherwise create and display an imageView
	else{ var image = Titanium.UI.createImageView({
	url:win.pictureURL,
	width:'250dp',
	height:'250dp',
	top:'0dp',
	right:'0dp'});
	
	win.add(image);
	};
	
//var winFacilityDescriptionLabel = Ti.UI.createLabel({
//	text: win.facilityDesc,
//	color: '#FFFFFF',
 //   font: {
  //      fontSize: '30dp',
   //     fontWeight: 'normal'
   // },
    //width: 'auto',
    //textAlign: 'center',
    //top: '100dp',
    //height: 'auto'
//});

win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(winFacility);
win.add(winFacilityDescriptionLabel);
