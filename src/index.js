import './styles.css'
import createSidePanelDom from "./SidePanelDom";
import Icon from "./assets/img/calendar.svg"

function renderSidePanel() {
    createSidePanelDom()
}

renderSidePanel();

const dateIcon = document.querySelector("#date_icon");
const dateInput = document.querySelector("#date");
const dateSpan = document.querySelector("#date_val");

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
