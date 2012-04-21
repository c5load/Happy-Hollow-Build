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
	text:"Events",
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
{
win.close();
	});

var UpcomingEventsLabel = Ti.UI.createLabel({
	text:'Upcoming Events',
	backgroundImage: 'schedulebackground.png',
	textAlign: 'center',
	color: '#fff',
    font: {
        fontSize: '30dp',
        fontWeight: 'bold'
    },
    width: pWidth,
    left: '0dp',
    top: pHeight*.3,
    height: pHeight*.1
})

var SpecialsLabel = Ti.UI.createLabel({
	text:'Specials',
	backgroundImage: 'schedulebackground.png',
	textAlign: 'center',
	color: '#fff',
    font: {
        fontSize: '30dp',
        fontWeight: 'bold'
    },
    width: pWidth,
    left: '0dp',
    top: pHeight*.6,
    height: pHeight*.1
})

	var scrollViewEvents = Titanium.UI.createScrollView({ 
		contentWidth:'auto', 
		contentHeight:'auto', 
		top:pHeight*.1,
		height:pHeight*.2, 
		showVerticalScrollIndicator:true, 
		showHorizontalScrollIndicator:true }); 

	var scrollViewUpcomingEvents = Titanium.UI.createScrollView({ 
		contentWidth:'auto', 
		contentHeight:'auto', 
		top:pHeight*.4,
		height:pHeight*.2, 
		showVerticalScrollIndicator:true, 
		showHorizontalScrollIndicator:true }); 

	try
	{
		var eventsfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'Schedule.xml');
		var eventsxmltext = eventsfile.read().text;
		var eventsdoc = Ti.XML.parseString(eventsxmltext);
		var eventshours = eventsdoc.getElementsByTagName("p").item(4).text;

	var EventsDescription = Ti.UI.createLabel({
	text: eventshours,
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
		scrollViewEvents.add(EventsDescription);
		Titanium.UI.currentWindow.add(scrollViewEvents);
		
		var upcomingeventsfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'Schedule.xml');
		var upcomingeventsxmltext = upcomingeventsfile.read().text;
		var upcomingeventsdoc = Ti.XML.parseString(upcomingeventsxmltext);
		var upcomingeventshours = upcomingeventsdoc.getElementsByTagName("p").item(7).text;	
		
	var UpcomingEventsDescription = Ti.UI.createLabel({
	text: upcomingeventshours,
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
		scrollViewUpcomingEvents.add(UpcomingEventsDescription);
		Titanium.UI.currentWindow.add(scrollViewUpcomingEvents);

    var specialsfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"Specials.xml");
	var specialsxmltext = specialsfile.read().text;
	var specialsdoc = Ti.XML.parseString(specialsxmltext);
	var specialselements = specialsdoc.getElementsByTagName("SpecialName");
	var data = [];

	for(var i = 0; i < specialselements.length; i++) {
		var row = Ti.UI.createTableViewRow({
			hasChild : true,
			height : pHeight * .13,
			backgroundImage : '../backgroundresting.png',
		});
		row.title = specialselements.item(i).getAttribute("SpecialName");
		desc = specialsdoc.getElementsByTagName("SpecialName").item(i).text;
		specialDesc = specialsdoc.getElementsByTagName("Description").item(i).text;
		specialDesc = specialDesc.replace(/(\r\n|\n|\r)/gm, "");
		specialLocation= specialsdoc.getElementsByTagName("Loc").item(i).text;
		specialLocation = specialLocation.replace(/(\r\n|\n|\r)/gm, "");

		var specialLabel = Ti.UI.createLabel({
			text : desc,
			color : '#000000',
			font : {
				fontSize : '20dp'
			},
			height : pHeight * .13,
			textAlign : 'left',
			left : pWidth * .23
		});

		row.add(specialLabel);
		row.item = desc;
		row.item2 = specialDesc;
		row.item3 = specialLocation;
		data.push(row);
	}

	var tableview = Titanium.UI.createTableView({
		data:data,
		top:pHeight*.7,
		height:pHeight*.3,
	});
	tableview.setData(data);
	Titanium.UI.currentWindow.add(tableview);
	tableview.addEventListener('click', function(e) {
			var alertDialog = Titanium.UI.createAlertDialog({
    		title: e.row.item,
    		message: e.row.item2,
    		buttonName: ['OK']
			});
			alertDialog.show();
	});
	}   
    catch(E){Ti.UI.createAlertDialog({message:'No data for this feature.'}).show();
    };	

win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(UpcomingEventsLabel);
win.add(SpecialsLabel);
