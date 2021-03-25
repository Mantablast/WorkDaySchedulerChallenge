

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
  // loadTasks();
};

// var loadTasks = function() {
//     getSchedItems = JSON.parse(localStorage.getItem("scheduleItems"));
// // if nothing in localStorage, create a new object to track all task status arrays
// if (!scheduleItems) {
//     scheduleItems = {
//       scheduleContent: [],
//     };
//   }
// else ()
//   // loop over object properties to insert to correct places
// };


//a function to create tasks completely new or when loaded from the object arrays, also needs to set item to local storage
// $("#task-form").on("click", "p", function() {
//   var text = $(this)
//     .text()
//     .trim();
//     $(this).replaceWith(textInput);
//     textInput.trigger("focus");
//     // recreate p element
// var taskP = $("<p>")
// .addClass("m-1")
// .text(text);

// // replace textarea with p element
// $(this).replaceWith(taskP);
// });

// }




//create a time interval setinterval() that will update content with current hour and trigger an hour tracking function
setInterval(function() {
  colorCoding();
}, 1800000);

colorCoding();





$( ".save-icon" ).click(function() {
  console.log("Save button clicked!");
  var scheduleContent = $(this).parent().siblings().val()
  console.log('schedule content', scheduleContent)

  scheduleContent = window.localStorage.setItem('text', JSON.stringify(scheduleContent));
  var hourId = $(this).parent().siblings()

  console.log(hourId);
  scheduleContent = window.localStorage.setItem(`${hourId}`, JSON.stringify(scheduleContent));
});

// var scheduleContent = $(this).parent().siblings()[1].child()//this isnt working
// var hourId = $(this).samethignbuttogettheid
//  scheduleContent = window.localStorage.setItem(`${hourId`, JSON.stringify(scheduleContent));

//not yet working
// function clearAll() {
//   var clearAsk = prompt("Are you sure?  The tasks can no longer be retrieved after clearing.")
//   if(!clearAsk) {
//     console.log("cancel clear");
//   }
//   else {
//     console.log("initiate clear task sequence");
//   }
// };

// document.getElementsByClassName("clear-all").addEventListener("click", clearAll);





//ignore everything below***********

// 1. Add a class to each of your text areas (same one) done
// 2. add a UNIQUE id to each timebloack for the hour it is done
// 3. Add a class (or use one that you already have for the bootstrap stuff) to the button done!
// 4. use a onclick (or click in jquery) on the button class you are using.
// 5. in the function that starts on the click use the JQUERY 'this' to grab the specific timeblock div
// 6. Jquery has ways to grab siblings, parents, children etc and you can get that text area and the unique ID.
// 7. save to local storage using the unique id as the key and text area value as the value