// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('time to test a function', function(expect) {
    //Arrange
    // Set up your parameters and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expected, actual);
});
