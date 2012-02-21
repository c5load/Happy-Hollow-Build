var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;

var win = Titanium.UI.currentWindow;

var TitleBar=Titanium.UI.createImageView({
	image:'/Schedule/schedulebackground.png',
    width: pWidth,
    left: '0dp',
    top: '0dp',
    height: pHeight*.1
});

var lblTitle=Titanium.UI.createLabel({
	text:"Schedule",
	textAlign:'center',
	color:'white',
	font:{
		fontSize:'30dp',
		fontWeight:'bold',
	},
	width: pWidth,
	left:'0dp', 
    top: '0dp',
    height: pHeight*.1
});

var buttonHome = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/Schedule/homeresting.png',
	backgroundSelectedImage:'/Schedule/homeselected.png',
	top: pHeight*.02, 
	left:pWidth*.04,
	width:pWidth*.19,
	height:pHeight*.07,});
buttonHome.addEventListener('click', function()
{var winHomeScreen=Titanium.UI.createWindow({
    title:'Happy Hollow Park and Zoo',
    backgroundColor:'#FFFFFF',
    url: '..app.js',
    navBarHidden:true,
    fullscreen : true,  
    navBarHidden: true
});
	winHomeScreen.open();});

// create table view data object
var data = [
	{title:'Park Hours', hasChild:true, height:'80dp', test:'/parkhours.js'},
	{title:'Today\'s Rides', hasChild:true, height:'80dp', test:'/rideschedule.js'},
	{title:'Puppet Shows', hasChild:true, height:'80dp', test:'/puppetshows.js'},
	{title:'Events', hasChild:true, height:'80dp', test:'/events.js'},
	{title:'Zoo in the Hollow', hasChild:true, height:'80dp', test:'/zoohollow.js'},
	{title:'Zoo on the Hill', hasChild:true, height:'80dp', test:'/zoohill.js'},
	
];


// add iphone specific tests
if (Titanium.Platform.name == 'iPhone OS')
{
	data.push({title:'Button Bar', hasChild:true, test:'../examples/buttonbar.js'});
	data.push({title:'Tabbed Bar', hasChild:true, test:'../examples/tabbedbar.js'});
	data.push({title:'System Buttons', hasChild:true, test:'../examples/system_buttons.js'});
	data.push({title:'Toolbar', hasChild:true, test:'../examples/toolbar.js'});
}
/*
data.push({title:'Picker', hasChild:true, test:'../examples/picker.js'});
*/
// create table view
var tableview = Titanium.UI.createTableView({
	top:pHeight*.1,
	rowHeight: 'auto',
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});

// add table view to the window
win.add(TitleBar);
win.add(lblTitle);
win.add(TitleBar);
win.add(lblTitle);
win.add(tableview);
win.add(buttonHome);