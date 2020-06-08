class Auction < ApplicationRecord
  belongs_to :user
  has_many :bid, dependent: :destroy

  validates(:user, presence: true)
  validates(:title, presence: true)
  validates(:description, presence: true)
  validates(:reserve_price, presence: true)
end