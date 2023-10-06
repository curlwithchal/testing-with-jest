

function sum(a: number, b:number){
    return a + b
}

test('test mock Calls', () => {
    const mockSum = jest.fn(sum)

    mockSum(10,10)
    mockSum(20,20)

    // console.log(mockSum.mock.calls)
    console.log(mockSum.mock.calls[0][0])

    // Twice Call
    // console.log(mockSum.mock.calls.length)
})