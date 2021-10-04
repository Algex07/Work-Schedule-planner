$(document).ready(function(){

    $("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'))

    $(".saveBtn").on("click", function(){
        // referencing all siblings with the class of "description and getting the value of the userInput in the respectful <textarea>"
        let userInput = $(this).siblings(".description").val();
        console.log("userinput", userInput)
        // referencing the parent div's "ID" to set as the key name in localStorage
        let timeBlock = $(this).parent().attr('id')
        console.log(timeBlock)
        // setting localStorage with the timeblock as the key and the userInput corresponding with that specific timeBlock as the value
        localStorage.setItem(timeBlock,userInput)

    })

    function getCurrentTime(){
        // using moment.js to get the current hour of the day "think military time"
        let currentHour = moment().hours();
        console.log("currenthour", currentHour)

        // for each time block test the current hour against the time block hour
        $(".time-block").each(function(){
            // getting the value of each timeblock and making it into a number using ParseInt()
            let timeBlockHour = parseInt($(this).attr("value"));

            //if the timeblock hour is less than the current hour its gonna be the past
            if(timeBlockHour < currentHour){
                $(this).addClass('past')
                //if time block hour is equal to current hour its present
            } else if(timeBlockHour === currentHour){
                $(this).removeClass("past")
                $(this).addClass("present")
            }else {
                // otherwise all else its the future
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }

        })
        
    }

    getCurrentTime()


// here i am calling to put the value of localstorage with corresponding id and timeblock 
    $("#hour-9 .description").val(localStorage.getItem('hour-9'))
    $("#hour-10 .description").val(localStorage.getItem('hour-10'))
    $("#hour-11 .description").val(localStorage.getItem('hour-11'))
    $("#hour-12 .description").val(localStorage.getItem('hour-12'))
    $("#hour-13 .description").val(localStorage.getItem('hour-13'))
    $("#hour-14 .description").val(localStorage.getItem('hour-14'))
    $("#hour-15 .description").val(localStorage.getItem('hour-15'))
    $("#hour-16 .description").val(localStorage.getItem('hour-16'))
    $("#hour-17 .description").val(localStorage.getItem('hour-17'))
})