class AddChoiceColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :fields, :choices, :string
  end
end
