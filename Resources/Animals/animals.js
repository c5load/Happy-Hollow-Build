var yourwindow = Titanium.UI.currentWindow;
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar = Titanium.UI.createImageView({
	image : '/Animals/animalsbackground.png',
	width : pWidth,
	left : '0dp',
	top : '0dp',
	height : pHeight * .1
});

var lblTitle = Titanium.UI.createLabel({
	text : "Animals",
	textAlign : 'center',
	color : 'white',
	font : {
		fontSize : '25dp',
		fontWeight : 'bold',
	},
	width : pWidth,
	top : '0dp',
	left : '0dp',
	height : pHeight * .1
});

var buttonHome = Titanium.UI.createButton({
	color : '#fff',
	backgroundImage : '/Animals/homeresting.png',
	backgroundSelectedImage : '/Animals/homeselected.png',
	top : pHeight * .02,
	left : pWidth * .04,
	width : pWidth * .19,
	height : pHeight * .07,
});
buttonHome.addEventListener('click', function() {
	var winHomeScreen = Titanium.UI.createWindow({
		title : 'Happy Hollow Park and Zoo',
		backgroundColor : '#FFFFFF',
		url : '/homescreen.js',
		navBarHidden : true,
		fullscreen : true,
		navBarHidden : true
	});
	winHomeScreen.addEventListener('close', function() {
		winHome = null;
	});
	winHomeScreen.open();
});
var buttonSchedule = Titanium.UI.createButton({
	color : '#fff',
	backgroundImage : '/Animals/scheduleresting.png',
	backgroundSelectedImage : '/Animals/scheduleselected.png',
	top : pHeight * .02,
	left : pWidth * .78,
	width : pWidth * .17,
	height : pHeight * .07,
});
buttonSchedule.addEventListener('click', function() {
	var winSchedule = Titanium.UI.createWindow({
		title : 'Schedule',
		backgroundColor : '#FFFFFF',
		url : '/Schedule/schedule.js',
		fullscreen : true,
		navBarHidden : true
	});
	winSchedule.addEventListener('close', function() {
		winSchedule = null;
	});
	winSchedule.open();
});

    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"Animals.xml");
	var xmltext = file.read().text;
	var doc = Ti.XML.parseString(xmltext);
	var elements = doc.getElementsByTagName("AnimalName");
	var data = [];

	for(var i = 0; i < elements.length; i++) {
		var row = Ti.UI.createTableViewRow({
			hasChild : true,
			height : pHeight * .13,
			backgroundImage : '../backgroundresting.png',
			selectedBackgroundImage : '/Animals/animalsbackground.png'
		});
		row.title = elements.item(i).getAttribute("AnimalName");
		desc = doc.getElementsByTagName("AnimalName").item(i).text;
		animalDesc = doc.getElementsByTagName("Description").item(i).text;
		animalDesc = animalDesc.replace(/(\r\n|\n|\r)/gm, "");
		animalScientific = doc.getElementsByTagName("ScientificName").item(i).text;
		animalScientific = animalScientific.replace(/(\r\n|\n|\r)/gm, "");
		animalClass = doc.getElementsByTagName("Class").item(i).text;
		animalLocation = doc.getElementsByTagName("Loc").item(i).text;
		animalYoutube = doc.getElementsByTagName("YoutubeURL").item(i).text;
		animalYoutube = animalYoutube.replace(/(\r\n|\n|\r)/gm, "");
		animalPicture = doc.getElementsByTagName("PictureURL").item(i).text;
		animalPicture = animalPicture.replace(/(\r\n|\n|\r)/gm, "");
		animalThumbnail = doc.getElementsByTagName("ThumbnailURL").item(i).text;
		animalThumbnail = animalThumbnail.replace(/(\r\n|\n|\r)/gm, "");

		var animalLabel = Ti.UI.createLabel({
			text : desc,
			color : '#000000',
			font : {
				fontSize : '20dp'
			},
			height : pHeight * .13,
			textAlign : 'left',
			left : pWidth * .23
		});
		var animalImage = Ti.UI.createImageView({
			url : animalThumbnail,
			height : pWidth * .18,
			width : pWidth * .18,
			left : pWidth * .025
		});
		row.add(animalLabel);
		row.add(animalImage);
		row.item = desc;
		row.item2 = animalDesc;
		row.item3 = animalScientific;
		row.item4 = animalClass;
		row.item5 = animalLocation;
		row.item6 = animalYoutube;
		row.item7 = animalPicture;
		data.push(row);
	}

	var tableview = Titanium.UI.createTableView({
		data : data,
		top : pHeight * .1,
		height : pHeight * .8,
	});
	tableview.setData(data);
	Titanium.UI.currentWindow.add(tableview);
	tableview.addEventListener('click', function(e) {
		var w = Ti.UI.createWindow({
			url : 'specificanimal.js',
			navBarHidden : true,
			title : '',
			backgroundColor : '#FFFFFF',
			fullscreen : true
		});

		w.addEventListener('close', function() {
			w = null;
		});
		var b = Titanium.UI.createButton({
			title : 'Close',
			style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN
		});
		w.setLeftNavButton(b);
		b.addEventListener('click', function() {
			w.close();
		});
		w.animal = e.rowData.item;
		w.animalDesc = e.rowData.item2;
		w.scientific = e.rowData.item3;
		w.classtype = e.rowData.item4;
		w.location = e.rowData.item5;
		w.youTube = e.rowData.item6;
		w.pictureURL = e.rowData.item7;

		w.open({
			fullscreen : true
		});
	});


var BottomBar = Titanium.UI.createImageView({
	backgroundColor : '#333333',
	width : pWidth,
	left : '0dp',
	top : pHeight * .9,
	height : pHeight * .11
});

var buttonAttractions = Titanium.UI.createButton({
	color : '#FFFFFF',
	borderColor : '#333333',
	backgroundImage : '/Attractions/ridesattractionsiconcolor.png',
	backgroundSelectedImage : '/Attractions/ridesattractionsicon.png',
	top : pHeight * .9,
	width : pWidth * .25,
	height : pHeight * .11,
	left : '0dp',
	font : {
		fontSize : '12dp',
		fontFamily : 'Helvetica Neue'
	},
	title : 'Attractions'
});
buttonAttractions.addEventListener('click', function() {
	var winRidesAttractions = Titanium.UI.createWindow({
		title : 'Rides & Attractions',
		navBarHidden : true,
		backgroundColor : '#FFFFFF',
		url : 'Attractions/attractions.js',
		fullscreen : true,
	});
	winRidesAttractions.addEventListener('close', function() {
		winRidesAttractions = null;
	});
	winRidesAttractions.open();
});
var buttonFacilities = Titanium.UI.createButton({
	color : '#FFFFFF',
	borderColor : '#333333',
	backgroundImage : '/Facilities/facilitiesiconcolor.png',
	backgroundSelectedImage : '/Facilities/facilitiesicon.png',
	top : pHeight * .9,
	width : pWidth * .25,
	height : pHeight * .11,
	left : pWidth * .25,
	font : {
		fontSize : '12dp',
		fontFamily : 'Helvetica Neue'
	},
	title : 'Facilities'
});
buttonFacilities.addEventListener('click', function() {
	var winFacilities = Titanium.UI.createWindow({
		title : 'Facilities',
		navBarHidden : true,
		backgroundColor : '#FFFFFF',
		url : 'Facilities/facilities.js',
		fullscreen : true,
	});
	winFacilities.addEventListener('close', function() {
		winFacilities = null;
	});
	winFacilities.open();
});
var buttonGreenTour = Titanium.UI.createButton({
	color : '#FFFFFF',
	borderColor : '#333333',
	backgroundImage : '/GreenTour/greentouriconcolor.png',
	backgroundSelectedImage : '/GreenTour/greentouricon.png',
	top : pHeight * .9,
	width : pWidth * .25,
	height : pHeight * .11,
	left : pWidth * .5,
	font : {
		fontSize : '12dp',
		fontFamily : 'Helvetica Neue'
	},
	title : 'Green Tour'
});
buttonGreenTour.addEventListener('click', function() {
	var winGreenTour = Titanium.UI.createWindow({
		title : 'Green Tour',
		navBarHidden : true,
		backgroundColor : '#FFFFFF',
		url : '/GreenTour/greentour.js',
		fullscreen : true,
	});
	winGreenTour.addEventListener('close', function() {
		winGreenTour = null;
	});
	winGreenTour.open();
});

win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(BottomBar);
win.add(buttonAttractions);
win.add(buttonFacilities);
win.add(buttonGreenTour);

win.addEventListener('android:back', function() {
	win.close();
});