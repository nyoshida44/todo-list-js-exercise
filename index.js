// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title , description) => {
  const task = {
    title: title,
    description: description,
    complete: false,
    // Cannot use arrow functions for methods !!!
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    completeTask: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed

task2.logTaskState(); // Do Laundry has not been completed
task2.completeTask();
task2.logTaskState(); // Do Laundry has been completed

// Let's see what are objects look like :)
console.log(tasks);
