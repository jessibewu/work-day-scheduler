var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

var currentHour = moment().format("HH");
var currentHourParse = parseInt(currentHour);
console.log(currentHourParse);


var hours = function() {
    for (var counter = 1; counter <= 12; counter++) {
        $("#" + counter + "Row").val(localStorage.getItem(counter));
    }
};

var auditTime = function() {

    hours();

    for (var i = 1; i <= 12; i++) {
        var formTime = $("#" + i + "Row").attr("data-time");
        var formTimeParse = parseInt(formTime);
        
        if (currentHourParse === formTimeParse){
            $("#" + i + "Row").addClass("present");    
        }
        if (currentHourParse > formTimeParse){
            $("#" + i + "Row").addClass("past");
        }
        if (currentHourParse < formTimeParse){
            $("#" + i + "Row").addClass("future");
        }
    }  
 };

auditTime();

$(".saveBtn").click(function() {
    
    var formHour = $(this).attr("data-hour");
    var formTextarea = $("#" + formHour + "Row").val();

    localStorage.setItem(formHour, formTextarea);
    
});