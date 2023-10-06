

describe('test array', () => {
    const fruits = [
        'Grape',
        'Apple',
        'Orange',
        'Strawberry'
    ]


    test('test contain', () => {
        expect(fruits).toContain('Grape')
        expect(fruits).toContain('Orange')

        //failed !not contain
        // expect(fruits).toContain('orange')
    })

    test('test testContainEqual', () => {
        expect(fruits).toContainEqual('Grape')
    })


    test('test Equal', () => {
        const employee = {
            name: 'cacal',
            age: 24,
            state: 'Indonesia'
        }

        const employee2 = {
            name: 'cacal',
            age: 24,
            state: 'Indonesia'
        }

        expect(employee).toEqual(employee2)
    })


})
