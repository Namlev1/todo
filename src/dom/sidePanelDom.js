import CalendarClockIcon from '../assets/img/calendar_clock.svg'
import EventIcon from '../assets/img/event.svg'
import { createDiv, createP, createSpan } from './domUtils'
import { showScheduledTasks } from '../logic/scheduledTasks'
import renderTodayMainPanelDom from './todayPanelDom'

const sideMenu = document.querySelector('#side_menu')

function createCategoryListElement(text) {
  const li = document.createElement('li')
  const span = createSpan('clickable_text', text)
  li.appendChild(span)
  return li
}

function addScheduledTasksPanel() {
  const scheduledTasksCard = createDiv('side_menu_card')
  const imgWrap = createDiv('img_wrap')
  imgWrap.addEventListener('click', showScheduledTasks)
  const img = document.createElement('img')
  img.classList.add('clickable_text')
  img.alt = 'Calendar icon'
  img.src = CalendarClockIcon
  const p = createP('clickable_text', 'Scheduled tasks')
  p.addEventListener('click', showScheduledTasks)

  imgWrap.appendChild(img)
  scheduledTasksCard.appendChild(imgWrap)
  scheduledTasksCard.appendChild(p)
  sideMenu.appendChild(scheduledTasksCard)
}

function addTodayTasksPanel() {
  const todayTasksCard = createDiv('side_menu_card')
  const imgWrap = createDiv('img_wrap')
  imgWrap.addEventListener('click', renderTodayMainPanelDom)
  const img = document.createElement('img')
  img.classList.add('clickable_text')
  img.alt = 'Calendar icon'
  img.src = EventIcon
  const p = createP('clickable_text', 'Today tasks')
  p.addEventListener('click', renderTodayMainPanelDom)
  const ul = document.createElement('ul')
  const home = createCategoryListElement('Home')
  const work = createCategoryListElement('Work')
  const personal = createCategoryListElement('Personal')
  ul.appendChild(home)
  ul.appendChild(work)
  ul.appendChild(personal)

  imgWrap.appendChild(img)
  todayTasksCard.appendChild(imgWrap)
  todayTasksCard.appendChild(p)
  todayTasksCard.appendChild(ul)
  sideMenu.appendChild(todayTasksCard)
}

export default function renderSidePanelDom() {
  addTodayTasksPanel()
  addScheduledTasksPanel()
}
