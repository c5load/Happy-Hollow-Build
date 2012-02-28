var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

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
{winHomeScreen.open();});

var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'scheduleresting.png',
	backgroundSelectedImage:'scheduleselected.png',
	top:pHeight*.02,
	left:pWidth*.78,
	width:pWidth*.17,
	height:pHeight*.07,});
buttonHome.addEventListener('click', function()
{winSchedule.open();});

var mapview = Ti.UI.createView({ backgroundImage:'parkmap.png',width:pWidth,height:pHeight*.8, top:pHeight*.1});
 
                var scrollView = Titanium.UI.createScrollView({
                contentWidth:'auto',
                contentHeight:'auto',
                showVerticalScrollIndicator:false,
                showHorizontalScrollIndicator:false,
                top:0,left:0,width:'100%',height:'100%',
                backgroundColor:'black',
                minZoomScale:1,  
                maxZoomScale:15, 
                zoomScale:1,
                oldZoom:1
 
            });
 
            scrollView.addEventListener('pinch',function(e){
 
                        if (e.scale>1)
                        {
                            if (e.scale>scrollView.zoomScale)
                                {
                                    scrollView.zoomScale=e.scale;
                                }
                            else
                                {
                                    scrollView.zoomScale=scrollView.oldZoom + (e.scale-1);
                                }
                            }
                        else
                        if (e.scale<scrollView.zoomScale)
                          scrollView.zoomScale=scrollView.zoomScale - (1-e.scale);
            });
 
            scrollView.addEventListener('touchend',function(e){
                scrollView.oldZoom=scrollView.zoomScale;
            });
 
            var viewArray=[];
 
 
            scrollView.add(mapview);
 
var winScroll = Ti.UI.createWindow({});
 
winScroll.add(scrollView);
winScroll.open();

win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(winScroll);
