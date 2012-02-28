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
	backgroundImage:'/Facilities/scheduleresting.png',
	backgroundSelectedImage:'/Facilities/scheduleselected.png',
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
});
	winSchedule.open();});

var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
    var data = [];
    var doc = this.responseXML.documentElement;
    var elements = doc.getElementsByTagName("FacilityName");
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
        facilityLocation = doc.getElementsByTagName("Loc").item(i).text;
        facilityPicture = doc.getElementsByTagName("PictureURL").item(i).text;
		facilityThumbnail = doc.getElementsByTagName("ThumbnailURL").item(i).text;
       
        var facilityLabel = Ti.UI.createLabel({
        	image:'arrowrest.png',
        	text: desc,
        	color:'#000000',
        	font:{fontSize:'20dp'},
        	height:pHeight*.13,
        	textAlign:'left',
        	left:pWidth*.23  
        });
        
            var facilityImage = Ti.UI.createImageView({
        	url: facilityThumbnail,
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
       height:'auto',
    });
    tableview.setData(data);
    Titanium.UI.currentWindow.add(tableview); 
    tableview.addEventListener('click',function(e)
		{
			var w = Ti.UI.createWindow({
   			backgroundcolor:'#FFFFFF',
			url:'specificFacility.js', 
			navBarHidden:true,
   			title:'',
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
			w.facility = e.rowData.item;
			w.facilityDesc = e.rowData.item2;
			w.location = e.rowData.item3;
			w.pictureURL = e.rowData.item4;
			
			w.open({fullscreen:true});
		});

};

win.add(TitleBar);
win.add(lblTitle);
win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);
win.add(buttonSchedule);
xhr.open('GET','http://hhpz.org/mobile/xml/facilities.xml');
xhr.send();//declare the http client object