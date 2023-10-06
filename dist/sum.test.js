"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("./sum");
test('add 1 + 2 to equal 3', () => {
    expect((0, sum_1.sum)(1, 2)).toBe(3);
    // expect(sum(1,2)).not.toBe(1)
    expect((0, sum_1.sum)(1, 2)).not.toBe(1);
    expect((0, sum_1.sum)(1, 2)).not.toBe(2);
    expect((0, sum_1.sum)(1, 2)).not.toBe(4);
});
