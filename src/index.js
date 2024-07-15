import './styles.css'
import renderSidePanelDom from "./dom/sidePanelDom";
import renderTodayMainPanelDom from "./dom/todayPanelDom";
import {loadStorage} from "./logic/storage";

renderSidePanelDom()
loadStorage();
renderTodayMainPanelDom();
