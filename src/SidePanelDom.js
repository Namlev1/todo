import CalendarClockIcon from "./assets/img/calendar_clock.svg";
import EventIcon from "./assets/img/event.svg";
import {createDiv, createP, createSpan} from "./DomUtils";

const sideMenu = document.querySelector('#side_menu')

function createCategoryListElement(text) {
    const li = document.createElement('li');
    const span = createSpan('clickable_text', text)
    li.appendChild(span);
    return li;
}

function addScheduledTasksPanel() {
    const scheduledTasksCard = createDiv('side_menu_card')
    const imgWrap = createDiv('img_wrap')
    const img = document.createElement('img')
    img.alt = 'Calendar icon'
    img.src = CalendarClockIcon;
    const p = createP('clickable_text', 'Scheduled tasks')

    imgWrap.appendChild(img);
    scheduledTasksCard.appendChild(imgWrap);
    scheduledTasksCard.appendChild(p);
    sideMenu.appendChild(scheduledTasksCard)
}

function addTodaysTasksPanel() {
    const todayTasksCard = createDiv('side_menu_card')
    const imgWrap = createDiv('img_wrap')
    const img = document.createElement('img')
    img.alt = 'Calendar icon'
    img.src = EventIcon;
    const p = createP('clickable_text', 'Today tasks')
    const ul = document.createElement('ul');
    const home = createCategoryListElement('Home')
    const work = createCategoryListElement('Work')
    const personal = createCategoryListElement('Personal')
    ul.appendChild(home)
    ul.appendChild(work)
    ul.appendChild(personal)

    imgWrap.appendChild(img);
    todayTasksCard.appendChild(imgWrap);
    todayTasksCard.appendChild(p)
    todayTasksCard.appendChild(ul)
    sideMenu.appendChild(todayTasksCard);
}

export default function createSidePanelDom(){
    addTodaysTasksPanel();
    addScheduledTasksPanel();
}