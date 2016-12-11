class Field < ActiveRecord::Base
  validates :field_type, :label, :form_id, :ord, presence: true

  belongs_to(
    :form,
    class_name: :Form,
    primary_key: :id,
    foreign_key: :form_id
  )

end
