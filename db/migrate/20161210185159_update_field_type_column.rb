class UpdateFieldTypeColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :fields, :type, :field_type
  end
end
