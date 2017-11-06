# Normalization

## What's normalization?

Normalization is the practice of structuring data in SQL databases so that there
is one and only one place where each piece of data is stored. In other words,
normalizing your schema means eliminating data duplication.

Let's say we're building a web app for a public comment board. Our application
needs to store registered users and their comments. We also want to be able to
display the first and last name of a commenter along with their comments.
We could build our schema like so:

`users` table contains:

- `id`: auto generated user id
- `email`: email of user
- `first_name`: first name of user
- `last_name`: last name of user
- `password`: password of user

`comments` table contains:

- `id`: post id
- `author_first_name`: first name of the user who posted this comment
- `author_last_name`: last name of the user who posted this comment
- `comment_date`: date when post was written
- `contents`: the contents of the comment

There are a few problems with this. If a user decided to change their first or
last name, we would need to find all comments they have ever posted and update
them. Or say we decide to display email addresses along comments, we would have
to add `author_email` to the `comments` table then populate it.

These problems stem from the fact that our schema is **not normalized**.
The `first_name` and `last_name` for a given author is stored in multiple
places and we have to painstakingly keep all those locations consistent.

In a normalized schema there is one and only one location where a each piece
of data is stored. Here's how we can normalize this schema:

Normalized `comments` table would now contain (`users` table stays the same):

- `id`: post id
- `author_id`: id of the user who posted this comment
- `comment_date`: date when post was written
- `contents`: the contents of the comment

We can then use a `JOIN` query to read the comments and their authors at the
same time:

```sql
SELECT comments.contents, users.first_name, users.last_name
    FROM comments
    JOIN users
        ON comments.author_id = users.id;
```

Now if we want to pick out the email address it's as easy as adding another
column to our `SELECT` statement:

```sql
SELECT comments.contents, users.first_name, users.last_name, users.email
    FROM comments
    JOIN users
        ON comments.author_id = users.id;
```

---

## Designing normalized schemas

To design a normalized schema you have to know two things:

1. What entities
1. What relationships

## One-to-one relationships

## One-to-many relationships

TODO

## Many-to-many relationships

TODO

---

# Normalize this schema

---

## PokeBay

- Instagram: get followers, get following
- (bonus) Facebook?
- message board
- product listings on amazon where a single product can have many subproducts each with a different color and price
- Kickstarter where user can “fave” projects
- bonus: hierarchical comments, each comment can have a parent
- double bonus: given a parent comment query all descendants
- course has a single professor
- course can have multiple students, student can have multiple courses

---

Exercises

1. Amazon where products have subproducts, product categories

    Give a Schema where info is duplicated

    Must be able to rename a product by updating a single row on a single table

    Must be able to get all products for a given type

    Must be able to modify the price of a single subproduct

1. Give a bad schema for instagram

    User: followers, following columns

    Fix this so we can make a user follow another user by inserting a single row into a single table (no updates)

    Bonus: given a user, find all people user is following who don’t follow back

1. Designa schema for kickstarter where there are projects and users, every user can contribute to 0 or more projects, every project can have 0 or more contributors

    Get all project that a user had contributed

    Get all users who have contributed to a project

    Get total contributions to a project

    User can make a contribution to a project by inserting a single row into a single table (no updates to other tables allowed)

1. Design a course catalog schema for a school where there are courses, professors and students.  Each course has a single professor. Each professor can teach multiple courses. Each course can have multiple students in it and each student can take multiple courses

    Student can join a course by inserting a single row into a single table

    You can change the professor of a course by updating a single column of a single table

    You can list all students taking a course

    You can list all courses a student is taking

1. Bonus: design a schma for hierarchical comment threads. In a hierarchical comment thread, each comment can have replies and each reply can have replies of its own. Your schema should be able to

    Double bonus: write a query to get all subreplies for a given comment (replies, replies to replies, replies to replies to replies etc.)
