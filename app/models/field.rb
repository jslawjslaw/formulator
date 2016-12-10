class Field < ActiveRecord::Base
  validates :type, :label, :form_id, :ord, presence: true

  belongs(
    :form,
    class_name: :Form,
    primary_key: :id,
    foreign_key: :form_id
  )

end
