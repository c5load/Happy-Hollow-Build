var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/Animals/animalsbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});
win.add(TitleBar);

var lblTitle=Titanium.UI.createLabel({
	text:"Animals",
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
	backgroundImage:'/Animals/homeresting.png',
	backgroundSelectedImage:'/Animals/homeselected.png',
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
	backgroundImage:'/Animals/scheduleresting.png',
	backgroundSelectedImage:'/Animals/scheduleselected.png',
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
	backgroundImage:'animalsbackground.png',	
    width: pWidth,
	top:pHeight*.5,
	height:pHeight*.1,
})
win.add(winBar);

var selectedAnimal=win.name.replace(/(\r\n|\n|\r)/gm, "");
var selectedAnimalTest=".*" + selectedAnimal + ".*";
var selectedAnimalExpression= new RegExp(selectedAnimalTest);

var animalName = ""
var animalDesc = 'Animal not found.'
var animalScientific = 'None'
var animalClass = ""
var animalYoutube = 'None'
var animalPicture = 'None'  
var animalThumbnail = 'None'


    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"Animals.xml");
	var xmltext = file.read().text;
	var doc = Ti.XML.parseString(xmltext);
	var elements = doc.getElementsByTagName("AnimalName");  

    for (var i=0;i<elements.length;i++) {             
 		var animalLocation = doc.getElementsByTagName("Loc").item(i).text;
        animalLocation = animalLocation.replace(/(\r\n|\n|\r)/gm, "");              
	
		if (selectedAnimalExpression.test(animalLocation)){

        animalName = doc.getElementsByTagName("AnimalName").item(i).text;
        animalName = animalName.replace(/(\r\n|\n|\r)/gm, ""); 
        animalDesc = doc.getElementsByTagName("Description").item(i).text;
        animalDesc = animalDesc.replace(/(\r\n|\n|\r)/gm, "");
        animalScientific = doc.getElementsByTagName("ScientificName").item(i).text;
        animalScientific = animalScientific.replace(/(\r\n|\n|\r)/gm, "");  
        animalClass = doc.getElementsByTagName("Class").item(i).text;
        animalClass = animalClass.replace(/(\r\n|\n|\r)/gm, ""); 
        animalYoutube = doc.getElementsByTagName("YoutubeURL").item(i).text;
        animalYoutube = animalYoutube.replace(/(\r\n|\n|\r)/gm, "");        
        animalPicture = doc.getElementsByTagName("PictureURL").item(i).text;
        animalPicture = animalPicture.replace(/(\r\n|\n|\r)/gm, "");        
        animalThumbnail = doc.getElementsByTagName("ThumbnailURL").item(i).text;
        animalThumbnail = animalThumbnail.replace(/(\r\n|\n|\r)/gm, ""); 
   		}
	};

			var winAnimalLabel = Titanium.UI.createLabel({
				textWeight:'strong',
				text: animalName,
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
			win.add(winAnimalLabel);
			
			if (animalScientific ==='None')
			{}
			else {var winAnimalScientific = Ti.UI.createLabel({
				text: animalScientific,
				textAlign: pWidth*.1,
				color: 'white',
			    font: {
			        fontSize: pWidth/16,
			        fontWeight: 'normal'
			    },
			    width: 'auto',
			    textAlign: 'center',
			    left:pWidth*.02,
			    top:pHeight*.52,
			    height: pHeight*.1,
			})
			win.add(winAnimalScientific);
			}
			
			if (animalPicture ==='None')
				//don't display a picture
				{}
				//otherwise create and display an imageView
				else{ var image = Titanium.UI.createImageView({
				image:animalPicture,
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
				
			var splitresult = animalDesc.split("$$$");		
			var numberofSentences = animalDesc.split("$$$").length;
			
			var desc = '';
			for (var i=0;i<numberofSentences;i++) {
			    desc = desc + splitresult[i] + '\n';	
			}
			
				var winAnimalDescription = Ti.UI.createLabel({
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
						
					scrollView.add(winAnimalDescription);
					win.add(scrollView);
					
			if (animalYoutube ==='None')
			{}
			else{
			var linkE = Titanium.UI.createLabel({
			        text: "Click for video",
			        color: 'blue',
			        font: {
			            fontSize: pWidth/20,
			            fontWeight: 'normal'
			        },
			        width:'auto',
			        textAlign: 'left',
			        top:pHeight*.52,
			        height: pHeight*.1,
			        left:pWidth*.65
			});
			 
			linkE.addEventListener('click',function(e)
			{
			     var w = Ti.UI.createWindow();
			     w.addEventListener('close', function(){w = null;});
				 w.addEventListener('android:back', function() {  
			           w.close();             
			            });          
			     w.open(Titanium.Platform.openURL(animalYoutube));
			});
			win.add(linkE);
			}

function schedulegohome(e){
win.close(); winSchedule = null	
}