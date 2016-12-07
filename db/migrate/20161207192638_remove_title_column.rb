class RemoveTitleColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :forms, :title_link
  end
end
