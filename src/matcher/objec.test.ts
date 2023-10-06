

test('object Assigment', () => {
    const data = {one: 1 ,two: 3}
    data["two"] = 2

    expect(data).toEqual({one: 1, two: 2})
})
