import './styles.css'
import createSidePanelDom from "./SidePanelDom";
import Icon from "./assets/img/calendar.svg"
import Clock from "./assets/img/clock.svg"
import {format, parse} from "date-fns";
import {enUS} from "date-fns/locale";

function renderSidePanel() {
    createSidePanelDom()
}

renderSidePanel();

const dateIcon = document.querySelector("#date_icon");
const dateInput = document.querySelector("#date");
const dateSpan = document.querySelector("#date_val");

const timeIcon = document.querySelector("#time_icon");
const timeInput = document.querySelector("#time");
const timeSpan = document.querySelector("#time_val");

dateIcon.src = Icon;
dateIcon.addEventListener("click", (e) =>{
    e.preventDefault();
    dateInput.showPicker();
})
dateInput.addEventListener('change', function() {
    let selectedDate = this.value;
    console.log('Selected Date:', selectedDate);
    dateSpan.textContent = selectedDate;
});


timeIcon.src = Clock;
timeIcon.addEventListener("click", (e) =>{
    e.preventDefault();
    timeInput.showPicker();
})
timeInput.addEventListener('change', function() {
    let selectedTime = this.value;
    console.log('Selected time:', selectedTime);
    const parsedTime = parse(selectedTime, 'HH:mm', new Date());
    timeSpan.textContent = format(parsedTime, 'hh:mm a', {locale: enUS});
});


const today = new Date();
const formattedToday = format(today, 'yyyy-MM-dd', { locale: enUS });
dateInput.value = formattedToday;
dateSpan.textContent = formattedToday;

const formattedTime24h = format(today, 'hh:mm', { locale: enUS });
timeInput.value = formattedTime24h;
const formattedTime12h = format(today, 'hh:mm a', { locale: enUS });
timeSpan.textContent = formattedTime12h;

