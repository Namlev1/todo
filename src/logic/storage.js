import {Task} from "./task";

export function save(task){
    console.log(`saving task: ${JSON.stringify(task)})`)
    localStorage.setItem(String(Task.id), JSON.stringify(task));
    Task.id++;
}

export function remove(task){
    console.log(`removing task: ${JSON.stringify(task)})`)
    localStorage.removeItem(String(task.id));
}