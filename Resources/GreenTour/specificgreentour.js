var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'greentourbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});

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

var winBar = Titanium.UI.createLabel({
	backgroundImage:'greentourbackground.png',	
    width: pWidth,
	top:pHeight*.5,
	height:pHeight*.1,
})


var winGreenTour = Ti.UI.createLabel({
	text: win.greentour,
	color: '#FFFFFF',
    font: {
        fontSize: '20dp',
        fontWeight: 'bold'
    },
    width: pWidth,
    textAlign: 'left',
    left: pWidth*.02,
    top: pHeight*.44,
    height: pHeight*.15
});

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
		contentWidth:'auto', 
		contentHeight:'auto', 
		top:pHeight*.6,
		height:pHeight*.3,		 
		scrollType:'vertical',
		showVerticalScrollIndicator:true, 
		showHorizontalScrollIndicator:true }); 

	var finaldescription=win.greentourDesc;		
	var splitresult = finaldescription.split("$$$");		
	var numberofSentences = finaldescription.split("$$$").length;

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
        color:'#000000',
        fontWeight: 'normal'
    },
    width: pWidth,
    textAlign: 'left',
    left: '0dp',
    top: '0dp',
    height: 'auto'
});

	scrollView.add(winGreenTourDescription);
	Titanium.UI.currentWindow.add(scrollView);


var BottomBar=Titanium.UI.createImageView({
	backgroundColor:'#333333',
    width: pWidth,
    left: '0dp',
    top: pHeight*.9,
    height: pHeight*.11
});

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
	winParkMap.name=win.location;

	winParkMap.addEventListener('close', mapgohome);
	winParkMap.addEventListener('android:back', function() {
		winParkMap.removeEventListener('close', mapgohome);
		winParkMap.close(); winParkMap = null
		});		
	winParkMap.open({fullscreen:true});	
	});
	
win.add(BottomBar);
win.add(buttonMap);		
win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(winBar);
win.add(winGreenTour);

function mapgohome(e){
win.close(); winParkMap = null	
}
function schedulegohome(e){
win.close(); winSchedule = null	
}