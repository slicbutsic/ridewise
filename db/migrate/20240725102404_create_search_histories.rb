class CreateSearchHistories < ActiveRecord::Migration[7.1]
  def change
    create_table :search_histories do |t|
      t.string :pick_up_address
      t.string :drop_off_address
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
