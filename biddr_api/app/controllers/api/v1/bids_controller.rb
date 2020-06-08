class Api::V1::BidsController < Api::ApplicationController
  before_action :authenticated_user!, only: [:create]

  def create
    auction = Auction.find params[:auction_id]
    bid = Bid.new(auction: auction, bid: params[:bid])
    bid.save
  end
end
