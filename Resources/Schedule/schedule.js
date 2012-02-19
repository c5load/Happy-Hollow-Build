Titanium.UI.setBackgroundImage('background2.png');
var win = Titanium.UI.currentWindow;


var schedule=Ti.UI.createWebView({ url:'http://www.hhpz.org/templates/hhpz/kioskSource/panel.html', scalesPageToFit:true});
win.add(schedule)

//var labelSchedule = Titanium.UI.createLabel({
//	color:'#FFF',
//	text:'Under Construction',
//	font:{fontSize:20,fontFamily:'Helvetica Neue'},
//	textAlign:'center',
//	width:'auto',
//	top: 50
//});

//win.add(labelSchedule);