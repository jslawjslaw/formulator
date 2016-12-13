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
  { title: "Sample form 1", description: "this is my first sample form", author_id: User.all.first.id, permanent_link: "random_url_here", private: false },
  { title: "Sample form 2", description: "this is my second sample form", author_id: User.all.last.id, permanent_link: "random_url_here2", private: false },
  { title: "3rd form", description: "this is my third sample form", author_id: User.all.first.id, permanent_link: "random_url_here3", private: false }
])

Field.destroy_all
