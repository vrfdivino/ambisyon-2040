---
title: 'Functions'
metaTitle: 'Functions / Intro to Programming'
metaDescription: 'This is the meta description'
order: 5
---

# Concept

Now, we are going to tackle about code reusability using `function`. A function is a the fundamental blocks of large-scale systems, together with concepts of `OOP` or objects. For this course, we are only going to use functions to solve repetitive code blocks in your program. Since the beginning, we are using built-in functions in Python such as the `print()`, `input()` and, `type()` functions. They are called built-in functions since we only need to call to use those.

In computer science, we have a general rule in writing our code. We often follow the principle of `DRY` or Don't-Repeat-Yourself. There is no technical term for it, but it is a good practice to follow this concept. The `DRY` principle essentially reminds us to reuse your code as much as you can.

# Defining a function

How do we use a function? Well, first we need to define a function. This is the first step of using a function. Now, let's try to assess first the code below:

```python
print("Hello there!")
name = input("What is your name? ")
print("Oh! Welcome to this program,", name)

print("Hello there!")
name = input("What is your name? ")
print("Oh! Welcome to this program,", name)
```

The code above is correct. It tries to execute the same code block for two times. However, this is not efficient since you repeated an exact copy of a block (aka copy-paste). So, to solve this problem, we will use functions.

To define a function, you need a `function name` and `function body`. The function name is the alias or the nickname you will use to use the function later on while the function body is the code block you want to execute when the function name is being called. Using the example above, we will convert to a function using function definition:

```python
def greet():
    print("Hello there!")
    name = input("What is your name? ")
    print("Oh! Welcome to this program,", name)
```

Above is an example of function definition. To define the function name, start with the keyword `def` and the the nickname for your function. Next, to define the function body, add indention with respect to your function name and write the block of code you want to execute. In in our example, it is the code block from the previous one.

That's it. You are now ready to use the function.

# Using a function

To use a function, just call its name with the parentheses. In our example to call the function twice,

```python
def greet():
    print("Hello there!")
    name = input("What is your name? ")
    print("Oh! Welcome to this program,", name)

greet() # Execute first
greet() # Then execute second
```

Easy right?

# Parameters and arguments

Let's recall the `print()` function. Now, when you want to print `Hello, world`, you will use the function like this:

```python
print("Hello, world")
```

The string `Hello, world` is called an `argument`. Arguments allows us to pass data into our function dynamically. So, in the case of the `print()` function, we can pass as many arguments as we can.

But before passing an argument to our own function, we need to define it as a `parameter` in our function definition. Let's say we want to create a function that takes a `name` argument and prints it on the screen with greetings. Observe the code below:

```python
def greet(name):
    print("Hello", name)

greet("Ted")
greet("Barney")
```

As you can see, the difference between the `parameter` and `argument` is that `parameter` is in function definition while the `argument` is what we passed during function call. Note that, a function throws an error if you don't pass that correct number of arguments to your function call. We have a solution this but it takes advanced Python topics to learn. Right now, this is sufficient enough for you to learn the basics of programming.

# return statement

Most of the time, we want our functions to be fruitful. Meaning, a function returns something after being called. Consider the `input()` function:

```python
name = input("What is your name? ")
```

The `input()` function is an example of a fruitful function. It is fruitful since it returns something back after it is being called. The value being returned is stored in the `name` variable. Then, how we can implement this in our program?

Let's create a function that takes two number arguments and returns the sum of that arguments:

```python
def sum(a,b):
    return a + b
```

In our function definition, we added a `return` statement so that we can use it later on after the program. Let's try to use the function.

```python
def sum(a,b):
    return a + b

ans1 = sum(1,2) # ans1 = 1 + 2 = 3
ans2 = sum(3.14,9.8)  # ans2 = 3.14 + 9.8 = 12.94
```

From our example, `ans1` should hold a value of `3` while `ans2` should hold a value of `12.94`. The function `sum()`, when used properly and being executed, returns the result to a variable.

That's it about function! You are now ready to create reusable code blocks in your programs.

# Try this!

Create a three functions similar to the `sum()` function. However, try to implement subtraction, multiplication, and division.

# Try this! (Solution)

```python
def difference(a,b):
    return a - b

def product(a,b):
    return a * b

def quotient(a,b):
    return a / b
```
