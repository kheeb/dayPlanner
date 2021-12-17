//  store value from text area to local storage
$(".saveBtn").on("click" , function(){
    var text = $(this).siblings("textarea").val()
    console.log(text)
    var time = $(this).siblings("textarea").attr("id")
    localStorage.setItem(time, text)
})

// get item from storage to page after refreshing
$("#8").val(localStorage.getItem(8))
$("#9").val(localStorage.getItem(9))
$("#10").val(localStorage.getItem(10))
$("#11").val(localStorage.getItem(11))
$("#12").val(localStorage.getItem(12))
$("#13").val(localStorage.getItem(13))
$("#14").val(localStorage.getItem(14))
$("#15").val(localStorage.getItem(15))
$("#16").val(localStorage.getItem(16))
$("#17").val(localStorage.getItem(17))

// set currentDay
var today = moment().format("MMM Do, YYYY");
$("#currentDay").text(today);

// set the time by hour
var now = moment().hour();
console.log(now);

// create a variable for HTML textarea tag
var textArea = $("textarea");
console.log(textArea);

// sync timeblocks by hour
for (var i=0; i < textArea.length; i++) {
    console.log(textArea[i]);
    console.log($(textArea[i]).attr("id"));
    var timeBlockHour = $(textArea[i]).attr("id");
    if (timeBlockHour === now) {
        $(textArea[i]).addClass("present");
    } else if (timeBlockHour < now) {
        $(textArea[i]).addClass("past");
    } else {
        $(textArea[i]).addClass("future")
    }
}
