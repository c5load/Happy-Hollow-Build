var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/Facilities/facilitiesbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});
win.add(TitleBar);

var lblTitle=Titanium.UI.createLabel({
	text:"Facilities",
	textAlign:'center', 
	color:'white',
	font:{
		fontSize:pWidth/13,
		fontWeight:'bold',
	},
	width: pWidth, 
    top: '0dp',
    left:'0dp',    
    height: pHeight*.1
});
win.add(lblTitle);

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
win.add(buttonHome);

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
    exitOnClose: true,
    navBarHidden: true});

			winSchedule.addEventListener('close', schedulegohome);
			winSchedule.addEventListener('android:back', function() {
			winSchedule.removeEventListener('close', schedulegohome);
			winSchedule.close(); winSchedule = null
			});		
			winSchedule.open({fullscreen:true});		
			});

win.add(buttonSchedule);

var winBar = Titanium.UI.createLabel({
	backgroundImage:'facilitiesbackground.png',	
    width: pWidth,
	top:pHeight*.5,
	height:pHeight*.1,
})
win.add(winBar);

var selectedFacility=win.name.replace(/(\r\n|\n|\r)/gm, "");
var selectedFacilityTest=".*" + selectedFacility + ".*";
var selectedFacilityExpression= new RegExp(selectedFacilityTest);

var facilityName = ""
var facilityDesc = 'Facility not found.'
var facilityPicture = 'None'
var facilityThumbnail = 'None'

    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"Facilities.xml");
	var xmltext = file.read().text;
	var doc = Ti.XML.parseString(xmltext);
	var elements = doc.getElementsByTagName("FacilityName");  

    for (var i=0;i<elements.length;i++) {
 		var facilityLocation = doc.getElementsByTagName("Loc").item(i).text;
        facilityLocation = facilityLocation.replace(/(\r\n|\n|\r)/gm, ""); 
        
		if (selectedFacilityExpression.test(facilityLocation)){            	
        facilityName = doc.getElementsByTagName("FacilityName").item(i).text;
        facilityName = facilityName.replace(/(\r\n|\n|\r)/gm, ""); 
        facilityDesc = doc.getElementsByTagName("Description").item(i).text;
        facilityDesc = facilityDesc.replace(/(\r\n|\n|\r)/gm, "");                                 
        facilityPicture = doc.getElementsByTagName("PictureURL").item(i).text;
        facilityPicture = facilityPicture.replace(/(\r\n|\n|\r)/gm, "");        
        facilityThumbnail = doc.getElementsByTagName("ThumbnailURL").item(i).text;
        facilityThumbnail = facilityThumbnail.replace(/(\r\n|\n|\r)/gm, "");      
   		}
	};

			var winFacilityLabel = Titanium.UI.createLabel({
				textWeight:'strong',
				text: facilityName,
				textAlign: pWidth*.1,
				color: 'white',
			    font: {
			        fontSize: pWidth/16,
			        fontWeight: 'bold'
			    },
			    width: pWidth,
			    textAlign: 'left',
			    left: pWidth*.02,
				top:pHeight*.48,
				height:pHeight*.1,
			})
			win.add(winFacilityLabel);
			
			if (facilityPicture ==='None')
				//don't display a picture
				{}
				//otherwise create and display an imageView
				else{ var image = Titanium.UI.createImageView({
				image:facilityPicture,
				width:pWidth,
				height:pHeight*.4,
				top:pHeight*.1,
				left:'0dp'});
				
				win.add(image);
				};
				
				var scrollView = Titanium.UI.createScrollView({
					backgroundcolor:'#FFFFFF', 
					contentWidth:'auto', 
					contentHeight:'auto', 
					top:pHeight*.6,
					height:pHeight*.4,
					scrollType:'vertical',
					showVerticalScrollIndicator:true, 
					showHorizontalScrollIndicator:true }); 
				
			var splitresult = facilityDesc.split("$$$");		
			var numberofSentences = facilityDesc.split("$$$").length;
			
			var desc = '';
			for (var i=0;i<numberofSentences;i++) {
			    desc = desc + splitresult[i] + '\n';	
			}
			
				var winFacilityDescription = Ti.UI.createLabel({
				text: desc,
				textAlign: 'left',
				color: '#000000',
			    font: {
			        fontSize: pWidth/20,
			        fontWeight: 'normal'
			    },
			    width: pWidth,
			    left: '0dp',
			    top: '0dp',
			    height: 'auto'
			})			
					scrollView.add(winFacilityDescription);
					win.add(scrollView);					

function schedulegohome(e){
win.close(); winSchedule = null	
}