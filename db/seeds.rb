# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!([
  { username: "jslawjslaw", email: "jon@email.com", session_token: User.generate_session_token, password_digest: BCrypt::Password.create("hello6") },
  { username: "jslawjslaw2", email: "jon2@email.com", session_token: User.generate_session_token, password_digest: BCrypt::Password.create("hello6") },
])

Form.destroy_all
Form.create!([
  { title: "2016 Election Poll", description: "Please answer every question to the best of your ability", author_id: User.find_by(email: "jon@email.com").id, permanent_link: Form.generate_permanent_link, private: false },
  { title: "Demographics", description: "Please fill out your demographic information", author_id: User.find_by(email: "jon@email.com").id, permanent_link: Form.generate_permanent_link, private: false },
  { title: "Favorites", description: "What are your favorite things?", author_id: User.find_by(email: "jon@email.com").id, permanent_link: Form.generate_permanent_link, private: false },
  { title: "Survey 1", description: "This is the 1st sample survey", author_id: User.find_by(email: "jon@email.com").id, permanent_link: Form.generate_permanent_link, private: false },
  { title: "Survey 2", description: "This is the 2st sample survey", author_id: User.find_by(email: "jon@email.com").id, permanent_link: Form.generate_permanent_link, private: false },
  { title: "Survey 3", description: "This is the 3st sample survey", author_id: User.find_by(email: "jon@email.com").id, permanent_link: Form.generate_permanent_link, private: false },
  { title: "Sample form 1", description: "This is the 1st sample form", author_id: User.find_by(email: "jon@email.com").id, permanent_link: Form.generate_permanent_link, private: false },
  { title: "Sample form 2", description: "This is the 2nd sample form", author_id: User.find_by(email: "jon@email.com").id, permanent_link: Form.generate_permanent_link, private: false },
  { title: "Sample form 3", description: "This is the 3rd sample form", author_id: User.find_by(email: "jon@email.com").id, permanent_link: Form.generate_permanent_link, private: false },
  { title: "Sample form 5", description: "This is the 5th sample form", author_id: User.find_by(email: "jon2@email.com").id, permanent_link: Form.generate_permanent_link, private: false },
  { title: "Sample form 6", description: "This is the 6th sample form", author_id: User.find_by(email: "jon2@email.com").id, permanent_link: Form.generate_permanent_link, private: false },
  { title: "Sample form 7", description: "This is the 7th sample form", author_id: User.find_by(email: "jon2@email.com").id, permanent_link: Form.generate_permanent_link, private: false },
  { title: "Sample form 8", description: "This is the 8th sample form", author_id: User.find_by(email: "jon2@email.com").id, permanent_link: Form.generate_permanent_link, private: false }
])

Field.destroy_all
Field.create!([
  { field_type: "text", label: "What is your age?", form_id: Form.find_by(title: "2016 Election Poll").id, ord: 0, choices: "" },
  { field_type: "radio", label: "What party are you affiliated with?", form_id: Form.find_by(title: "2016 Election Poll").id, ord: 1, choices: "Democratic^Republic^Independent^Other^" },
  { field_type: "checkbox", label: "Do you follow politics?", form_id: Form.find_by(title: "2016 Election Poll").id, ord: 2, choices: "Yes^No^Sometimes^" },
  { field_type: "checkbox", label: "Did you vote?", form_id: Form.find_by(title: "2016 Election Poll").id, ord: 3, choices: "Yes^No^Maybe^" }
])
