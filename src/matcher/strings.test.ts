

describe('check string character', () => {
    test('check string expression', () => {
        // Code is failure string no same
        // expect('Hello My Name Is Ichal').toMatch(/ichal/)

        expect("Hello My Name Is Ichal").toMatch(/Ichal/)
        expect("Hello My Name Is Ichal").toMatch(/llo/)
        expect("Hello My Name Is Ichal").toMatch(/ello/)
        expect("Hello My Name Is Ichal").toMatch(/Is/)
        expect("Hello My Name Is Ichal").toMatch(/s/)
        expect("Hello My Name Is Ichal").toMatch(/My/)
        expect("Hello My Name Is Ichal").toMatch(/y/)
    })
})