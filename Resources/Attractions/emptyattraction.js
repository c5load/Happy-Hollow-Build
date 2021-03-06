var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/Attractions/ridesattractionsbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});
win.add(TitleBar);

var lblTitle=Titanium.UI.createLabel({
	text:"Rides & Attractions",
	textAlign:'center', 
	color:'white',
	font:{
		fontSize:pWidth/17,
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
	backgroundImage:'/Attractions/homeresting.png',
	backgroundSelectedImage:'/Attractions/homeselected.png',
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
	backgroundImage:'/Attractions/scheduleresting.png',
	backgroundSelectedImage:'/Attractions/scheduleselected.png',
	top:pHeight*.02,
	left:pWidth*.78,
	width:pWidth*.17,
	height:pHeight*.07,});
buttonSchedule.addEventListener('click', function()
{
	var winSchedule = Titanium.UI.createWindow({
    title:'Schedule',
    backgroundColor:'#FFFFFF',
    url: '/Schedule/rideschedule.js',
    fullscreen : true,  
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
	backgroundImage:'ridesattractionsbackground.png',	
    width: pWidth,
	top:pHeight*.5,
	height:pHeight*.1,
})
win.add(winBar);

var selectedAttraction=win.name.replace(/(\r\n|\n|\r)/gm, "");
var selectedAttractionTest=".*" + selectedAttraction + ".*";
var selectedAttractionExpression= new RegExp(selectedAttractionTest);

var attractionName = ""
var attractionDesc = 'Attraction not found.'
var attractionYoutube = 'None'
var attractionPicture = 'None'  
var attractionThumbnail = 'None'

    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"Attractions.xml");
	var xmltext = file.read().text;
	var doc = Ti.XML.parseString(xmltext);
	var elements = doc.getElementsByTagName("AttractionName");  

    for (var i=0;i<elements.length;i++) {
 		var attractionLocation = doc.getElementsByTagName("Loc").item(i).text;
        attractionLocation = attractionLocation.replace(/(\r\n|\n|\r)/gm, "");      
	
		if (selectedAttractionExpression.test(attractionLocation)){
			
        attractionName = doc.getElementsByTagName("AttractionName").item(i).text;
        attractionName = attractionName.replace(/(\r\n|\n|\r)/gm, ""); 
        attractionDesc = doc.getElementsByTagName("Description").item(i).text;
        attractionDesc = attractionDesc.replace(/(\r\n|\n|\r)/gm, "");                        
        attractionYoutube = doc.getElementsByTagName("YoutubeURL").item(i).text;
        attractionYoutube = attractionYoutube.replace(/(\r\n|\n|\r)/gm, "");        
        attractionPicture = doc.getElementsByTagName("PictureURL").item(i).text;
        attractionPicture = attractionPicture.replace(/(\r\n|\n|\r)/gm, "");        
        attractionThumbnail = doc.getElementsByTagName("ThumbnailURL").item(i).text;
        attractionThumbnail = attractionThumbnail.replace(/(\r\n|\n|\r)/gm, ""); 
    		}
	};
	       
			var winAttractionLabel = Titanium.UI.createLabel({
				textWeight:'strong',
				text: attractionName,
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
			win.add(winAttractionLabel);
			
			if (attractionPicture ==='None')
				//don't display a picture
				{}
				//otherwise create and display an imageView
				else{ var image = Titanium.UI.createImageView({
				image:attractionPicture,
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
				
			var splitresult = attractionDesc.split("$$$");		
			var numberofSentences = attractionDesc.split("$$$").length;
			
			var desc = '';
			for (var i=0;i<numberofSentences;i++) {
			    desc = desc + splitresult[i] + '\n';	
			}
			
				var winAttractionDescription = Ti.UI.createLabel({
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
			
					scrollView.add(winAttractionDescription);
					win.add(scrollView);
						
			if (attractionYoutube ==='None')
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
			     w.open(Titanium.Platform.openURL(attractionYoutube));
			});
			win.add(linkE);
			}

function schedulegohome(e){
win.close(); winSchedule = null	
}