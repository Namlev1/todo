import {Task} from "../logic/task";
import {save} from "../logic/storage";

export default function newTaskFormEventListener(event){
    event.preventDefault();
    const formData = new FormData(event.target);

    const type = formData.get('task_type');
    const name = formData.get('task_name');
    const time = formData.get('time');
    const date = formData.get('date');

    const task = new Task(type, name, time, date);
    save(task);
}