---
title: 'Data Types'
metaTitle: 'Data Types / Intro to Programming'
metaDescription: 'This is the meta description'
order: 4
---

# Concept

In programming, it is important that we should be able to handle our data properly. Now, there are different types of data. Namely, `numbers`, `strings`, and `booleans`. These data types are common in most programming languages but may differ only on terminologies and syntax. There are other data types available in Python but I will not talk about it here such as the `None` and object-oriented data types.

# Numbers

Essentially, the `number` data type is a typical data type we used in programming. This is we use to calculate for something, to do mathematical operation, and much more! Copy the code below to your repl editor and run. Observer the result in the console.

```python
print(type(1))
print(type(3.14))
```

As you can see, the output is:

```bash
<class 'int'>
<class 'float'>
```

In Python, there are two variations of numbers. The `int` and the `float` data types. `int` data type represents the integers that we all used to while the `float` are the numbers that have decimal points. That's all you need to know about the numbers in Python. You can do arithmetic operations in Python. Try to run the code below:

```python
print("The sum of", 1, "and", 1, "is:", 1+1)
```

Is the answer `2`? Then, you are correct!

# Strings

What the heck is a `string`? Well, it is just a fancy term for a text data. Any text data that we used in Python, it can be called as a `string`. Fun fact, it is called `string` because it is actually a series of characters "string-ed" together to form a text. Since the beginning, we are using the `string` data type to display in our console. But, let's try this one:

```python
print("1" + "1")
```

What do you observed? Is the output `2`? or is it `11`? Weird, right? The reason why the answer is `11` is that arithemtic operations in Python respect the data type being operated. When adding numbers, it resulted to a mathematical answer, however when adding strings it just "concatenates" or joins the two strings into one. Now, try this one:

```python
print("awesome " * 9)
```

Did your program print `awesome` 9 times? Then, you are correct!

# Boolean

Boolean data type is usefully when adding decision logic to our programs. It has only two values: `True` and `False`. Right now, booleans are not that useful since we only know how to get user input and print something on the console. Just note that, this data type has only two values and useful for conditional logic. Just try to print it.

```python
print("This is", True)
print("What is the opposite of false?", not False)
```

Easy, right?

# Comments

This is one is not a data type but I will just add it here as a tips for you as the topics gets harder. Adding comments to your program is important so that you can add note to your code. Comments can be made by adding `#` in your code. Comments are not executed by your program so write comments as much as you can to help you understand how your code works. Below is an example to write a comment:

```python
# This line is not executed
print("Above is an example of a comment...")
```
