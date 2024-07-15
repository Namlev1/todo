import {displayScheduledTaskPanel} from "../dom/scheduledTasksDom";
import {taskTypes} from "./storage";
import {compareTaskDates} from "../util/timeUtil";
import {compareAsc, format, parseISO} from "date-fns";

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

    const tasksByDate = new Map();
    scheduledTasks.forEach(task => {
        const taskDate = format(parseISO(task.date), 'yyyy-MM-dd');
        if (!tasksByDate.has(taskDate)) {
            tasksByDate.set(taskDate, []);
        }
        tasksByDate.get(taskDate).push(task);
    });

    const groupedTasks = Array.from(tasksByDate.values());

    groupedTasks.forEach(group => group.sort(compareTaskDates));
    groupedTasks.sort((a, b) => {
        const dateA = parseISO(a[0].date);
        const dateB = parseISO(b[0].date);
        return compareAsc(dateA, dateB);
    });

    console.log('Grouped tasks:', groupedTasks);

    return groupedTasks;
}