

function helloWorld(){
    return 'Hello World'
}

describe('test Hello world', () => {
    beforeAll(() => {
        console.log('BeforeAll Call')
    })

    beforeEach(() => {
        console.log('BeforeEach Call')
    })

    afterAll(() => {
        console.log('AfterAll Call')
    })

    afterEach(() => {
        console.log('AfterEach Call')
    })


    test('hello', () => {
        console.log('test Hello')
        expect(helloWorld()).toBe('Hello World')
    })

})
