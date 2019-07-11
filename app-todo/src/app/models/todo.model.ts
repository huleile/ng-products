export class Todo {
    id: number;
    title: string;
    complete: boolean;

    constructor(todo: object = {}) {
        Object.assign(this, todo);
    }
}
