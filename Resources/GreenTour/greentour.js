var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/GreenTour/greentourbackground.png',
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
	backgroundImage:'/GreenTour/homeresting.png',
	backgroundSelectedImage:'/GreenTour/homeselected.png',
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
	backgroundImage:'/GreenTour/scheduleresting.png',
	backgroundSelectedImage:'/GreenTour/scheduleselected.png',
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

	try {
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"GreenTour.xml");
	var xmltext = file.read().text;
	var doc = Ti.XML.parseString(xmltext);
	var elements = doc.getElementsByTagName("GreenTourName");
    var data = [];

    for (var i=0;i<elements.length;i++) {
        var row = Ti.UI.createTableViewRow({
        	hasChild:true,
        	height:pHeight*.13,
        	backgroundImage: '../backgroundresting.png',
        	selectedBackgroundImage: 'greentourbackground.png'        	
        });
        row.title = elements.item(i).getAttribute("GreenTourName");
        desc = doc.getElementsByTagName("GreenTourName").item(i).text;
        greentourDesc = doc.getElementsByTagName("Description").item(i).text;
        greentourDesc = greentourDesc.replace(/(\r\n|\n|\r)/gm, "");
        greentourLocation = doc.getElementsByTagName("Loc").item(i).text;
        greentourPicture = doc.getElementsByTagName("PictureURL").item(i).text;
        greentourPicture = greentourPicture.replace(/(\r\n|\n|\r)/gm, "");
        greentourThumbnail = doc.getElementsByTagName("ThumbnailURL").item(i).text;
        greentourThumbnail = greentourThumbnail.replace(/(\r\n|\n|\r)/gm, "");
        
               
        var greentourLabel = Ti.UI.createLabel({
        	text: desc,
        	color:'#000000',
        	font:{fontSize:'20dp'},
        	height:pHeight*.13,
        	textAlign:'left',
        	left:pWidth*.23  
        });
        
        var greentourImage = Ti.UI.createImageView({
        	url: greentourThumbnail,
        	height:pWidth*.18,
        	width:pWidth*.18,
        	left: pWidth*.025  
        });
        
        row.add(greentourLabel);
        row.add(greentourImage);
        row.item = desc;
        row.item2 = greentourDesc;
        row.item3 = greentourLocation;
        row.item4 = greentourPicture;
        data.push(row);}
   
    var tableview = Titanium.UI.createTableView({
        data:data,
    	top:pHeight*.1,
        height:pHeight*.8,
    });
    tableview.setData(data);
    Titanium.UI.currentWindow.add(tableview); 
    tableview.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({
			url:'specificgreentour.js', 
			navBarHidden:true,
   			title:'',
   			backgroundColor:'#FFFFFF',
   			fullscreen:true });
   			w.addEventListener('close', function(){w = null; win.close();}); 

			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			}); 
			
			w.greentour = e.rowData.item;
			w.greentourDesc = e.rowData.item2;
			w.location = e.rowData.item3;
			w.pictureURL = e.rowData.item4;
			
			w.open({fullscreen:true});
		});
	}
	   catch(E){Ti.UI.createAlertDialog({message:'No data for this feature.'}).show();
    };

var BottomBar=Titanium.UI.createImageView({
	backgroundColor:'#333333',
    width: pWidth,
    left: '0dp',
    top: pHeight*.9,
    height: pHeight*.11
});

var buttonAnimals = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/Animals/animaliconscolor.png',
	backgroundSelectedImage:'/Animals/animalsicon.png',
	top: pHeight*.9,
	width:pWidth*.25,
	height:pHeight*.11,
	left:'0dp',
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Animals'});		
buttonAnimals.addEventListener('click', function()
{var winAnimals = Titanium.UI.createWindow({
    title:'Animals',
    navBarHidden:true,
    backgroundColor:'#FFFFFF',
    url: 'Animals/animals.js',
    fullscreen : true});

	winAnimals.addEventListener('close', gohome);
	winAnimals.addEventListener('android:back', function() {
	winAnimals.removeEventListener('close', gohome);
		winAnimals.close(); winAnimals = null
	});
	winAnimals.open();
	});

var buttonAttractions = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/Attractions/ridesattractionsiconcolor.png',
	backgroundSelectedImage:'/Attractions/ridesattractionsicon.png',
	top: pHeight*.9,
	width:pWidth*.25,
	height:pHeight*.11,
	left:pWidth*.25,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Attractions'});		
buttonAttractions.addEventListener('click', function()
{
	var winRidesAttractions = Titanium.UI.createWindow({
    title:'Rides & Attractions',
    navBarHidden:true,
    backgroundColor:'#FFFFFF',
    url: 'Attractions/attractions.js',
    fullscreen : true,});

	winRidesAttractions.addEventListener('close', gohome);
	winRidesAttractions.addEventListener('android:back', function() {
	winRidesAttractions.removeEventListener('close', gohome);
		winRidesAttractions.close(); winRidesAttractions = null
	});
	winRidesAttractions.open();
	});

var buttonFacilities = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/Facilities/facilitiesiconcolor.png',
	backgroundSelectedImage:'/Facilities/facilitiesicon.png',
	top: pHeight*.9,
	width:pWidth*.25,
	height:pHeight*.11,
	left:pWidth*.5,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Facilities'});		
buttonFacilities.addEventListener('click', function()
{var winFacilities = Titanium.UI.createWindow({
    title:'Facilities',
    navBarHidden:true,    
    backgroundColor:'#FFFFFF',
    url: 'Facilities/facilities.js',
    fullscreen : true,});	

	winFacilities.addEventListener('close', gohome);
	winFacilities.addEventListener('android:back', function() {
	winFacilities.removeEventListener('close', gohome);
		winFacilities.close(); winFacilities = null
	});
	winFacilities.open();
	});
	
win.add(TitleBar);
win.add(lblTitle);
win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
win.add(BottomBar);
win.add(buttonAnimals);
win.add(buttonAttractions);
win.add(buttonFacilities);

function gohome(e){
win.close(); w = null	
}
function schedulegohome(e){
win.close(); winSchedule = null	
}