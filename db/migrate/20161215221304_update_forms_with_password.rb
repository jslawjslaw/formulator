class UpdateFormsWithPassword < ActiveRecord::Migration[5.0]
  def change
    add_column :forms, :password_digest, :string
  end
end
