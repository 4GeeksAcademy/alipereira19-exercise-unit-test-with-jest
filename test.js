const {fromYenToPound} = require('./app.js')
test("2000 yen should be 11.1182109", () => {
    expect(fromYenToPound(2000)).toBe(11.11821086261981)
})