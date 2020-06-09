class Auction < ApplicationRecord
  belongs_to :user

  has_many :bid, -> { order("created_at desc") }

  validates(:user, presence: true)
  validates(:title, presence: true)
  validates(:description, presence: true)
  validates(:reserve_price, presence: true)
end
