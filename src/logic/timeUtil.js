import {format, parse} from "date-fns";

export function convertTo12HourFormat(timeString) {
    const parsedTime = parse(timeString, 'H:mm', new Date());
    return format(parsedTime, 'h.mm aa');
}