console.log("Hello World")

$(".saveBtn").on("click" , function(){
    var text = $(this).siblings("textarea").val()
    console.log(text)
    var time = $(this).siblings("textarea").attr("id")
    localStorage.setItem(time, text)
})

$("#9").val(localStorage.getItem(9))
$("#10").val(localStorage.getItem(10))
$("#11").val(localStorage.getItem(11))