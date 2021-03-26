//Retreiving the current day of week and month 
var todaysDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(todaysDate);
// document.todaysDate.setAttribute("class", "blue-text");


//hour tracking function to turn blocks different colors depending on if it is past, present or future
function colorCoding() {
var currentHour = parseInt((moment().format('kk')));
console.log(currentHour);
$(".time-block").each(function () {
    var blocksTimeStamp = parseInt($(this).attr("id"));
    console.log(blocksTimeStamp);
    //remove all three classes in this section at once if they are there
    $(this).removeClass("orange-present");
    $(this).removeClass("grey-past");
    $(this).removeClass("green-future");
    //color code add class
    if(blocksTimeStamp === currentHour) {
      $(this).addClass("orange-present");
    }
    else if(blocksTimeStamp < currentHour) {
      $(this).addClass("grey-past");
    }
    else if(blocksTimeStamp > currentHour) {
      $(this).addClass("green-future");
    }
  })
  loadTasks();
};

//Reload tasks back into the time blocks
//If I have time, this will be changed to a loop
var loadTasks = function () {
  console.log("We are Here");
  $("#09 .text-box-insert").val.JSON.stringify(localStorage.getItem("09"));
  console.log("09:00 content retrieved");
  $("#10 .text-box-insert").val.JSON.stringify(localStorage.getItem("10"));
  console.log("10:00 content retrieved");
  $("#11 .text-box-insert").val.JSON.stringify(localStorage.getItem("11"));
  console.log("11:00 content retrieved");
  $("#12 .text-box-insert").val.JSON.stringify(localStorage.getItem("12"));
  console.log("12:00 content retrieved");
  $("#13 .text-box-insert").val.JSON.stringify(localStorage.getItem("13"));
  console.log("1:00 content retrieved");
  $("#14 .text-box-insert").val.JSON.stringify(localStorage.getItem("14"));
  console.log("2:00 content retrieved");
  $("#15 .text-box-insert").val.JSON.stringify(localStorage.getItem("15"));
  console.log("3:00 content retrieved");
  $("#16 .text-box-insert").val.JSON.stringify(localStorage.getItem("16"));
  console.log("4:00 content retrieved");
  $("#17 .text-box-insert").val.JSON.stringify(localStorage.getItem("17"));
  console.log("5:00 content retrieved");
};


//create a time interval setinterval() that will update content with current hour and trigger an hour tracking function
setInterval(function() {
  colorCoding();
}, 600000);

colorCoding();



$( ".save-icon" ).click(function() {
  console.log("Save button clicked!");
  var scheduleContent = $(this).parent().siblings("textarea").val()
  console.log('schedule content', (scheduleContent))

  // scheduleContent = window.localStorage.setItem('text', JSON.stringify(scheduleContent));
  var hourId = $(this).parent().parent().attr("id")

  console.log(hourId);
  scheduleContent = window.localStorage.setItem(`${hourId}`, JSON.parse(scheduleContent));
})