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
{
	win.close();
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
    url: '/Schedule/rideschedule.js',
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
	backgroundImage:'ridesattractionsbackground.png',	
    width: pWidth,
	top:pHeight*.5,
	height:pHeight*.1,
})

var winAttractionLabel = Ti.UI.createLabel({
	text: win.attraction,
	color: '#FFFFFF',
    font: {
        fontSize: '20dp',
        color:'#000000',        
        fontWeight: 'bold'
    },
    width: pWidth,
    textAlign: 'left',
    left: pWidth*.02,
    top: pHeight*.46,
    height: pHeight*.1
})

win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(winBar);
win.add(winAttractionLabel);


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

	var finaldescription=win.attractionDesc;		
	var splitresult = finaldescription.split("$$$");		
	var numberofSentences = finaldescription.split("$$$").length;

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
		Titanium.UI.currentWindow.add(scrollView);
	
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
        left:pWidth*.65
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
win.add(linkE)};


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
	winParkMap.open();		
	});

win.add(BottomBar);
win.add(buttonMap);	

function mapgohome(e){
win.close(); winParkMap = null	
} 
function schedulegohome(e){
win.close(); winSchedule = null	
}   