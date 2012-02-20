var yourwindow = Titanium.UI.currentWindow;
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/animalsrest.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: '50dp'
});

var lblTitle=Titanium.UI.createLabel({
	text:"Animals",
	textAlign:'center', 
	color:'white',
	font:{
		fontSize:'25dp',
		fontWeight:'bold',
	},
	width: pWidth, 
    top: '0dp',
    left:'0dp',    
    height: '50dp'
});

var buttonHome = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Animals/homeresting.png',
	backgroundSelectedImage:'/Animals/homeselected.png',
	top: pHeight*.02, 
	left:pWidth*.05,
	width:'60dp',
	height:'30dp',});
buttonHome.addEventListener('click', function()
{var winHomeScreen=Titanium.UI.createWindow({
    title:'Happy Hollow Park and Zoo',
    backgroundColor:'#FFFFFF',
    url: '/app.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winHomeScreen.open();});

var buttonSchedule = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Animals/scheduleresting.png',
	backgroundSelectedImage:'/Animals/scheduleselected.png',
	top:pHeight*.02,
	left:pWidth*.78,
	width:'60dp',
	height:'30dp',});
buttonHome.addEventListener('click', function()
{var winSchedule=Titanium.UI.createWindow({
    title:'Schedule',
    backgroundColor:'#FFFFFF',
    url: '/Schedule/schedule2.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winSchedule.open();});


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

       
      
        var animalLabel = Ti.UI.createLabel({
        	text: desc,
        	color: '#000000',
        	font:{fontSize:'20dp'},
        	height: '60dp',
        	textAlign:'left',
        	left:'100dp'
        });
        var animalImage = Ti.UI.createImageView({
        	url: animalPicture,
        	height: '60dp',
        	width: '60dp',
        	left: '0dp'
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
        data.push(row);}
     
    var tableview = Titanium.UI.createTableView({
       data:data,
       top:'50dp',
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

win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
xhr.open('GET','http://markmyers.me/hhpz/xml/Animals.xml');
xhr.send();

//declare the http client object



