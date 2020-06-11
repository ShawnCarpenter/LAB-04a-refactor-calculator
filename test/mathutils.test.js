// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { add, subtract, multiply, divide } from '../mathUtils.js';
const test = QUnit.test;

//add() function tests
test('the add function should take 1 and 2 and return 3', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(1, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('the add function should take 5 and 22 and return 27', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 27;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(5, 22);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('the add function should take "hello" and 22 and return NaN', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = NaN;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add('hello', 22);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

//subtract() function tests
test('the subtract function should take 1 and 2 and return -1', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(1, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('the subtract function should take 27 and 22 and return 5', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(27, 22);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('the subtract function should take "hello" and 22 and return NaN', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = NaN;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract('hello', 22);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

//multiply() function tests.

test('the multiply function should take  and 9 and return 27', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 27;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(3, 9);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('the multiply function should take 0 and 10 and return 0', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(0, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('the multiply function should take "hello" and 22 and return NaN', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = NaN;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply('hello', 22);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

//divide() function tests.

test('the divide function should take 27 and 9 and return 3', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(27, 9);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('the divide function should take 100 and 10 and return 10', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(100, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('the divide function should take "hello" and 22 and return NaN', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = NaN;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide('hello', 22);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});