import {Task} from "../logic/task";
import {save} from "../logic/storage";

export default function newTaskFormEventListener(event){
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target); // Gather form data
    // Log form values
    const values = {};
    for (const [name, value] of formData.entries()) {
        values[name] = value;
    }
    console.log(values);

    const type = formData.get('task_type');
    const name = formData.get('task_name');
    const time = formData.get('time');
    const date = formData.get('date');

    const task = new Task(type, name, time, date);
    console.log(`task: ${JSON.stringify(task)}`)
    save(task);
}