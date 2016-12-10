class UpdateFieldsAgain < ActiveRecord::Migration[5.0]
  def change
    rename_table :field, :fields
  end
end
