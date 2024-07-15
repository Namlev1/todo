import {compareAsc, format, parse} from "date-fns";

export function convertTo12HourFormat(timeString) {
    const parsedTime = parse(timeString, 'H:mm', new Date());
    return format(parsedTime, 'h.mm aa');
}

export function parseDateTime(date, time) {
    return parse(`${date} ${time}`, 'yyyy-MM-dd HH:mm', new Date());
}

export function compareTaskDates(a, b) {
    const dateA = parse(a.date, 'yyyy-MM-dd', new Date());
    const dateB = parse(b.date, 'yyyy-MM-dd', new Date());

    const dateComparison = compareAsc(dateA, dateB);
    if (dateComparison !== 0) return dateComparison;

    // If dates are equal, compare times
    const timeA = parseDateTime(a.date, a.time);
    const timeB = parseDateTime(b.date, b.time);

    return compareAsc(timeA, timeB);
}