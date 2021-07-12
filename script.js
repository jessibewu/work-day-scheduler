var today = moment().format("dddd, MMMM Do");
$("#currentDay").append(today);


var auditTime = function() {
//    console.log(checkTime);

var i = 0;

//var formHour = $.trim($("label").text());
var formHour = $( "label" ).each(function( index ) {
    
    var newFormHour = $.trim(document.getElementsByTagName('label')[i].firstChild.data);
    
    //console.log(newFormHour);

//formHour = moment().format("HH");

var d = new Date();
var n = 10; //d.getHours();
console.log(n);

var convertedFormHour = moment(newFormHour, ["h A"]).format("HH");
//moment().format('[today] HH');
console.log(convertedFormHour);

if (convertedFormHour > n) { 
    $(".form-control:eq(i)").addClass(".future bg-success");
    console.log("success");
}
if (convertedFormHour < n) { 
    $(".form-control:eq(i)").addClass(".past bg-dark");
    console.log("light");
    }
if (convertedFormHour == n) {
    $(".form-control:eq(i)").addClass(".present bg-danger");
    console.log("danger");
};

    i++;

});
//console.log("working");
}

auditTime();