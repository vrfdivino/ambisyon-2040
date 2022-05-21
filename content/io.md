---
title: 'I/O Services'
metaTitle: 'I/O / Intro to Programming'
metaDescription: 'This is the meta description'
order: 3
---

# Concept

What is `I/O Services`? Well, basically, `I/O` is just a shorthand for Input and Output. Most of the time, when creating an application, we should be able to get user input and display the output to our users. In Python, there are built-in functions that we can use to implement `I/O Services` via `console`. Throughout the course, we will be using these functions to get user input and print something on the console.

# print

In the previous section, we are able to write our first line of code. Essentially, we used the `print()` function. From the name itself, it prints the argument to the console. We will talk more about `arguments` in the later topics, but for now think the argument as the content you pass inside the function.

Let's recap how to use the `print()` function. Observe the code below, what do you expect the program will do when we run the code?

```python
print("Hello, Python!")
print("This is the first argument", "Second", "Last")
```

For the first line, it should print the text `Hello, Python!` and for second line of code, it should print the `This is the first argument Second Last`. Notice that the latter prints all the arguments in one line of code separated by a space. Amazing, right? You can print anything using the `print()` function.

# input

Right now, we are just printing something in the console... and it is kinda boring! Fortunately, Python has a built-in function that allows our program to get user input from the console. It is called the `input()` function. It takes an argument to print as prompt, waits for the user to enter something, and store it in our program. To use the `input()` function, observe the code below:

```python
name = input("What is your name? ")
print("Hello there,", name)
```

Try to run the code. The first line code, which we used the `input()` function, we print the `What is your name?` prompt and wait for the user to enter something. When the user entered something, it will be stored in the `name` variable. Then, it moves to the next line and prints the text `Hello there,` appended with the name entered by the user.

Python is amazing, right? Now, you learned how to get user input using the `input()` function and print something in the console using the `print()` function. Try the exercise below!

# Try this!

Create a program that takes the age of the user and display again the age of the user in the screen. Your output should be similar to this:

```bash
How old are you? 20
You are 20 years old!
```

# Try this! (Solution)

```python
age = input("How old are you? ")
print("You are", age, "years old!")
```
