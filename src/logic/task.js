export class Task {
    static id = 0;
    constructor(type, name, time, date) {
        this.type = type;
        this.name = name;
        this.time = time;
        this.date = date;
        this.id = Task.id;
    }
}