// add the time to the top of the page
var date = moment().format("MMM Do YYYY");
var dateLocation = $(".today");
console.log(date);
dateLocation.text(date);

// color background based on time

var timeClasses = [".nineam", ".tenam", ".elevenam", ".twelepm", ".onepm", ".twopm", ".threepm", ".fourpm", ".fivepm"];
// times in military time
var timeBlocks = [9,10,11,12,13,14,15,16,17];
// get current hour in military time
var currentHour = parseInt(moment().format("H"));
// currentHour = 14;
console.log(Number.isInteger(currentHour))
console.log(currentHour);

for (let i = 0; i < timeClasses.length; i++) {
    var timeBlock = $(timeClasses[i]);

    if (currentHour <= timeBlocks[i]) {
        timeBlock.addClass("future");
    } else if (currentHour >= timeBlocks[i]) {
        timeBlock.addClass("past");
    } 
};
for (let i = 0; i < timeClasses.length; i++) {
    var timeBlock = $(timeClasses[i]);
    if (currentHour === timeBlocks[i]) {
        timeBlock.removeClass("future");
        timeBlock.removeClass("past");
        timeBlock.addClass("current");
    }
};

// retrieve from local
for (let i = 0; i < timeClasses.length; i++) {
    $(timeClasses[i]).text(localStorage.getItem(i));
}

// put stuff in local storage
var saves = ["save1","save2","save3","save4","save5","save6","save7","save8","save9"];

$(".container").on("click", function() {
    console.log(event.target.id);

    var timeSlotSaved = (saves.indexOf(event.target.id));
    console.log(timeSlotSaved);

    localStorage.setItem(timeSlotSaved,$(timeClasses[timeSlotSaved]).val())

    console.log($(timeClasses[timeSlotSaved]).val())
});

// for (let i = 0; i < 10; i++) {
// localStorage.setItem(i,"test");
// }



// console.log(localStorage.getItem(timeBlocks[0]));
// console.log($(timeClasses[0]));


// $(".elevenam").val("test3");
// console.log($(".elevenam").val())
