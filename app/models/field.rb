class Field < ActiveRecord::Base
  validates :field_type, :label, :form_id, :ord, presence: true

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
    foreign_key: :field_id,
    dependent: :destroy
  )

end
