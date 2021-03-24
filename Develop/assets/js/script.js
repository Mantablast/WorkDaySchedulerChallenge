
var formEl = document.querySelector("#task-form");
// var scheduleItems = document.querySelector("#task-form");
//Retreiving the current day of week and month 
var todaysDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(todaysDate);
// document.todaysDate.setAttribute("class", "blue-text");



var loadTasks = function() {
    getSchedItems = JSON.parse(localStorage.getItem("scheduleItems"));
// if nothing in localStorage, create a new object to track all task status arrays
if (!scheduleItems) {
    scheduleItems = {
      scheduleContent: [],
    };
  }
  // loop over object properties to insert to correct places



};


//a function to create tasks completely new or when loaded from the object arrays, also needs to set item to local storage





//create a time interval setinterval() that will update content with current hour and trigger an hour tracking function





//hour tracking function to turn blocks different colors depending on if it is past, present or future
























//ignore everything below***********


//A function to receive tasks from local storage and feed them through a task element creator on their respective time block


// var createSched = function(schedInfo, schedDate) {
//     // create elements that make up a task item
//     var taskLi = $("<li>").addClass("list-group-item");
  
//     var taskSpan = $("<span>")
//       .addClass("badge badge-primary badge-pill")
//       .text(taskDate);
  
//     var taskP = $("<p>")
//       .addClass("m-1")
//       .text(taskText);
  
//     // append span and p element to parent li
//     taskLi.append(taskSpan, taskP);
  
  
//     // append to ul list on the page
//     $("#list-" + taskList).append(taskLi);
//   };




// audit task due dates every 30 minutes
// setInterval(function() {
//   $(".card .list-group-item").each(function() {
//     auditTask($(this));
//   });
// }, 1800000);





// function createSchedEl {
//     var scedInfoEl = document.createElement("div");
//   schedInfoEl.className = "task-info";
//   schedInfoEl.innerHTML =
//     "<h3 class='task-name'>" + schedDataObj.content + "</h3><span class='task-type'>" + schedDataObj.date + "</span>";
//   listItemEl.appendChild(taskInfoEl);
// }





// var saveSched = function() {
//     localStorage.setItem("schedule", JSON.stringify(schedule)); //tasks
//   };

// var loadSched = function() {
//     var savedSched = localStorage.getItem("tasks");
//     // if there are no tasks, set tasks to an empty array and return out of the function
//     if (!savedSched) {
//       return false;
//     }
//     console.log("A schedule exists!");
//     // else, load up saved tasks
  
//     // parse into array of objects
//     savedSched = JSON.parse(savedSched);
  
//     // loop through savedTasks array
//     for (var i = 0; i < savedSched.length; i++) {
//       // pass each task object into the `createTaskEl()` function
//       createTaskEl(savedSched[i]);  //was savedtasks
//     }
//   };