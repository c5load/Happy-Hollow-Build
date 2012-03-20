// to fit in a 320-wide space 

var win = Ti.UI.currentWindow;

var title = win.title;

Ti.UI.createAlertDialog({title:'Application Error', message:title}).show();
var winAnimalDescLabel = Ti.UI.createLabel({
	
	text: title,
	color: '#000000',
    font: {
        fontSize: '20dp',
        fontWeight: 'normal'
    },
    width: 'auto',
    textAlign: 'center',
    top: 100,
    height: 'auto'
});

win.add(winAnimalDescLabel);
var cellWidth = 130;
var cellHeight = 70;
var xSpacer = 5;
var ySpacer = 5;
var xGrid = 1;
var yGrid = 7;
 
var tableData = [];
 
var colorSet = [
                "#D44646",
                "#46D463",
                "#46D4BE",
                "#C2D446",
                "#D446D5",
                "#4575D5",
                "#E39127",
                "#879181",
                "#E291D4"
              ];
 
var colorSetIndex = 0;
var cellIndex = 10;
 
for (var y=0; y<yGrid; y++){
    var thisRow = Ti.UI.createTableViewRow({
        className: "grid",
        layout: "horizontal",
        height: cellHeight+(2*ySpacer),
        selectedBackgroundColor:"red"
    });
    for (var x=0; x<xGrid; x++){
        var thisView = Ti.UI.createView({
            objName:"grid-view",
            objIndex:cellIndex.toString(),
            backgroundColor: colorSet[colorSetIndex],
            left: ySpacer,
            height: cellHeight,
            width: cellWidth
        });
 		var hour = cellIndex.toString();
 		
 		if (parseInt(hour) > 12)
  		{
  			hour = hour-12 + 'PM'
  		}
		else if (parseInt(hour) == 12)
  		{
  			hour = hour + 'PM'
  		}
		else
  		{
  			hour = hour + 'AM'
  		}
 		
 			
        var thisLabel = Ti.UI.createLabel({
            color:"white",
            font:{fontSize:48,fontWeight:'bold'},
            text:hour,
            touchEnabled:false
        });
        thisView.add(thisLabel);
        thisRow.add(thisView);
        cellIndex++;
        colorSetIndex++;
 
        if( colorSetIndex === colorSet.length ){
            colorSetIndex = 0;
        }
    }
    tableData.push(thisRow);
}
var tableview = Ti.UI.createTableView({
    data:tableData
});
 
tableview.addEventListener("click", function(e){
    if(e.source.objName){
        Ti.API.info("---> " + e.source.objName+e.source.objIndex + " was clicked!");
    }
});

win.add(tableview);
 
win.open();