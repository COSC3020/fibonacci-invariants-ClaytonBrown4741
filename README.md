[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11856788&assignment_repo_type=AssignmentRepo)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.  
  

ANSWER:  
I believe that a good invariant for this would be that at the beginning of every recursive call  
the previous two terms will *always* be available. The base case is true because before we began the recursive call, we  
checked to make sure that the given term wasn't 0, less than 0, or 1. If it was, then we simply  
returned the proper array automatically (that being [0] or [0,1]. If it *wasn't* those, however, then we created the  
array with the proper length (that being, a length of n) and then gave it it's first two values of 0 and 1. So  
in other words, once the actual recursion starts, we'll have everything we need, which proves the base case true.  
From then on out, we will create and add one extra term in the sequence using the previous two that we already know are  
there. Now that we have *another* term, we can call the function again (with an incremented index) and be sure that  
the two values we need to compute the next term already exist. This will repeat until we reach the final entry in the array, at  
which point we return the list of values that we have.
  
**Concerning my code**:
After class today, I realized that I could simply use tail recursion in order to calculate this  
answer and *not* the normal recursive way that takes about 20 years to complete for larger values.  
Because of this, my invariant has changed since the first submission.
