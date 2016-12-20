/**
 * Created by smillaraaq on 12/19/16.
 */
//ALL SCRIPTS FOR TEST EXERCISES

//================================
//TIME and DATE
//================================
function doTimeDate() {
    var myWeekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var myMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var myDate = new Date();
    var myToday = myWeekday[myDate.getDay()];
    var myMonth = myMonth[myDate.getMonth()];
    var myHour = (myDate.getHours() > 0 && myDate.getHours() < 12) ? myDate.getHours() : (myDate.getHours() === 0 || myDate.getHours() === 12) ? 12 : myDate.getHours() - 12;
    var myMinutes = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes();
    var myTime = myHour + ":" + myMinutes;
    var myTimeOfDay = (myDate.getHours() < 12) ? "AM" : "PM";
    document.getElementById("dasTimeDate").innerHTML =
        "Today is " +
        myToday + ", " +
        myMonth + " " +
        myDate.getDate() + ", " +
        myDate.getFullYear() + "<br />" +
        "Current time is: " +
        myTime + " " + myTimeOfDay;
}

//================================
//PRINT WINDOW CONTENTS
//================================
function printThisWindow() {
    window.print();
}
function setButton() {
    document.getElementById("myButton").onclick = function () {
        printThisWindow();
    };
}

//================================
//TRIANGLE AREA
//================================
function getArea() {
    var side1 = Number(document.getElementById("inputSide1").value);
    var side2 = Number(document.getElementById("inputSide2").value);
    var side3 = Number(document.getElementById("inputSide3").value);
    var p = (side1 + side2 + side3) / 2;
    var areaTriangle = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    document.getElementById("inputAreaTriangle").value = areaTriangle.toPrecision(4); //2 deimals with rounding
}
function setButtonArea() {
    document.getElementById("buttonArea").onclick = function () {
        getArea();
    };
}