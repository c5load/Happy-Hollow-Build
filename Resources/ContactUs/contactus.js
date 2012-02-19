Titanium.UI.setBackgroundImage('background2.png');

var win = Titanium.UI.currentWindow;

var address = "1300 Senter Road  San Jose, CA 95112";


var lblTitleAddress = Titanium.UI.createLabel({
    text: "Address:",
    color: 'black',
    font: {
        fontSize: '20dp',
        fontWeight: 'bold'
    },
    width: 'auto',
    left: '10dp',
    top: '20dp',
    height: 'auto'
});


var lblAddress = Titanium.UI.createLabel({
    text: "1300 Senter Road, San Jose, CA 95112",
    color: 'black',
    font: {
        fontSize: '20dp',
        fontWeight: 'normal'
    },
    width: 'auto',
    left: '10dp',
    top: '50dp',
    height: 'auto'
});

var lblTitlePhone = Titanium.UI.createLabel({
    text: "Main Office Number:",
    color: 'black',
    font: {
        fontSize: '20dp',
        fontWeight: 'bold'
    },
    width: 'auto',
    left: '10dp',
    top: '90dp',
    height: 'auto'
});


var lblPhone = Titanium.UI.createLabel({
    text: "Main Office:(408)794-6400",
    color: 'black',
    font: {
        fontSize: '20dp',
        fontWeight: 'normal'
    },
    width: 'auto',
    left: '10dp',
    top: '120dp',
    height: 'auto'
});


var buttonCall = Titanium.UI.createButton({
	color:'#fff',
	backgroundImage:'/contactusrest.png',
	backgroundSelectedImage:'/contactusselect.png',
	top:'120dp',
	width:'60dp',
	height:'30dp',
	left: '280dp',
	font:{fontSize:'20dp',fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Call'});	


buttonCall.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:4087946400');
});

win.add(lblTitleAddress);
win.add(lblAddress);
win.add(lblTitlePhone);
win.add(lblPhone);
win.add(buttonCall);
