# Normalization

## What's normalization?

Normalization is the practice of structuring data in SQL databases so that there
is a one and only one place where each piece of data is stored. In other words,
normalizing your schema means eliminating data duplication.

Let's say we're building something like a public comment board. There are two
tables `users` and `comments`. `users` contains the list of registered users.
`comments` contains all comments. We want to display the first and
last name of the person who wrote each comment so let's say we design our
schema like this:

`users` table contains:

- `id`: user id
- `email`
- `first_name`
- `last_name`
- `password`

`comments` table contains:

- `id`: post id
- `author_first_name`
- `author_last_name`
- `comment_date`: date when post was written
- `contents`: the contents of the comment

There are a few problems with this schema. If a user decided to change their
first or last name, we would need to find all comments they have ever posted
and update them. Or say we decide to display email addresses along comments,
we would have to add `author_email` to the `comments` table.

These problems stem from the fact that our schema is **not normalized**.
The `first_name` and `last_name` for a given author is stored in multiple
places and we have to painstakingly keep all those locations consistent.

In a normalized schema there is one and only one location where a each piece
of data is stored. Here's how we can normalize this schema:

Normalized `users` table stays the same.

Normalized `comments` table would contain:

- `id`: post id
- `author_id`
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

Now if we want to pick out the email address

```sql
SELECT comments.contents, users.first_name, users.last_name, users.email
    FROM comments
    JOIN users
        ON comments.author_id = users.id;
```

---

# Design a schema

---

# Normalize this schema

---

## PokeBay
