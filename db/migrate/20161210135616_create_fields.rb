class CreateFields < ActiveRecord::Migration[5.0]
  def change
    create_table :fields do |t|
      t.string :type, null: false
      t.string :label, null: false
      t.string :user_instruction
      t.integer :form_id, null: false
      t.integer :ord, null: false

      t.timestamps
    end

    add_index :fields, :form_id
  end
end
