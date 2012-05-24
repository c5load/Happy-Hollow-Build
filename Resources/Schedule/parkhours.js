var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'schedulebackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});

var lblTitle=Titanium.UI.createLabel({
	text:"Schedule",
	textAlign:'center',
	color:'white',
	font:{
		fontSize:pWidth/13,
		fontWeight:'bold',
	},
	width: pWidth,
	left:'0dp', 
    top: '0dp',
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

var winParkHoursLabel = Ti.UI.createLabel({
	text:'Park Hours',
	backgroundImage: 'schedulebackground.png',
	textWeight:'strong',
	textAlign: pWidth*.1,
	color: '#fff',
    font: {
        fontSize: pWidth/16,
        fontWeight: 'bold'
    },
    width: pWidth,
    textAlign: 'left',
    left: '0dp',
    top: pHeight*.5,
    height: pHeight*.15
})



//display image
	var image = Titanium.UI.createImageView({
	backgroundImage:'HHPZLogo.png',
	width:pWidth,
	height:pHeight*.3,
	top:pHeight*.15,
	left:pWidth*.025
	});
	
	win.add(image);
	

	try
	{
		var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'Schedule.xml');
		var xmltext = file.read().text;
		var doc = Ti.XML.parseString(xmltext);
		var hours = doc.getElementsByTagName("p").item(0).text;	

	var scrollView = Titanium.UI.createScrollView({ 
		contentWidth:'auto', 
		contentHeight:'auto', 
		top:pHeight*.65,
		height:pHeight*.35, 
		showVerticalScrollIndicator:true, 
		showHorizontalScrollIndicator:true }); 
		
	var winDescription = Ti.UI.createLabel({
	text: hours,
	textAlign: 'center',
	color: 'black',
    font: {
        fontSize: pWidth/22,
        fontWeight: 'normal'
    },
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: 'auto'
})
		scrollView.add(winDescription);
		Titanium.UI.currentWindow.add(scrollView);
    }   
    catch(E){Ti.UI.createAlertDialog({message:'No data for this feature.'}).show();
    };		

win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(winParkHoursLabel);

win.addEventListener('android:back', function() {  
           win.close();             
            });