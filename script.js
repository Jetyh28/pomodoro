
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

// 25 minutes
let timeLeft = 1500;
let interval; 

// let minutes = 25;
// let seconds = 0;
// let isPaused = false;
// let enteredTime=null;

// function startTimer() {
//     timer = setInterval(updateTimer, 1000);
// }



function startTimer() {
    // The updatetimer function will be executed every 1 second
    // setInterval keeps calling the count down function until clearinterval is called , 
    // then timer is updated to 25 mins again.  
    interval = setInterval(() =>  {
            timeLeft--;
            updateTimer();
            if(timeLeft === 0){
                clearInterval(interval);
                alert("Time's Up!");
                timeLeft = 1500;
                updateTimer();
            }
        }, 1000);
       
    }

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);   // dividing 1500 miliseconds by 60 = 25min
    const seconds = timeLeft % 60;


// formatting minutes and seconds.. Makes strings at least 2 characters 
    timer.innerHTML = `${minutes.toString().padStart(2,"0")}
    ${seconds.toString().padStart(2,"0")}`;

}


function stopTimer() {
    clearInterval(interval);
}
        

function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}


//Events listeners

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);









    // if (minutes === 0 && seconds === 0) {
    //     clearInterval(timer);
    //     alert('Time is up! Take a break.');
    // } else if (!isPaused) {
    //     if (seconds > 0) {
    //         seconds--;
    //     } else {
    //         seconds = 59;
    //         minutes--;
    //     }
    // }









// function togglePauseResume() {
//     const pauseResumeButton =
//         document.querySelector('pause-resume-button');
//     isPaused = !isPaused;

//     if (isPaused) {
//         pauseResumeButton.textContent = 'Resume';
//     } else {
//         pauseResumeButton.textContent = 'Pause';
//     } }



    // To do list

    // collecting input from user

    document.addEventListener('DOMContentLoaded', () => {


         const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    const addTask = (event) => {

    
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if(!taskText){
            return; // Don't continue if input field is empty
        };

        const li = document.createElement('li'); // Creating new li element when clicking add button
        li.innerHTML =`
        <input type="checkbox" class="checkbox">
            <span>${taskText}</span>
            <div class="task-buttons">
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
          
            
            `;
         
                 
        
        taskList.appendChild(li);
        taskInput.value = '';

    }
    

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask(e);
        }
    })

const deleteAfterClick = (event) => {
    if(event.target.classList.contains("delete-btn")) {
       const deleteBtn = event.target.closest(".delete-btn");
       if(!deleteBtn) return;
        const li = deleteBtn.closest("li");
        if(li) li.remove()
       }
    }


    
    


taskList.addEventListener("click", deleteAfterClick);








    });

   
    //   if(checkbox.checked){
            // li.style.textDecoration = 'line-through';
            // else{
            //    li.style.textDecoration = 'none'; }
            // }