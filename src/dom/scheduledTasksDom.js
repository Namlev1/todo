import {createBtn, createDiv, createForm, createH2, createP, createRadioBtn, deleteChildren} from "./domUtils";
import {Types} from "../logic/taskTypes";
import {deleteTaskEventListener} from "../events/taskEventListeners";
import {convertTo12HourFormat} from "../util/timeUtil";
import {format, parseISO} from "date-fns";

const main = document.querySelector('#main')

export function displayScheduledTaskPanel(taskGroups) {
    deleteChildren(main)
    taskGroups.forEach(group => {
        displayTaskGroup(group)
    })
}

function displayTaskGroup(group) {
    const taskGroupDiv = createDiv('tasks')
    const header = createH2(format(parseISO(group[0].date), 'd MMM yyyy'))
    taskGroupDiv.appendChild(header)
    group.forEach(task => taskGroupDiv.appendChild(createTaskForm(task)));

    main.appendChild(taskGroupDiv)
}

function createTaskForm(task) {
    const type = Types[task.type];
    const taskForm = createForm('task')

    const radioWrap = createRadioTypeBtn();

    const p = createP('task_name', task.name)
    p.classList.add('flex-grow')

    const rightDiv = createTimeAndFinishDiv();

    taskForm.appendChild(radioWrap)
    taskForm.appendChild(p)
    taskForm.appendChild(rightDiv)
    return taskForm;

    function createRadioTypeBtn() {
        const radioWrap = createDiv('radio_wrap')
        const radioBtn = createRadioBtn(type.btnColor, 'type', 'type', 'type')
        radioBtn.disabled = true;
        radioWrap.appendChild(radioBtn);
        return radioWrap;
    }

    function createTimeAndFinishDiv() {
        const rightDiv = createDiv('task_time_btn_container')
        const time = createP('task_time', convertTo12HourFormat(task.time));
        const finishBtnWrap = createDiv('radio_wrap')
        const finishBtn = createBtn('submit', 'finish_btn', '')
        finishBtn.setAttribute('taskId', task.id)
        finishBtn.addEventListener('click', deleteTaskEventListener)
        finishBtnWrap.appendChild(finishBtn);

        rightDiv.appendChild(time)
        rightDiv.appendChild(finishBtnWrap)
        return rightDiv;
    }
}
