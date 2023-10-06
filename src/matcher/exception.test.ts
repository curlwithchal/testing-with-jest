
describe('test Exception', () => {

    function sayHello() {
        throw new Error('Error Say Hello')
    }


    test('test sayHello', () => {
        expect(() => sayHello()).toThrow(Error)
        expect(() => sayHello()).toThrow('Error Say Hello')

        // Regex
        expect(() => sayHello()).toThrow(/Error/)
        expect(() => sayHello()).toThrow(new RegExp('Say'))
    })
})