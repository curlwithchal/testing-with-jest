"use strict";
function hello(value) {
    return value;
}
test('test hello world', () => {
    expect('hello world').toBe('hello world');
});
