// create table view data object
var data = [
	{title:'Park Map', height:'70dp', font:{fontSize:'30dp'}, backgroundimage:'parkmaprest.png', hasChild:true, test:'/ParkMap/parkmap.js'},
	{title:'Animals', height:'70dp', font:{fontSize:'30dp'}, backgroundimage:'animalsrest,png', hasChild:true, test:'/Animals/animals.js'},
	{title:'Rides & Attractions', height:'70dp', font:{fontSize:'30dp'}, backgroundimage:'ridesattractionsrest.png', hasChild:true, test:'/Attractions/attractions.js'},
	{title:'Green Tour', height:'70dp', font:{fontSize:'30dp'}, backgroundimage:'greentourrest,png', hasChild:true},
	{title:'Park Info & Facilities', height:'70dp', font:{fontSize:'30dp'}, backgroundimage:'facilitiesrest.png', hasChild:true, test:'/Facilities/facilities.js'},
	{title:'Schedule', height:'70dp', font:{fontSize:'30dp'}, backgroundimage:'schedulerest.png', hasChild:true, test:'/Schedule/schedule.js'},
	{title:'Contact Us', height:'70dp', font:{fontSize:'30dp'}, backgroundimage:'contactusrest.png', hasChild:true, test:'/ContactUs/contactus.js'},
//	{title:'Donate Now', hasChild:true, test:'../examples/label.js'},
//	{title:'Facebook', hasChild:true, test:'../examples/searchbar.js'},
	
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
Titanium.UI.currentWindow.add(tableview);
