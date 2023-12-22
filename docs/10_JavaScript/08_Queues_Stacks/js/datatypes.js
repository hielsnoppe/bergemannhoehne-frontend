class Queue {
    constructor() {
        this.items = [];
    }

    enqueue = (element) => {
        this.items.push(element);
    }

    dequeue = () => {
        return this.items.shift();
    }

    peek = () => {
        return this.items[0];
    }

    length = () => {
        return this.items.length;
    }
}

class Stack {
    constructor() {
        this.items = [];
    }

    push = (item) => {
        this.items.push(item);
    }

    pop = () => {
        return this.items.pop();
    }

    peek = () => {
        return this.items[this.items.length - 1];
    }

    size = () => {
        return this.items.length;
    }
}