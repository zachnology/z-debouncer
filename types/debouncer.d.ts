export function create(delay: any): Debouncer;
declare function Debouncer(delay: any, key: any): void;
declare class Debouncer {
    constructor(delay: any, key: any);
    queue: any[];
    add: (func: any, ...args: any[]) => void;
}
export {};
