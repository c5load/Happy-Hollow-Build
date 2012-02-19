/**
 * @author Myers
 */

var win = Ti.UI.currentWindow;

var winFacility = Ti.UI.createLabel({
	text: win.facility,
	textAlign: 'left',
	color: '#FFFFFF',
    font: {
        fontSize: '30dp',
        color:'#000000',
        fontWeight: 'normal'
    },
    width: 'auto',
    textAlign: 'left',
    left: '0dp',
    top: '10dp',
    height: 'auto'
})


var winFacilityDescription = Ti.UI.createLabel({
	text: win.facilityDesc,
	textAlign: 'left',
	color: 'white',
    font: {
        fontSize: '30dp',
        color:'#000000',
        fontWeight: 'normal'
    },
    width: 'auto',
    textAlign: 'left',
    left: '0dp',
    top: '500dp',
    height: 'auto'
})
if (win.pictureURL ==='None')
	//don't display a picture
	{}
	//otherwise create and display an imageView
	else{ var image = Titanium.UI.createImageView({
	url:win.pictureURL,
	width:'250dp',
	height:'250dp',
	top:'0dp',
	right:'0dp'});
	
	win.add(image);
	};
var winFacilityDescriptionLabel = Ti.UI.createLabel({
	text: win.facilityDesc,
	color: '#FFFFFF',
    font: {
        fontSize: '30dp',
        fontWeight: 'normal'
    },
    width: 'auto',
    textAlign: 'center',
    top: '100dp',
    height: 'auto'
});


win.add(winFacility);
win.add(winFacilityDescriptionLabel);
