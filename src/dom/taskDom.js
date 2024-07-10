import {createBtn, createDiv, createForm, createP, createRadioBtn} from "./domUtils";
import {newTaskEventListener} from "../form/taskFormEventListeners";

export function displayTask(task){
    const tasks = document.querySelector('.tasks');

    const taskForm = createForm('task')
    taskForm.action = '#'
    taskForm.addEventListener('submit', (event) => newTaskEventListener(event))

    // todo: export types to a file with a fast mapping function
    const radioBtn = createRadioBtn('pin_btn', 'type', 'type', 'type')
    radioBtn.disabled = true;

    const p = createP('task_name', task.name)
    p.classList.add('flex-grow')

    const rightDiv = createDiv('task_time_btn_container')
    const time = createP('task_time', task.time)
    const btn = createBtn('submit', 'smf', 'hit me')

    rightDiv.appendChild(time)
    rightDiv.appendChild(btn)
    taskForm.appendChild(radioBtn)
    taskForm.appendChild(p)
    taskForm.appendChild(rightDiv)

    tasks.appendChild(taskForm);
}