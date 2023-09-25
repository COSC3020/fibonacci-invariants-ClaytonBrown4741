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
I believe that a good invariant for my recursive implementation of fib() is that  
at the beginning of every recursive call, the length of the array holding the  
fibonacci values is exactly one more than the desired term in the fibonacci sequence.  
In other words, if we were to call fib() on 7, then the array would have a length of 8.  
The exception to this, of course, if we are dealing with negative numbers, in which case  
the length of the list is always just 1 and will have a single entry of 0. 
Using this relationship, we are able to always know exactly which index of the array  
corresponds to which value in the fibonacci sequence. This can be used to prove that  
we are always assigning the correct values to the correct places in the array.  

**Concerning my code**:
At this point, my code seems to run a *really* long time when it comes to larger values  
This causes issues when it comes to testing it, as the testing runs for extended periods of  
time. If this isn't normal, please let me know and I will try to fix my code to account for this.  
Thank you.
