import {sum} from "./sum";


test('add 1 + 2 to equal 3',() => {
    expect(sum(1,2)).toBe(3)
    // expect(sum(1,2)).not.toBe(1)
    expect(sum(1,2)).not.toBe(1)
    expect(sum(1,2)).not.toBe(2)
    expect(sum(1,2)).not.toBe(4)
})
