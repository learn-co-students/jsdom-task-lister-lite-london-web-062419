document.addEventListener("DOMContentLoaded", () => {
  
  // grab all the necessary Dom Elements

  //form and relevant input fields

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new task will live on the DOM

  const newTaskUl = document.getElementById("tasks");


  //attach event listner
  newTaskForm.addEventListener("submit", createNewTask);

});


const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};



const createNewTask = event => {
  event.preventDefault();
  // stops form from trying to submit 
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  appendNewTask(newTask);
  event.target.reset();

};

















