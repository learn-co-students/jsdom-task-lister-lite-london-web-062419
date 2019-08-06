document.addEventListener("DOMContentLoaded", () => {
   var form = document.getElementById('create-task-form');
   var taskList = document.getElementById('tasks');

   // form submit event
   form.addEventListener('submit', addTask);

   // Delete an event
   taskList.addEventListener('click', removeItem);

   // add task
   function addTask(e) {
     e.preventDefault();
  
        //get input value
        var newTask = document.getElementById('new-task-description').value;

        //create a new li

        var li = document.createElement('li');

        // Add text node with input value

        li.appendChild(document.createTextNode(newTask));

        //add a delete button

        var deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('X'));

        li.appendChild(deleteButton); 

        taskList.appendChild(li);
            //remove item

   }

});
