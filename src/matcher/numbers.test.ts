

test('testNumber', () => {
    const a = 5 + 5
    expect(a).toBe(10)
    expect(a).toBeGreaterThan(9)
    expect(a).toBeGreaterThanOrEqual(10)
    expect(a).toBeLessThan(11)
    expect(a).toBeLessThanOrEqual(11)
    expect(a).toEqual(10)
})

test('to be Greather Than Equal', () => {
    const a = 5.55
    expect(a).toBeGreaterThan(4.55)
    expect(a).toBeGreaterThanOrEqual(5.55)
})

// Test for FloatingPoint instead toEqual

test('test Floating Point', () => {
    const b = 0.5 + 0.5
    expect(b).toBeCloseTo(1)
})

