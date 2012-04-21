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
		fontSize:'30dp',
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
{win.close();
	});



var winZooHillLabel = Ti.UI.createLabel({
	text:'Zoo on the Hill',
	backgroundImage: 'schedulebackground.png',
	textWeight:'strong',
	textAlign: pWidth*.1,
	color: '#fff',
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


//display image
	var image = Titanium.UI.createImageView({
		image:'ZooOnTheHill.png',
		width:pWidth,
		height:pHeight*.5,
		top:pHeight*.1,
		left:'0dp'
	});
		
	
	win.add(image);

	
	var scrollView = Titanium.UI.createScrollView({ 
		contentWidth:'auto', 
		contentHeight:'auto', 
		top:pHeight*.7, 
		showVerticalScrollIndicator:true, 
		showHorizontalScrollIndicator:true }); 
	
	try
	{
		var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'Schedule.xml');
		var xmltext = file.read().text;
		var doc = Ti.XML.parseString(xmltext);
		var hours = doc.getElementsByTagName("p").item(6).text;
		
	var winDescription = Ti.UI.createLabel({
	text: hours,
	textAlign: 'center',
	color: 'black',
    font: {
        fontSize: '18dp',
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
win.add(winZooHillLabel);

win.addEventListener('android:back', function() {  
           win.close();             
            });