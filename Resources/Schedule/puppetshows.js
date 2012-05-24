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



var winPuppetShowLabel = Ti.UI.createLabel({
	text:'Puppet Show',
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
    top: pHeight*.55,
    height: pHeight*.15
})


//display image
	var image = Titanium.UI.createImageView({
	image:'PuppetCastleTheater.png',
	width:pWidth,
	height:pHeight*.5,
	top:pHeight*.1,
	left:'0dp'});
	
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
		var hours = doc.getElementsByTagName("p").item(3).text;
		
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
win.add(winPuppetShowLabel);

win.addEventListener('android:back', function() {  
           win.close();             
            });