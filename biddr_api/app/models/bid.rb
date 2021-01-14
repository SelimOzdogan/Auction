class Bid < ApplicationRecord
  belongs_to :user
  belongs_to :auction

  validates(:user, presence: true)
  validates(:auction, presence: true)
  validates(:bid, presence: true)
end
