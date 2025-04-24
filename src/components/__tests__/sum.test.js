const { sum } = require("../sum");

beforeAll(()=>{
    console.log("Before All");
});

beforeEach(()=>{
    console.log("Before Each");
});

afterAll(()=>{
    console.log("After All");
});

afterEach(()=>{
    console.log("After Each");
});

test("Sum function should calculate the sum of two numbers",()=>
{
    const result = sum(3,4);

    expect(result).toBe(7);
})