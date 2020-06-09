class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    :ends_at,
    :reserve_price,
    :created_at,
  )

  belongs_to :user
  has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes(
      :id,
      :bid,
      :created_at,
    )
    belongs_to :user, key: :bidder
  end
end
