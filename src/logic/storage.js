import {Task} from "./task";
import {compareTaskDates} from "../util/timeUtil";

export const taskTypes = {
    home: [], work: [], personal: []
}

export function save(task) {
    console.log(`saving task: ${JSON.stringify(task)})`)
    if (taskTypes[task.type]) {
        taskTypes[task.type].push(task)
        taskTypes[task.type].sort(compareTaskDates)
        localStorage.setItem(`${task.type}Tasks`, JSON.stringify(taskTypes[task.type]));
    }
    Task.id++;
    localStorage.setItem("id", String(Task.id));
}

function findById(id) {
    for (const type in taskTypes) {
        const tasks = taskTypes[type];
        for (const task of tasks) {
            if (task.id == id) return task;
        }
    }
    throw new Error('Task with id ' + id + ' not found');
}

export function removeById(id) {
    const task = findById(id);
    return remove(task);
}

export function remove(task) {
    console.log('removing task: ' + JSON.stringify(task));
    if (taskTypes[task.type]) {
        const index = taskTypes[task.type].findIndex(arrTask => task.id === arrTask.id)
        taskTypes[task.type].splice(index, 1);
        localStorage.setItem(`${task.type}Tasks`, JSON.stringify(taskTypes[task.type]));
    }
}

export function loadStorage() {
    Object.keys(taskTypes).forEach(type => {
        const storedTasks = JSON.parse(localStorage.getItem(`${type}Tasks`));
        if (storedTasks) {
            storedTasks.sort((a, b) => compareTaskDates(a, b))
            taskTypes[type].push(...storedTasks);
        }

    });
    Task.id = localStorage.getItem('id') === null ? 1 : JSON.parse(localStorage.getItem('id'));
}
