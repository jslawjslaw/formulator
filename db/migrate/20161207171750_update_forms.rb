class UpdateForms < ActiveRecord::Migration[5.0]
  def change
    add_column :forms, :private, :boolean
  end
end
