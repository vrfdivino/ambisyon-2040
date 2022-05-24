---
title: 'Loops'
metaTitle: 'Loops / Intro to Programming'
metaDescription: 'This is the meta description'
order: 7
---

# Concept

Now, our program executes our code from top to bottom. What if we want to run the program until we tell so exit? Or consider a list of items and you want to do something with it? This can be achieved using `loops`. From the term itself, it allows us to control the execution behavior of the program -- whether to do something more before exiting.

# while loop

Yes, you are right! The `while` loop will loop "while something is true". We use will the concepts from the previous statement since it is the building block of the `while` loop -- the conditionals.

Consider the code below, run it:

```python
while True:
    print("I am stuck!")
```

What did you observe? Scary, right? Your code will not stop executing it since the condition is `True`. This is called an `infinite loop`. It is called such way because there is no way for your program to stop unless the computer failed to handle it -- at some point. This is one of the scariest thing for a programmer to encounter, so beware of it. Let's try to fix the issue.

```python
counter = 0
while counter < 5:
    print("Current counter is:", counter)
    counter += 1
```

The code above will print from `0` to `4` as specified in your conditional. So, when you want to use a `while` loop, it is best to have a `counter` variable to track the state of your condition.

We can also short circuit a `while` loop in combination of a `break` and the `if-else` statements. Consider the code below:

```python
counter = 0
while True:
    if counter == 5:
        break
    else:
        print("Current counter is:", counter)
    counter += 1
```

It is exactly from the previous example, but you have a greater control of your loops. Either way, both are good design of implementing loops. So, do it depending on your needs.

How about skipping executing a line of code?

```python
counter = 0
while True:
    if counter < 1:
        counter += 1
        continue
    elif counter == 5:
        break
    else:
        print("Current counter:", counter)
        counter += 1
```

The code above will print from `0` to `4` except `1`. The `continue` statement will allow you to skip executing a certain code block.

# for loop

`for` loop, on the other hand, does not implement a conditional loop (well, behind the scence it does!). This is useful when you want to iterate a finite list of something. I will talk about `data structures` in the section but for now, just note that `for` loops are great for executing a finite set.

Consider the loop below:

```python
for i in range(0,5):
    print("Current counter:", i)
```

This is exactly from the previous example where it prints number from `0` to `4`. The `range()` function here create a list of numbers from `0` until `5` but not including `5`. This is much simpler than the `while` loop, right? For now, just take not of the syntax of a `for` loop.

# When to use for and while loop?

There is no much a better option between the two. They have useful cases from one another. For example, when you want to implement a prompt, let's say get a user input then determine if you should rerun the code, then use the `while` loop. If something if discrete, finite, and direct loop, then use a `for` loop.

# Try this!

Create a program that takes an option from the user. If the user input is `N`, then exit the code. If the user input is `Y`, then rerun the code.

# Try this! (Solution)

```python
while True:
    answer = input("Do you want to run again? [Y/N]")
    if answer == "Y":
        continue
    elif answer == "N":
        break
```
