class Auction < ApplicationRecord
  has_many :bis, dependent: :destroy
end
