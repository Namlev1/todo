import './styles.css'
import createSidePanelDom from "./SidePanelDom";

function renderSidePanel() {
    createSidePanelDom()
}

renderSidePanel();

const dateBtn = document.querySelector("#date_btn");
const dateInput = document.querySelector("#date");
const dateSpan = document.querySelector("#date_val");

dateBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    dateInput.showPicker();
})
dateInput.addEventListener('change', function() {
    let selectedDate = this.value;
    console.log('Selected Date:', selectedDate);
    dateSpan.textContent = selectedDate;
});
