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
