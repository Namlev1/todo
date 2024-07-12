import {createBtn, createDiv, createForm, createP, createRadioBtn} from "./domUtils";
import {newTaskEventListener} from "../form/taskFormEventListeners";
import {Types} from "../logic/taskTypes";
import {convertTo12HourFormat} from "../logic/timeUtil";

export function displayTask(task){
    const tasks = document.querySelector('.tasks');
    const type = Types[task.type];

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
    const time = createP('task_time', convertTo12HourFormat(task.time));
    const finishBtnWrap = createDiv('radio_wrap')
    const finishBtn = createBtn('submit', 'finish_btn', '')
    finishBtnWrap.appendChild(finishBtn);

    rightDiv.appendChild(time)
    rightDiv.appendChild(finishBtnWrap)
    taskForm.appendChild(radioWrap)
    taskForm.appendChild(p)
    taskForm.appendChild(rightDiv)

    tasks.appendChild(taskForm);
}