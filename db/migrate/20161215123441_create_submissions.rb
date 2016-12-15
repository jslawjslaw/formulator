class CreateSubmissions < ActiveRecord::Migration[5.0]
  def change
    create_table :submissions do |t|
      t.integer :form_id, null: false

      t.timestamps
    end

    add_index :submissions, :form_id
  end
end
