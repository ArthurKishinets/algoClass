let Stack = require('../stack.js');

let stack;

beforeAll(() => {
    stack = new Stack();
});

/* console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'should be Max capacity reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.getCount(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.getCount(), 'should be 2'); */

describe('Stack works correctly', () => {
    test('test push item a', () => {
        stack.push('a');
        expect(stack.getCount()).toBe(1);
        expect(stack.peek()).toBe('a');
    });

    test('test pop', () => {
        let value = stack.pop();
        expect(value).toBe('a');
        expect(stack.getCount()).toBe(0);
    });

    test('test peek', () => {
        expect(stack.peek()).toBe('There are no elements left');
        stack.push('a');
        expect(stack.peek()).toBe('a');
    });

    test('test getCount', () => {
        expect(stack.getCount()).toBe(1);
    });
});