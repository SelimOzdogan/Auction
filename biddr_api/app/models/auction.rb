class Auction < ApplicationRecord
    belongs_to :user
    has_many :bid, dependent: :destroy
end
