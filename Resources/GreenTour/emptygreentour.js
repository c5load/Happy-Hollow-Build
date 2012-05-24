var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/GreenTour/greentourbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});
win.add(TitleBar);

var lblTitle=Titanium.UI.createLabel({
	text:"Green Tour",
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
win.add(buttonHome);

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
	backgroundImage:'greentourbackground.png',	
    width: pWidth,
	top:pHeight*.5,
	height:pHeight*.1,
})
win.add(winBar);

var selectedGreenTour=win.name.replace(/(\r\n|\n|\r)/gm, "");
var selectedGreenTourTest=".*" + selectedGreenTour + ".*";
var selectedGreenTourExpression= new RegExp(selectedGreenTourTest);

var greentourName = ""
var greentourDesc = 'Green Tour not found.'
var greentourPicture = 'None'     
var greentourThumbnail = 'None'

    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"GreenTour.xml");
	var xmltext = file.read().text;
	var doc = Ti.XML.parseString(xmltext);
	var elements = doc.getElementsByTagName("GreenTourName");  

    for (var i=0;i<elements.length;i++) {
 		var greentourLocation = doc.getElementsByTagName("Loc").item(i).text;
        greentourLocation = greentourLocation.replace(/(\r\n|\n|\r)/gm, ""); 

		if (selectedGreenTourExpression.test(greentourLocation)){        
        greentourName = doc.getElementsByTagName("GreenTourName").item(i).text;
        greentourName = greentourName.replace(/(\r\n|\n|\r)/gm, ""); 
        greentourDesc = doc.getElementsByTagName("Description").item(i).text;
        greentourDesc = greentourDesc.replace(/(\r\n|\n|\r)/gm, "");                                
        greentourPicture = doc.getElementsByTagName("PictureURL").item(i).text;
        greentourPicture = greentourPicture.replace(/(\r\n|\n|\r)/gm, "");        
        greentourThumbnail = doc.getElementsByTagName("ThumbnailURL").item(i).text;
        greentourThumbnail = greentourThumbnail.replace(/(\r\n|\n|\r)/gm, "");      
   		}
	};
			var winGreenTourLabel = Titanium.UI.createLabel({
				textWeight:'strong',
				text: greentourName,
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
			win.add(winGreenTourLabel);
			
			if (greentourPicture ==='None')
				//don't display a picture
				{}
				//otherwise create and display an imageView
				else{ var image = Titanium.UI.createImageView({
				image:greentourPicture,
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
				
			var splitresult = greentourDesc.split("$$$");		
			var numberofSentences = greentourDesc.split("$$$").length;
			
			var desc = '';
			for (var i=0;i<numberofSentences;i++) {
			    desc = desc + splitresult[i] + '\n';	
			}
			
				var winGreenTourDescription = Ti.UI.createLabel({
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
			
					scrollView.add(winGreenTourDescription);
					win.add(scrollView);					

function schedulegohome(e){
win.close(); winSchedule = null	
}