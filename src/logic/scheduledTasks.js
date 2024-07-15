import {displayScheduledTaskPanel} from "../dom/scheduledTasksDom";
import {taskTypes} from "./storage";
import {compareTaskDates} from "../util/timeUtil";

export function showScheduledTasks() {
    const scheduledTasks = getScheduledTasks();
    displayScheduledTaskPanel(scheduledTasks)
}

function getScheduledTasks() {
    const scheduledTasks = [];
    Object.keys(taskTypes).forEach(type => {
        const typeTasks = taskTypes[type];
        scheduledTasks.push(...typeTasks);
    });
    scheduledTasks.sort((a, b) => compareTaskDates(a, b))
    console.log(`scheduled tasks: ${JSON.stringify(scheduledTasks)}`)
    return scheduledTasks;
}