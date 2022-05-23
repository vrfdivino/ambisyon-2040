---
title: 'Conditionals'
metaTitle: 'Conditionals / Intro to Programming'
metaDescription: 'This is the meta description'
order: 6
---

# Concepts

Remember the concept I introduced in the data types section? About the concept of `booleans` and why it is important when creating decision logic for our programs. Well, in this section, we will tackle all about it and how we can use it with Python conditional statements.

Let me ask you ask you a question. When is the last time you made a decision about something? For example, choosing between what to eat for breakfast, or deciding whether to checkout your card in an e-commerce website. All of these are built upon decision -- asking question and determine your final answer.

In computer science, we often encounter this type of problem when solving computing problems or even in simple programming projects. Unfortunately, in programming, we only use `True` or `False` when add decision logic to our programs. Of course, you can make complex and combined expressions for more sophisticated logic, but for this course, we will only focus on the essentials you needed to solve any simple and basic problems.

# Conditional operators

Now, the first thing to do when adding a decision logic to our programs is to determine the question. For example, your program gets two numbers from the user. You will return the sum of of the two numbers if both are less than 10 otherwise return the product. In this example, the question you need to ask in your program is that `Are the two numbers less than 5?`. However, Python does not understand this kind question. We need the so called `conditional operators`.

The most basic set of conditional operators are your `comparison operators`. These are the `equals`, `less than`, `less than or equal to`, `greater than`, `greater than or equal to` and `not equals`. They are represented by `==`, `<`,`<=`, `>`, `>=` and `!=` respectively. Note that for the `equal` sign, we use the double `=` since variables are using the single operator.

Consider our example with the question `Are the two numbers less than 5?`. Let's show it in the code below:

```python
# Get two numbers from user
# Use int() function to convert string input to number
x = int(input("Enter number one: "))
y = int(input("Enter number two: "))

if x < 5 and y < 5:
    # Calculate sum
else:
    # Calculate the product
```

For now, focus your attention on how the `comparison operators` are being used. Conditionals in programming, in general, is somewhat scalar. Meaning, you cannot create complex comparison at once however you can join them using the `and` and `or` statements. Now, in our example, we used `and` to check both `x` and `y` forcefully (meaning two values should be less than 5).

On the other hand, if we use `or`, if `x < 5` is `True`, it will not proceed in checking the next operator. So, take not of that.

# if-elif-else statements

In Python, we use `if-elif-else` statements to make a decision logic. Right now, we know how to use the `comparison operators` and join them with `and` and `or` statements.

To add a decision logic, start with the `if` statement. This is required in the conditional statement. Now, when you want to add a fallback statement -- meaning if the condition is false, you need to do something -- try to add an `else` statement. And if you have more complex structure, you can `elif` statement. It is the same with `if` but must be added after the first `if`. To understand easily, observe the code below:

```python
x = 5

if x == 5:
    print("I am five")
```

The code above will print `I am five` since the condition is `True`.

```python
x = 6

if x == 5:
    print("I am five")
else:
    print("I am not five!")
```

The code above will print `I am not five!` since the first condition is `False` hence it execute the fallback or the `else` statement.

```python
x = 7

if x == 5:
    print("I am five")
elif x == 7:
    print("I am the lucky number 7!")
else:
    print("I am not five nor seven!")
```

The code above will print `I am the lucky number 7!` since the first condition is `False` then proceeds to the `elif` statement. Note that the `else` statement will not be executed since the condition is `True` in the `elif`.

# Try this!

Create a program that gets the age of the user. Print `You are old!` if the age is greater than or equal to 18 otherwise print `You are too young!`.

# Try this! (Solution)

```python
# Get user's age and conver to number
age = int(input("What is your age? "))

# Print if age is greater than or equal to 18
if age >= 18:
    print("You are old!")
# Otherwise
else:
    print("You are too young!")
```
