class CreateEntries < ActiveRecord::Migration[5.0]

  def change
    create_table :entries do |t|
      t.integer :submission_id, null: false
      t.integer :field_id, null: false
      t.text :value, array: true, default: []

      t.timestamps
    end

    add_index :entries, :submission_id
  end

end
