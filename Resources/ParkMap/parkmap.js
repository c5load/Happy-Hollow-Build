


/*
 * 
 OLD CODE HERE
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//<property name="ti.android.fastdev" type="bool">false</property>
// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//set scale for map
var scale = Ti.UI.create2DMatrix().scale(1); 

//create home button

//
// Main Map
//
//var winMain = Titanium.UI.createWindow({  
//   title:'Main',
//	backgroundColor:'#fff'
//});

//var tabMain = Titanium.UI.createTab({  
//   title:'Main',
//    window:winMain
//});

//var mapMain=Ti.UI.createWebView({ url:'all.png', transform:scale, size:{ width:800, height:900 }, top:0, scalesPageToFit:true});
//winMain.add(mapMain);


//Animal Map
var winAnimals = Titanium.UI.createWindow({  
    title:'Animals',
	backgroundcolor:'#FFFFFF'  
});

var tabAnimals = Titanium.UI.createTab({ 
	icon:'/animalsicon.png', 
    title:'Animals', 
    window:winAnimals
});

var mapAnimals=Ti.UI.createWebView({ url:'animals.png', transform:scale, size:{ width:800, height:900 }, top:0, scalesPageToFit:true});
winAnimals.add(mapAnimals);


// Attraction Map
var winAttractions = Titanium.UI.createWindow({  
    title:'Attractions',
	backgroundcolor:'#FFFFFF'  
});

var tabAttractions = Titanium.UI.createTab({ 
	icon:'/ridesattractionsicon.png', 
    title:'Attractions', 
    window:winAttractions
});

var mapAttractions=Ti.UI.createWebView({ url:'ridesattractions.png', transform:scale, size:{ width:800, height:900 }, top:0, scalesPageToFit:true});
winAttractions.add(mapAttractions);

// Facilites Map
var winFacilities = Titanium.UI.createWindow({  
    title:'Facilities',
	backgroundcolor:'#FFFFFF'  
});

var tabFacilities = Titanium.UI.createTab({
	icon:'/facilitiesicon.png',  
    title:'Facilities',
    window:winFacilities
});

var mapFacilities=Ti.UI.createWebView({ url:'facilities.png', transform:scale, size:{ width:800, height:900 }, top:0, scalesPageToFit:true});
winFacilities.add(mapFacilities);

// Green Tour Map
var winGreenTour = Titanium.UI.createWindow({  
    title:'Green Tour',
	backgroundcolor:'#FFFFFF'  
});

var tabGreenTour = Titanium.UI.createTab({
	icon:'/greentouricon.png',
    title:'Green Tour',
    window:winGreenTour
});

var mapGreenTour=Ti.UI.createWebView({ url:'greentour.png', transform:scale, size:{ width:800, height:900 }, top:0, scalesPageToFit:true});
winGreenTour.add(mapGreenTour);


//
//  add tabs
//
//tabGroup.addTab(tabMain);  
tabGroup.addTab(tabAnimals);
tabGroup.addTab(tabAttractions);
tabGroup.addTab(tabFacilities);
tabGroup.addTab(tabGreenTour)  


// open tab group
tabGroup.open();
*/
