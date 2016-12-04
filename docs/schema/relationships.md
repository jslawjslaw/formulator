# Relationship Information

## Users
have many forms.

## Forms
belong to a user.
have many fields.
have many submissions.

## Fields
belong to a form.
have many entries.
 
## Entries
belong to a field.
belong to a submission.

## Submissions
belong to a form.
have many entries.
