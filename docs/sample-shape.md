```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    1: {
      title: "Form Title",
      description: "this is a sample form",
      author_id: 1,
      permanent_link: "/sample/url"
      title_link: "/sample/title/url"
      private: false,
      fields: {
        1: {
          id: 1
          type: "Input"
      	  label: "Text goes here"
      	  user_instruction: ""
        }
	      2: {
          id: 2
          type: "Select"
      	  label: "Option 1"
      	  user_instruction: "sample user instruction"
	      }
      }
    }
  },
  submissions: {
    1: {
      id: 1,
      form_id: 1
      entries: {
      	1: {
      	  id: 1,
      	  field_id: 1,
      	  value: "User input"
      	}
      	2: {
      	  id: 2,
      	  field_id: 2,
      	  value: "Other user input"
      	}
      }
    }
  }
}
```
