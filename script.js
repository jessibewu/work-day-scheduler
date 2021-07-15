var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

var currentHour = moment().format("HH");
var currentHourParse = parseInt(currentHour);
console.log(currentHourParse);

$("#hour9").attr("data-time", moment("9AM", "hA").format("HH"));
$("#hour10").attr("data-time", moment("10AM", "hA").format("HH"));
$("#hour11").attr("data-time", moment("11AM", "hA").format("HH"));
$("#hour12").attr("data-time", moment("12PM", "hA").format("HH"));
$("#hour1").attr("data-time", moment("1PM", "hA").format("HH"));
$("#hour2").attr("data-time", moment("2PM", "hA").format("HH"));
$("#hour3").attr("data-time", moment("3PM", "hA").format("HH"));
$("#hour4").attr("data-time", moment("4PM", "hA").format("HH"));
$("#hour5").attr("data-time", moment("5PM", "hA").format("HH"));

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