var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'schedulebackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});

var lblTitle=Titanium.UI.createLabel({
	text:"Ride Schedule",
	textAlign:'center',
	color:'white',
	font:{
		fontSize:'20dp',
		fontWeight:'bold',
	},
	width: pWidth,
	left:'0dp', 
    top: '0dp',
    height: pHeight*.1
});

var buttonHome = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'homeresting.png',
	backgroundSelectedImage:'homeselected.png',
	top: pHeight*.02, 
	left:pWidth*.04,
	width:pWidth*.19,
	height:pHeight*.07,});
buttonHome.addEventListener('click', function()
{win.close();
	});
	
var data = [];

	try
	{
		var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'RideSchedule.xml');
		var xmltext = file.read().text;
		var doc = Ti.XML.parseString(xmltext);
		var elements = doc.getElementsByTagName("title");
		
		for (var i=0;i<elements.length;i++) {
				
				var row = Ti.UI.createTableViewRow({
        				hasChild:true,
        				height:pHeight*.13,
        				backgroundImage: '../backgroundresting.png',
//        				selectedBackgroundImage: '/Animals/animalsbackground.png'
        			});
    			row.title = elements.item(i).getAttribute("title");
    			var hours = doc.getElementsByTagName("hours");
    			
				var hour = hours.item(i).text;			
				var title = elements.item(i).text;
																				
				var label = Ti.UI.createLabel({
					text:title,
					color:'#000000',
					font:{fontSize:'20dp', fontColor:'black',fontFamily:'Helvetica Neue'},
					left:pWidth*.2,
					top:'0dp',
					height:pHeight*.13,		
				});
				
				row.add(label);
				row.item = title;
				row.item2= hour;		
				data.push(row);				
		}
		
	var tableview = Titanium.UI.createTableView({
       data:data,
       top:pHeight*.1,
       height:pHeight*.9,
    });
    tableview.setData(data);
    Titanium.UI.currentWindow.add(tableview); 
    tableview.addEventListener('click',function(e)
		{
			var alertDialog = Titanium.UI.createAlertDialog({
    		title: e.row.item,
    		message: e.row.item2,
    		buttonName: ['OK']
			});
			alertDialog.show();
		});


	}
	catch(E)
	{
		alert(E);
	}


win.add(TitleBar);
win.add(lblTitle);
win.add(buttonHome);

