const helloWorld = require("./helloWorld");

test("helloWorld function exists", () => {
  expect(helloWorld).toBeDefined();
});

test('helloWorld function returns "Hello World!"', () => {
  expect(helloWorld()).toEqual("Hello World!");
});
