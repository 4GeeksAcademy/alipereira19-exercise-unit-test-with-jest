const {fromEuroToDollar} = require('./app.js')
test("one euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(3.5)).toBe(3.745)
})