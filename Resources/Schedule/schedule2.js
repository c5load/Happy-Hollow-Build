// create table view data object
var data = [
	{title:'Park Hours', hasChild:true, test:'/parkhours.js'},
	{title:'Today\'s Rides', hasChild:true, test:'/rideschedule.js'},
	{title:'Puppet Shows', hasChild:true, test:'/puppetshows.js'},
	{title:'Events', hasChild:true, test:'/events.js'},
	{title:'Zoo in the Hollow', hasChild:true, test:'/zoohollow.js'},
	{title:'Zoo on the Hill', hasChild:true, test:'/zoohill.js'},
	
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
