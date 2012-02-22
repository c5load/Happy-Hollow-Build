/*


Ti.include("version.js");

Ti.Geolocation.preferredProvider = "gps";

if (isIPhone3_2_Plus())
{
	//NOTE: starting in 3.2+, you'll need to set the applications
	//purpose property for using Location services on iPhone
	Ti.Geolocation.purpose = "GPS demo";
}
var currentLocation = Titanium.UI.createLabel({
	text:'Current Location not fired',
	font:{fontSize:11},
	color:'#444',
	top:130,
	left:10,
	height:15,
	width:300
});

function translateErrorCode(code) {
	if (code == null) {
		return null;
	}
	switch (code) {
		case Ti.Geolocation.ERROR_LOCATION_UNKNOWN:
			return "Location unknown";
		case Ti.Geolocation.ERROR_DENIED:
			return "Access denied";
		case Ti.Geolocation.ERROR_NETWORK:
			return "Network error";
		case Ti.Geolocation.ERROR_HEADING_FAILURE:
			return "Failure to detect heading";
		case Ti.Geolocation.ERROR_REGION_MONITORING_DENIED:
			return "Region monitoring access denied";
		case Ti.Geolocation.ERROR_REGION_MONITORING_FAILURE:
			return "Region monitoring access failure";
		case Ti.Geolocation.ERROR_REGION_MONITORING_DELAYED:
			return "Region monitoring setup delayed";
	}
}


var locationAdded = false;

//
//  SHOW CUSTOM ALERT IF DEVICE HAS GEO TURNED OFF
//
if (Titanium.Geolocation.locationServicesEnabled === false)
{
	Titanium.UI.createAlertDialog({title:'Happy Hollow', message:'Your device has geolocation turned off - please turn it on.'}).show();
}
else
{
	if (Titanium.Platform.name != 'android') {
		var authorization = Titanium.Geolocation.locationServicesAuthorization;
		Ti.API.info('Authorization: '+authorization);
		if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
			Ti.UI.createAlertDialog({
				title:'Happy Hollow',
				message:'You have disallowed Happy Hollow from running geolocation services.'
			}).show();
		}
		else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
			Ti.UI.createAlertDialog({
				title:'Happy Hollow',
				message:'Your system has disallowed Happy Hollow from running geolocation services.'
			}).show();
		}
	}


var locationCallback = function(e)
{
	if (!e.success || e.error)
	{
		updatedLocation.text = 'error:' + JSON.stringify(e.error);
		updatedLatitude.text = '';
		updatedLocationAccuracy.text = '';
		updatedLocationTime.text = '';
		Ti.API.info("Code translation: "+translateErrorCode(e.code));
		return;
	}

	var longitude = e.coords.longitude;
	var latitude = e.coords.latitude;

	var xPixel =((720213.809* latitude)+(1147131.61*longitude)+112913088);
	var yPixel =((-1589582.59* latitude)+(536408.247*longitude)+124701993);
	//Titanium.Geolocation.distanceFilter = 100; //changed after first location event

	if ((xPixel<0)||(xPixel>5616)||(yPixel<0)||(yPixel>3712))
	//IF NOT AT HHPZ
	{
		var alertDialog = Titanium.UI.createAlertDialog({
		title: 'You don\'t appear to be at HHPZ',
		message: 'Locate Me will be disabled',
		buttonNames: ['OK'],
    		cancel: 1
			});
 
			alertDialog.addEventListener('click',function(e){
		if (e.index == 0) {
    //code to execute when the user clicked Yes.
		}
		})
		alertDialog.show();
		
		var alertDialog = Titanium.UI.createAlertDialog({
		title: 'You\'re not at HHPZ', 
		message: 'X pixel ' + xPixel,
		buttonNames: ['OK'], 
    		cancel: 1
		});
 
			alertDialog.addEventListener('click',function(e){
		if (e.index == 0) {
    //code to execute when the user clicked Yes.
		}
		})
		alertDialog.show();
	}
	//IF THE USER IS AT HHPZ
	else 
	{
		var alertDialog = Titanium.UI.createAlertDialog({
		title: 'Holy crap you\'re at Happy Hollow!', 
		message: 'X Pixel ' + xPixel,
		buttonNames: ['OK'], 
    		cancel: 1
		});
 
			alertDialog.addEventListener('click',function(e){
		if (e.index == 0) {
    //code to execute when the user clicked Yes.
		}
		})
		alertDialog.show();
		
		var alertDialog = Titanium.UI.createAlertDialog({
		title: 'Holy crap you\'re at Happy Hollow!', 
		message: 'Y Pixel ' + yPixel,
		buttonNames: ['OK'], 
    		cancel: 1
		});
 
			alertDialog.addEventListener('click',function(e){
		if (e.index == 0) {
    //code to execute when the user clicked Yes.
		}
		})
		alertDialog.show();
		
		
	
	Titanium.API.info('geo - location updated: ' + ' long ' + longitude + ' lat ' + latitude);
	};
	Titanium.Geolocation.addEventListener('location', locationCallback);
	locationAdded = true;

};




if (Titanium.Platform.name == 'android')
{
	//  as the destroy handler will remove the listener, only set the pause handler to remove if you need battery savings
	Ti.Android.currentActivity.addEventListener('pause', function(e) {
		Ti.API.info("pause event received");
		
		if (locationAdded) {
			Ti.API.info("removing location callback on pause");
			Titanium.Geolocation.removeEventListener('location', locationCallback);
			locationAdded = false;
		}
	});
	Ti.Android.currentActivity.addEventListener('destroy', function(e) {
		Ti.API.info("destroy event received");
		
		if (locationAdded) {
			Ti.API.info("removing location callback on destroy");
			Titanium.Geolocation.removeEventListener('location', locationCallback);
			locationAdded = false;
		}
	});
};
};
*/


//set scale for map
var win = Ti.UI.currentWindow;
var scale = Ti.UI.create2DMatrix().scale(1); 
var view = Ti.UI.createScrollView({
    layout:'horizontal',
    left:0,right:0,
    top:0,bottom:0,
    contentHeight:'auto',
    showVerticalScrollIndicator:false
});
var view2 = Ti.UI.createScrollView({
    layout:'vertical',
    left:0,right:0,
    top:0,bottom:0,
    contentHeight:'auto',
    showVerticalScrollIndicator:false
});
win.add(view);
win.add(view2);

var imageView = Ti.UI.createImageView({
image:'/parkmap.png',
width:'auto',
height:'auto',
top:2,
left:2
});

win.add(imageView);
//
