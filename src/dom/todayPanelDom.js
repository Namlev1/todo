import {
    createDateInput,
    createDiv,
    createForm,
    createH1,
    createRadioBtn,
    createTextInput,
    createTimeInput,
    deleteChildren
} from "./domUtils";
import CalendarIcon from "../assets/img/calendar.svg"
import Clock from "../assets/img/clock.svg"
import {format, isToday, parse} from "date-fns";
import {enUS} from "date-fns/locale";
import {newTaskEventListener} from "../events/taskEventListeners";
import {taskTypes} from "../logic/storage";
import {displayTask} from "./taskDom";
import {compareTaskDates} from "../util/timeUtil";

export default function renderTodayMainPanelDom() {
    const main = document.querySelector('#main')

    const header = createH1('Today tasks')
    const form = createTaskForm();
    const tasks = createDiv('tasks')

    deleteChildren(main)
    appendElements();
    fillInTodayTasks();

    function createTaskForm() {
        const form = createForm('task_form')
        form.action = '#'
        form.addEventListener('submit', (event) => newTaskEventListener(event));
        const radioWrap = createRadioWrap();
        const taskInput = createTaskInput();

        const today = new Date();
        const timeDiv = createTimeDiv(today);
        const dateDiv = createDateDiv(today);

        form.appendChild(radioWrap)
        form.appendChild(taskInput)
        form.appendChild(timeDiv)
        form.appendChild(dateDiv)

        return form;
    }

    function appendElements() {
        main.appendChild(header)
        main.appendChild(form)
        main.appendChild(tasks)
    }

    function fillInTodayTasks() {
        const todayTasks = [];
        Object.keys(taskTypes).forEach(type => {
            const typeTasks = taskTypes[type];
            const tasksForToday = typeTasks.filter(task => isToday(new Date(task.date)));
            todayTasks.push(...tasksForToday);
        });
        todayTasks.sort((a, b) => compareTaskDates(a, b))
        console.log(todayTasks)
        todayTasks.forEach(displayTask)
    }
}

function createRadioWrap() {
    const radioWrap = createDiv('radio_wrap')
    const radioBtns = createTypeBtns();
    for (const radioBtn of radioBtns) {
        radioWrap.appendChild(radioBtn)
    }
    return radioWrap;
}

function createTypeBtns() {
    const homeBtn = createRadioBtn('pink_btn', 'home', 'task_type', 'home');
    homeBtn.required = true;
    const workBtn = createRadioBtn('cyan_btn', 'work', 'task_type', 'work');
    const personalBtn = createRadioBtn('yellow_btn', 'personal', 'task_type', 'personal');
    return [homeBtn, workBtn, personalBtn]
}

function createTaskInput() {
    const taskInput = createTextInput('flex-grow', 'task_name', 'task_name', 'What is your next task?')
    taskInput.spellcheck = false;
    taskInput.autocomplete = 'off'
    taskInput.required = true;
    return taskInput;
}

function createTimeDiv(today) {
    const div = createDiv('time_wrap')
    const span = document.createElement('span')
    span.id = 'time_val'
    const img = document.createElement('img')
    img.alt = 'Select date'
    img.id = 'time_icon'
    img.src = Clock;
    img.addEventListener("click", (e) => {
        e.preventDefault();
        timeInput.showPicker();
    })
    const timeInput = createTimeInput('time', 'time')
    timeInput.addEventListener('change', function () {
        let selectedTime = this.value;
        console.log('Selected time:', selectedTime);
        const parsedTime = parse(selectedTime, 'HH:mm', new Date());
        span.textContent = format(parsedTime, 'hh:mm a', {locale: enUS});
    });
    timeInput.value = format(today, 'hh:mm', {locale: enUS});
    span.textContent = format(today, 'hh:mm a', {locale: enUS});
    div.appendChild(span)
    div.appendChild(img)
    div.appendChild(timeInput)
    return div;
}

function createDateDiv(today) {
    const div = createDiv('date_wrap')
    const span = document.createElement('span')
    span.id = 'date_val'
    const img = document.createElement('img')
    img.alt = 'Select date'
    img.id = 'date_icon'
    img.src = CalendarIcon;
    img.addEventListener("click", (e) => {
        e.preventDefault();
        dateInput.showPicker();
    })
    const dateInput = createDateInput('date', 'date')
    dateInput.addEventListener('change', function () {
        let selectedDate = this.value;
        console.log('Selected Date:', selectedDate);
        span.textContent = selectedDate;
    });
    const formattedToday = format(today, 'yyyy-MM-dd', {locale: enUS});
    dateInput.value = formattedToday;
    span.textContent = formattedToday;
    div.appendChild(span)
    div.appendChild(img)
    div.appendChild(dateInput)
    return div;
}
