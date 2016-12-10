class UpdateFields < ActiveRecord::Migration[5.0]
  def change
    rename_table :fields, :field
  end
end
