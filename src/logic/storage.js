import {Task} from "./task";
import {displayTask} from "../dom/taskDom";

const taskTypes = {
    home: [],
    work: [],
    personal: []
}

export function save(task) {
    console.log(`saving task: ${JSON.stringify(task)})`)
    if (taskTypes[task.type]) {
        taskTypes[task.type].push(task)
        localStorage.setItem(`${task.type}Tasks`, JSON.stringify(taskTypes[task.type]));
    }
    Task.id++;
    localStorage.setItem("id", String(Task.id));
}

export function remove(task) {
    console.log(`removing task: ${JSON.stringify(task)})`)
    if (taskTypes[task.type]) {
        const index = taskTypes[task.type].indexOf(arrTask => task.id === arrTask.id)
        taskTypes[task.type].splice(index, 1);
        localStorage.setItem('homeTasks', JSON.stringify(taskTypes[task.type]));
    }
}

export function loadStorage() {
    Object.keys(taskTypes).forEach(type => {
        const storedTasks = JSON.parse(localStorage.getItem(`${type}Tasks`));
        if (storedTasks) {
            taskTypes[type].push(...storedTasks);
            console.log(`${type}: ${JSON.stringify(taskTypes[type])}`);
            storedTasks.forEach(displayTask);
        }
    });
    Task.id = localStorage.getItem('id') === null ? 1 : JSON.parse(localStorage.getItem('id'));
}
