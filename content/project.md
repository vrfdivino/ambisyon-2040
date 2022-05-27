---
title: 'Project'
metaTitle: 'Project / Intro to Programming'
metaDescription: 'This is the meta description'
order: 9
---

# Instruction

Now, you have the necessary skills and knowledge to build the final project of this course. You learned the fundamentals of Python programming such as I/O services, functions, data types, conditionals, loops, and basic data structures. Good job! Let's create your first ever interactive program!

For the final project, create a student record program that implements:

1. Creating a new student record with the student details such as `student_id`, `full_name`, `year_level`, and `subjects_taken` with specific subject details such as `subject_name` and `grade`.
2. Update a student record by its `student_id` but limited only to `subject_taken`. The user can only add or delete a subject.
3. Print all students with the following: `student_id`, `full_name`, `year_level`, and `average_grade` computed from all of the `subjects_taken`.
4. Delete a student by its `student_id`.

The output should look like this:

```txt
Welcome to StudentPy!

=== Menu ===
[0] Add a new student record
[1] Print all student records
[2] Update student's subjects info
[3] Delete a student record
[4] Exit
=== End of Menu ===

Enter choice: 5
Sorry, you entered incorrect choice. Try again!

=== Menu ===
[0] Add a new student record
[1] Print all student records
[2] Update student's subjects info
[3] Delete a student record
[4] Exit
=== End of Menu ===

Enter choice: 0

Enter student id: 123456789
Enter student full name: Ted Mosby
Enter year level: 9
Do you want to add a subject? [Y/n] Y
Enter subject 1 name: Intro to Programming
Enter subject 1 grade: 95
Do you want to add a subject? [Y/n] Y
Enter subject 2 name: Software Design
Enter subject 2 grade: 96
Do you want to add a subject? [Y/n] Y
Enter subject 3 name: Discrete Structures
Enter subject 3 grade: 94
Do you want to add a subject? [Y/n] n
Successfully added a new student record!

=== Menu ===
[0] Add a new student record
[1] Print all student records
[2] Update student's subjects info
[3] Delete a student record
[4] Exit
=== End of Menu ===

Enter choice: 1

Student id: 123456789
Student full name: Ted Mosby
Year level: 9
Average grade: 95.00
===

=== Menu ===
[0] Add a new student record
[1] Print all student records
[2] Update student's subjects info
[3] Delete a student record
[4] Exit
=== End of Menu ===

Enter choice: 2

Enter student id to edit: 123456789
[1] Press 1 to add a subject
[2] Press 2 to delete a subject
[3] Exit
Enter edit choice: 1
Enter subject name: Database Systems
Enter subject grade: 93
[1] Press 1 to add a subject
[2] Press 2 to delete a subject
[3] Exit
Enter edit choice: 2
Enter subject name to delete: Web Programming
Sorry, the subject does not exist to delete!
[1] Press 1 to add a subject
[2] Press 2 to delete a subject
[3] Exit
Enter edit choice: 2
Enter subject name to delete: Discrete Structures
Successfully deleted the subject!
[1] Press 1 to add a subject
[2] Press 2 to delete a subject
[3] Exit
Enter edit choice: 3

=== Menu ===
[0] Add a new student record
[1] Print all student records
[2] Update student's subjects info
[3] Delete a student record
[4] Exit
=== End of Menu ===

Enter choice: 3

Enter student id to delete: 123456789
Successfully delete a student record!

=== Menu ===
[0] Add a new student record
[1] Print all student records
[2] Update student's subjects info
[3] Delete a student record
[4] Exit
=== End of Menu ===

Enter choice: 1

No student records to print!
===

=== Menu ===
[0] Add a new student record
[1] Print all student records
[2] Update student's subjects info
[3] Delete a student record
[4] Exit
=== End of Menu ===

Enter choice: 4

Good bye!
```

# Submission

You can submit a `link` of your repl project or a `.py` extension using this [link](https://forms.gle/83onBNphq2yuESwV8)!
