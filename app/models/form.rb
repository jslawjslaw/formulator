# == Schema Information
#
# Table name: forms
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  description    :string           not null
#  author_id      :integer          not null
#  permanent_link :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  private        :boolean          not null
#

class Form < ActiveRecord::Base
  validates :title, :description, :user, :permanent_link, presence: true
  validates_inclusion_of :private, in: [true, false]

  belongs_to(
    :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id
  )

end
