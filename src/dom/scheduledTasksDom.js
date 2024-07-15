import {deleteChildren} from "./domUtils";

const main = document.querySelector('#main')

export function displayScheduledTaskPanel(tasks) {
    deleteChildren(main)
    // tasks.forEach(task => {displayTask(task)})
}