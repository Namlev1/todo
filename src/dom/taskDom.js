import {createBtn, createDiv, createForm, createP, createRadioBtn} from "./domUtils";
import {newTaskEventListener} from "../form/taskFormEventListeners";
import {Types} from "../logic/taskTypes";

export function displayTask(task){
    const tasks = document.querySelector('.tasks');
    console.log('displayTask ', task);
    const type = Types[task.type];
    console.log('taskType ', type);
    console.log('btnColor ', type.btnColor);

    const taskForm = createForm('task')
    taskForm.action = '#'
    taskForm.addEventListener('submit', (event) => newTaskEventListener(event))

    const radioWrap = createDiv('radio_wrap')
    const radioBtn = createRadioBtn(type.btnColor, 'type', 'type', 'type')
    radioBtn.disabled = true;
    radioWrap.appendChild(radioBtn);

    const p = createP('task_name', task.name)
    p.classList.add('flex-grow')

    const rightDiv = createDiv('task_time_btn_container')
    const time = createP('task_time', task.time)
    const btn = createBtn('submit', 'smf', 'hit me')

    rightDiv.appendChild(time)
    rightDiv.appendChild(btn)
    taskForm.appendChild(radioWrap)
    taskForm.appendChild(p)
    taskForm.appendChild(rightDiv)

    tasks.appendChild(taskForm);
}