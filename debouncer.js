function Debouncer(delay, key) {
    this.queue = [];
    
    this.add = (func) => {
        const context = this;
        const args = arguments;
    
        let callTimeout = setTimeout(() => {
            func.apply(context, args)
            this.queue = this.queue.filter(exec => exec.key != key);
        }, delay);
    
        let execution = this.queue.find(exec => exec.key == key);
    
        if (execution) {
            clearTimeout(execution.call);
            execution.call = callTimeout;
        } else {
            this.queue.push({ key: key, call: callTimeout });
        }
    }
}

function create(delay) {
    return new Debouncer(delay || 1000, new Date().getTime());
}

module.exports = { create };