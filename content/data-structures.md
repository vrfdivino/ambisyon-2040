---
title: 'Data Structures'
metaTitle: 'Data Structures / Intro to Programming'
metaDescription: 'This is the meta description'
order: 8
---

# Concept

We all now have the knowledge of implementing a program structure -- from data types and functions to conditionals and loops. In this section, we will tackle one of the most important concept in programming -- the concept of handling data.

Why do we learn computer science? It boils down to data and circuitry. Using our hardware, we should be able to compute data and develop software for the users. This is why data handling and management should be implemented properly.

So, what is a `data structure`? From the term itself, we should be able to structure our data correctly, efficiently, and effective. With right usage of data structure, our computers should be able to perform well in handling computation.

For this course, I will now tackle all about data structures. I will only teach the most used for beginners that will help you learn fundamentals about it. You can even use it with the other programming languages -- of course, the syntax will be different.

# list

The first data structure we are going to discuss is the `list`. You heard it right! A `list` data structure behaves like a normal list -- let's say a todo list. You can store a series of todo, remove a todo, insert a todo, and the like. This is one of the most important data structures every programmers should learn. To use a list, observe the code below:

```python
# A list of todo items
todos = ["do laundry", "do homework", "finish other task"]
```

Making a `list` is easy. Just enclose your collection of data with square brackets. Now, to access items in the list, we use the `index` notation. Observe the code below,

```python
todos = ["do laundry", "do homework", "finish other task"]

todo_1 = todos[0]
todo_2 = todos[1]

# Example to change the value in item 3
todos[2] = "this should be modified"

print(todos)
```

To access the first element, we start by `0`, then so on and so forth. Weird, right? This is common in most programming languages so take note of it.

You can also dynamically add or remove items in the `list`. There are more [list methods](https://www.w3schools.com/python/python_ref_list.asp) you can check out! But, for the basics, I will just discuss the `append` and `remove` methods.

```python
# An empty todo list
todos = []

# Add items
todos.append("My new todo")
todos.append("My another todo")
todos.append("This should be deleted later")

# Delete the recently inserted
todos.remove("This should be deleted later")
```

The `append` method will add a new item in the `list` while the `remove` method will remove item in the list. Try to expirement more about these methods!

# dict

The `dict` or `dictionary` is `key-value pair` data structure in Python. Unlike with `list`, where it uses number to index, you can define your own `key` aka index with dictionaries. Let's try to implement the todos item from the previous example using `dict`.

```python
# A dictionary todos
todos = {
    'first-todo': 'This is my todo',
    'second-todo': 'This is my second todo'
}

# Access
print(todos['first-todo'])

# Change
todos['second-todo'] = 'Modified!'
```

You got it right! It is just like `list` but you have the power to in accessing the items in your `dict`. Let's try a complex one!

```python

# a list of students
students = [
    {
        'name': 'Ted Mosby',
        'year_level': 10,
        'subjects': ['math', 'science']
    },
    {
        'name': 'Marshall Eriksen',
        'year_level': 9
        'subjects': ['filipino', 'science']
    },
]

# print each student
for student in students:
    print('Name:', student.get('name'))
    print('Year level:', student.get('year_level'))
    print('Subjects taken:', student.get('subjects'))
```

Amazing, right! You can also use `list` and `dict` in combination with one another. A quick tip, a better way to access the item in the dictionary is by using the `get` method. But, you can also use the `indexing` -- both works well!

# Try this!

Create a program that asks for user info like username, age, and birthday. The program should run until you said so. Just like above, store it as a list of `users`.

# Try this! (Solution)

```python
# Start with empty users
users = []

# Run until you said so
while True:
    do_exit = input("Do you want to exit? [Y/n] ")
    if do_exit == "Y":
        break
    else:
        # Print all users
        print("You have the following users:")
        for user in users:
            print("Username:", user.get("username"))
            print("Age:", user.get("age"))
            print("Birthday:", user.get("birthday"))
            print()

        # Ask user info
        username = input("Enter username: ")
        age = int(input("Enter age: "))
        birthday = input("Enter age (DD/MM/YYYY): ")

        # Store user in users
        new_user = {
            'username': username,
            'age': age,
            'birthday': birthday
        }
        users.append(new_usere)

# Exit
print("Good bye!")
```
