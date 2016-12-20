# Formulator

[Formulator Live][heroku]

[heroku]: http://formulator.herokuapp.com/

Formulator is a full-stack web application inspired by Wufoo. The back-end is built on Ruby on Rails, and a PostgreSQL database, and the front-end uses React.js with a Redux architectural framework.

## Features & Implementation

### Forms

On the database side, forms are store in a single table. When a user logs in, an API request is made to fetch the forms that belong to the logged in user. These are displayed in a table on the form manager page and can be searched with the searchbar in the top-right corner of the table.

Forms can be created or updated. The current app state requires that forms be created before any fields can be created. This is due to the fact that fields belong to a form, hence, they cannot belong to an undefined, or nonexistent form.

Any form updates are done on the form builder page. This page allows you to edit the form title, description, and privacy options. A permanent link for the form is automatically generated for users on the back-end when the form is first created. Users cannot modify this link.

Private forms can be password protected, so that they can be shared only with individuals who have the password.

### Fields

Fields belong to forms and can have choices if they have field types of select, checkbox, or radio. It is also possible to add text and textarea fields to end user forms. Fields can be created, updated or deleted on the form builder field settings tab.

### Choices

Currently, choices are a caret separated list in the fields table. The choice value corresponds with the label it is assigned. With the wisdom of hindsight choices should have been a separate table with the following specifications:

column name     | data type | details
----------------|-----------|--------------------------
id              | integer   | not null, primary key
field_id        | string    | not null, foreign_key
label           | string    | not null
value           | string    | not null

This would have avoided the need for some complex logic to render the choices appropriately.

### Submissions

Submissions belong to a form and represent one row in the submissions table on the results view page. When an end user clicks submit on the form page, the database creates a submission, as well as a number of entries. This process happens within a transaction so that if any part of the creation process fails, the database rolls back updates made before the failure.

### Entries

Entries are the user responses to every field in the form. Hence, they belong to a field and they belong to a specific submission. Every cell in the submission results table corresponds to a single entry in the database.

## Future Features/Endeavors

Wufoo has a multitude of features that could still be implemented on Formulator. The most important ones that I will continue to work on are the following:

### Drag and Drop Ordering of Fields

Being able to order the form fields as you desire is a standard feature of Wufoo. I plan to use the React DnD component from Gaearon to implement this functionality. Dragging the field from one spot to another will trigger an update in the database changing the ord columns of the fields affected by this action.

### Additional Fields to Add

Allow end users the ability to add the following field types:
1. Name
2. Address
3. Date
4. Email
5. Time
6. Phone Number
7. Website

This entails adding handling logic on the front-end to create these field types appropriately.

### More Options to Control Form and Field Style

Additional form options:
1. Confirmation email and customizable message
2. Only allow one entry per IP
3. Turn form off after certain amount of entries

Additional field options:
1. CSS styling capabilities
2. Allowing predefined values
3. Ability to display multiple choice and checkbox fields vertically or horizontally

### Option to Graph or Export Submission Results

Currently, each submission creates a row on the form's submission table. However, there is no way to view the results outside of this table. It would be nice if end users could plot field values to their liking.

### Ability to Delete Submissions

This is self-explanatory.
