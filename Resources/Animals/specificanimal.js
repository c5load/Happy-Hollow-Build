var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.currentWindow;
Ti.UI.createLabel
var winAnimalLabel = Ti.UI.createLabel({
	backgroundImage: '../animalsrest.png',
	text: win.animal,
	textAlign: 'left',
	color: 'white',
    font: {
        fontSize: 40,
        fontWeight: 'normal'
    },
    width: pWidth,
    textAlign: 'center',
    left: 0,
    top: pHeight*.6,
    height: pHeight*.20
})

var winAnimalScientific = Ti.UI.createLabel({
	text: win.scientific,
	textAlign: 'left',
	color: 'white',
    font: {
        fontSize: 20,
        fontWeight: 'normal'
    },
    width: 'auto',
    textAlign: 'center',
    left: 0,
    top: 580,
    height: 'auto'
})

if (win.pictureURL ==='None')
	//don't display a picture
	{}
	//otherwise create and display an imageView
	else{ var image = Titanium.UI.createImageView({
	url:win.pictureURL,
	width:'500',
	height:'500',
	top:0,
	left:0});
	
	win.add(image);
	};
	
	var scrollView = Titanium.UI.createScrollView({ 
		contentWidth:'auto', 
		contentHeight:'auto', 
		top:650, 
		showVerticalScrollIndicator:true, 
		showHorizontalScrollIndicator:true }); 
		
		var winAnimalDescription = Ti.UI.createLabel({
	text: win.animalDesc,
	textAlign: 'left',
	color: 'white',
    font: {
        fontSize: 30,
        fontWeight: 'normal'
    },
    width: 'auto',
    textAlign: 'center',
    left: 0,
    top: 0,
    height: 'auto'
})
		scrollView.add(winAnimalDescription);
		Titanium.UI.currentWindow.add(scrollView);
		
		

		
var winAnimalDescLabel = Ti.UI.createLabel({
	
	text: win.animalDesc,
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


win.add(winAnimalLabel);
win.add(winAnimalScientific);
win.add(winAnimalDescription);
