var win = Ti.UI.currentWindow;
Ti.UI.createLabel
var winAttractionLabel = Ti.UI.createLabel({
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
    top: 500,
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
    top: 0,
    height: 'auto'
	});

		scrollView.add(winAttractionDescription);
		Titanium.UI.currentWindow.add(scrollView);

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


win.add(winAttractionLabel);



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