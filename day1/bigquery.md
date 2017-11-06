# Use Google BigQuery to query large datasets

The SQL language is supported by many tools. In particular, Google has a tool
called BigQuery that allows you to run SQL queries against very, very large
datasets.

We're going to be playing a database of names given to babies between the years
1910 and 2013 in the US.
[Check out the schema on Google BigTable](https://bigquery.cloud.google.com/table/bigquery-public-data:usa_names.usa_1910_2013?pli=1).

For example the following row means there were 5 boys born in Alaska with the
name `Edward` in 1910:

| state | gender | year | name | number |
| ----- | ------ | ---- | ---- | ------ |
| AK    | M | 1910 | Edward | 5 |
