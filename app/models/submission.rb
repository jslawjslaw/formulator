class Submission < ActiveRecord::Base
  validates :form, presence: true

  belongs_to(
    :form,
    class_name: :Form,
    primary_key: :id,
    foreign_key: :form_id
  )

  has_many(
    :entries,
    class_name: :Entry,
    primary_key: :id,
    foreign_key: :submission_id
  )

end
