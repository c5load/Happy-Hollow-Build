var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/Facilities/facilitiesbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});

var lblTitle=Titanium.UI.createLabel({
	text:"Facilities",
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
	backgroundImage:'/Facilities/homeresting.png',
	backgroundSelectedImage:'/Facilities/homeselected.png',
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
	backgroundImage:'/Facilities/scheduleresting.png',
	backgroundSelectedImage:'/Facilities/scheduleselected.png',
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

    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"Facilities.xml");
	var xmltext = file.read().text;
	var doc = Ti.XML.parseString(xmltext);
	var elements = doc.getElementsByTagName("FacilityName");
    var data = [];
    for (var i=0;i<elements.length;i++) {
        var row = Ti.UI.createTableViewRow({
        	hasChild:true,
        	height:pHeight*.13,
        	backgroundImage: '../backgroundresting.png',
        	selectedBackgroundImage: '/Facilities/facilitiesbackground.png'
        });
        row.title = elements.item(i).getAttribute("FacilityName");
        desc = doc.getElementsByTagName("FacilityName").item(i).text;
        facilityDesc = doc.getElementsByTagName("Description").item(i).text;
        facilityDesc = facilityDesc.replace(/(\r\n|\n|\r)/gm, "");       
        facilityLocation = doc.getElementsByTagName("Loc").item(i).text;
        facilityPicture = doc.getElementsByTagName("PictureURL").item(i).text;
        facilityPicture = facilityPicture.replace(/(\r\n|\n|\r)/gm, "");        
		facilityThumbnail = doc.getElementsByTagName("ThumbnailURL").item(i).text;
        facilityThumbnail = facilityThumbnail.replace(/(\r\n|\n|\r)/gm, "");
        
        var facilityLabel = Ti.UI.createLabel({
        	text: desc,
        	color:'#000000',
        	font:{fontSize:'20dp'},
        	height:pHeight*.13,
        	textAlign:'left',
        	left:pWidth*.23  
        });
        
            var facilityImage = Ti.UI.createImageView({
        	image: facilityThumbnail,
        	height:pWidth*.18,
        	width:pWidth*.18,
        	left: pWidth*.025  
        });
        
        row.add(facilityLabel);
        row.add(facilityImage);
        row.item = desc;
        row.item2 = facilityDesc;
        row.item3 = facilityLocation;
        row.item4 = facilityPicture;
        data.push(row);}
   
    var tableview = Titanium.UI.createTableView({
       top:pHeight*.1,
       data:data,
       height:pHeight*.8,
    });
    tableview.setData(data);
    Titanium.UI.currentWindow.add(tableview); 
    tableview.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({
   			backgroundColor:'#FFFFFF',
			url:'specificFacility.js', 
			navBarHidden:true,
   			title:'',
   			fullscreen:true });

			w.addEventListener('close', gohome);
			w.addEventListener('android:back', function() {
			w.removeEventListener('close', gohome);
			w.close(); w = null
			}); 

			w.facility = e.rowData.item;
			w.facilityDesc = e.rowData.item2;
			w.location = e.rowData.item3;
			w.pictureURL = e.rowData.item4;
			
			w.open({fullscreen:true});
		});

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
	title:'Facilities'});		
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

var buttonGreenTour = Titanium.UI.createButton({
	color:'#FFFFFF',
	borderColor:'#333333',
	backgroundImage:'/GreenTour/greentouriconcolor.png',
	backgroundSelectedImage:'/GreenTour/greentouricon.png',
	top: pHeight*.9,
	width:pWidth*.25,
	height:pHeight*.11,
	left:pWidth*.5,
	font:{fontSize:'12dp', fontFamily:'Helvetica Neue'},
	title:'Green Tour'});		
buttonGreenTour.addEventListener('click', function()
{
	var winGreenTour = Titanium.UI.createWindow({
    title:'Green Tour',
    navBarHidden:true,    
    backgroundColor:'#FFFFFF',
    url: '/GreenTour/greentour.js',
    fullscreen : true,});

	winGreenTour.addEventListener('close', gohome);
	winGreenTour.addEventListener('android:back', function() {
	winGreenTour.removeEventListener('close', gohome);
		winGreenTour.close(); winGreenTour = null
	});
	winGreenTour.open();
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
win.add(buttonGreenTour);

function gohome(e){
win.close(); w = null	
}
function schedulegohome(e){
win.close(); winSchedule = null	
}