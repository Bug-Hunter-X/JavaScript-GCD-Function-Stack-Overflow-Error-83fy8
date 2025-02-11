# JavaScript GCD Function Stack Overflow Error

This repository demonstrates a common error in recursive JavaScript functions: stack overflow due to improper base case handling.

The `bug.js` file contains a function that calculates the greatest common divisor (GCD) using Euclid's algorithm.  However, it lacks a proper base case to handle when the second argument becomes zero. This leads to infinite recursion and a stack overflow error.

The `bugSolution.js` file provides a corrected version with the necessary base case to prevent the stack overflow.  This example highlights the importance of thorough base case consideration when working with recursive functions.