import {Task} from "../logic/task";
import {removeById, save} from "../logic/storage";
import {displayTask, hideTask} from "../dom/taskDom";

export function newTaskEventListener(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const type = formData.get('task_type');
    const name = formData.get('task_name');
    const time = formData.get('time');
    const date = formData.get('date');

    const task = new Task(type, name, time, date);
    save(task);
    displayTask(task)
}

export function deleteTaskEventListener(event) {
    event.preventDefault();
    const taskId = event.target.getAttribute('taskId')
    removeById(taskId)
    hideTask(taskId)
}