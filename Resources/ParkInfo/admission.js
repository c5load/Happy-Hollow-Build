Titanium.UI.setBackgroundImage('background2.png');

var win = Titanium.UI.currentWindow;
var logo = Titanium.UI.createImageView({url:'../logo.png'});
logo.show;
win.add(logo);

var labelAdmission = Titanium.UI.createLabel({
	color:'#FFF',
	text:'Under Construction',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top: 50
});

win.add(labelAdmission)
