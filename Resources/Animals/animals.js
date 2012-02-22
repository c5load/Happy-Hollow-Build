var yourwindow = Titanium.UI.currentWindow;
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/Animals/animalsbackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
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
    height: pHeight*.1
});

var buttonHome = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Animals/homeresting.png',
	backgroundSelectedImage:'/Animals/homeselected.png',
	top: pHeight*.02, 
	left:pWidth*.04,
	width:pWidth*.19,
	height:pHeight*.07,});
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
	width:pWidth*.17,
	height:pHeight*.07,});
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



    var data = [];
    
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'Animals.xml');
	var xmltext = file.read().text;
	var doc = Ti.XML.parseString(xmltext);
	var elements = doc.getElementsByTagName("AnimalName");

    for (var i=0;i<elements.length;i++) {
        var row = Ti.UI.createTableViewRow({
        	hasChild:true,
        	height:'80dp',
        	backgroundImage: '../backgroundresting.png',
        	selectedBackgroundImage: '/Animals/animalsbackground.png'
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
       top:pHeight*.1,
       height:'auto',
    });
    tableview.setData(data);
    Titanium.UI.currentWindow.add(tableview); 
    tableview.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({
			url:'specificanimal.js', 
			navBarHidden:true, 
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


win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);


//declare the http client object





