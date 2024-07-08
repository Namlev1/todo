import {Task} from "./task";

export function save(task){
    console.log(`saving task: ${JSON.stringify(task)})`)
    localStorage.setItem(String(Task.id), JSON.stringify(task));
    Task.id++;
    localStorage.setItem("id", String(Task.id));
}

export function remove(task){
    console.log(`removing task: ${JSON.stringify(task)})`)
    localStorage.removeItem(String(task.id));
}

export function loadStorage(){
    Task.id = localStorage.getItem("id") === null ? 1 : localStorage.getItem("id");
    for (let i = 0; i < localStorage.length; i++){
        console.log((localStorage.getItem(localStorage.key(i))));
    }
}