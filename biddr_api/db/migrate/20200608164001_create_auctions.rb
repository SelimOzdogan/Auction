class CreateAuctions < ActiveRecord::Migration[6.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.timestamp :ends_at
      t.integer :reserve_price
      t.timestamps
    end
  end
end
