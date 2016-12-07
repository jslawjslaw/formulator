class CreateForms < ActiveRecord::Migration[5.0]
  def change
    create_table :forms do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :author_id, null: false
      t.string :permanent_link, null: false
      t.string :title_link, null: false

      t.timestamps
    end

    add_index :forms, :author_id
  end
end
