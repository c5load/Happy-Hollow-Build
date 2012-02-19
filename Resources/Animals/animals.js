var yourwindow = Titanium.UI.currentWindow;

// create tab group
var tabGroup = Ti.UI.createTabGroup();

//create the window
var win1 = Titanium.UI.createWindow({
	backgroundColor:'#FFFFFF',
	width: 'auto',
	height: 'auto',
	top: '0dp',
	left: '0dp',
	title: 'Animals',
});
/*
var scrollView = Titanium.UI.createScrollView({ 
	contentWidth:'auto', 
	contentHeight:'auto', 
	top:0, 
	showVerticalScrollIndicator:true, 
	showHorizontalScrollIndicator:true }); 
	
var view = Ti.UI.createView({ 
	backgroundColor:'#336699', 
	borderRadius:10, 
	width:300, 
	height:2000, 
	top:10 }); 

	scrollView.add(view); 
	win1.add(scrollView);
	
	*/
//create the view, this will hold all of our UI controls 
//note the height of this view is the height of the window minus 
//134px for the status bar and padding and adjusted for navbar
//var view = Titanium.UI.createView({
//	width: '300dp',
//	height: win1.height - '134dp',
//	left: '10dp',
//	top: '10dp',
//	backgroundColor: '#fff',
//	borderRadius: '5dp'
//});




//add the view to our win1dow
//win1.add(view);

//add the first tab and attach our window object (win1) to it
var tab1 = Ti.UI.createTab({  
    icon:'mammal.png',
    title:'Mammals',
	window: win1
});

// now add the tabs to our tabGroup object
tabGroup.addTab(tab1);  


var xhr = Titanium.Network.createHTTPClient();

if(Titanium.Network.networkType == Titanium.Network.NETWORK_NONE){
     var alertDialog = Titanium.UI.createAlertDialog({
              title: 'WARNING!',
              message: 'Your device is not online.',
              buttonNames: ['OK']
            });
            alertDialog.show();
}
xhr.onload = function()
{
    var data = [];
    var doc = this.responseXML.documentElement;
    var elements = doc.getElementsByTagName("AnimalName");
    for (var i=0;i<elements.length;i++) {
        var row = Ti.UI.createTableViewRow({
        	hasChild:true,
        	height:'80dp',
        	backgroundImage: '../backgroundresting.png',
        	selectedBackgroundImage: '../animalsrest.png'
        });
        row.title = elements.item(i).getAttribute("AnimalName");
        desc = doc.getElementsByTagName("AnimalName").item(i).text;
        animalDesc = doc.getElementsByTagName("Description").item(i).text;
        animalScientific = doc.getElementsByTagName("ScientificName").item(i).text;
        animalClass = doc.getElementsByTagName("Class").item(i).text;
        animalLocation = doc.getElementsByTagName("Location").item(i).text;
        animalYoutube = doc.getElementsByTagName("YoutubeURL").item(i).text;
        animalPicture = doc.getElementsByTagName("PictureURL").item(i).text;

       
      
        var mammalLabel = Ti.UI.createLabel({
        	text: desc,
        	color: '#000000',
        	font:{fontSize:'20dp'},
        	height: '60dp',
        	textAlign:'left',
        	left:'100dp'
        });
        var mammalImage = Ti.UI.createImageView({
        	url: animalPicture,
        	height: '60dp',
        	width: '60dp',
        	left: '0dp'
        });
        row.add(mammalLabel);
        row.add(mammalImage);
        row.item = desc;
        row.item2 = animalDesc;
        row.item3 = animalScientific;
        row.item4 = animalClass;
        row.item5 = animalLocation;
        row.item6 = animalYoutube;
        row.item7 = animalPicture;
        data.push(row);}
     
    var tableview = Titanium.UI.createTableView({
       data:data,
       height:'auto',
    });
    tableview.setData(data);
    Titanium.UI.currentWindow.add(tableview); 
    tableview.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({
			url:'specificanimal.js', 
   			title:'',
   			backgroundcolor:'black',
   			fullscreen:true });
			var b = Titanium.UI.createButton({
				title:'Close',
				style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			});
			w.setLeftNavButton(b);
			b.addEventListener('click',function()
			{
				w.close();
			});
			w.animal = e.rowData.item;
			w.animalDesc = e.rowData.item2;
			w.scientific = e.rowData.item3;
			w.classtype = e.rowData.item4;
			w.location = e.rowData.item5;
			w.youTube = e.rowData.item6;
			w.pictureURL = e.rowData.item7;
			
			w.open({fullscreen:true});
		});
};

xhr.open('GET','http://markmyers.me/hhpz/xml/Animals.xml');
xhr.send();//declare the http client object
//finally, open the tabgroup to launch the app
tabGroup.open();
