import './styles.css'
import {addScheduledTasksPanel, addTodaysTasksPanel} from "./SidePanelDom";

function renderSidePanel() {
    addTodaysTasksPanel();
    addScheduledTasksPanel();
}

renderSidePanel();
