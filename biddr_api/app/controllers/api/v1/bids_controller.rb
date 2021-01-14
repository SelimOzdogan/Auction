class Api::V1::BidsController < Api::ApplicationController
  before_action :authenticated_user!, only: [:create]

  def create
    auction = Auction.find params[:auction_id]
    bid = Bid.new bid_params
    bid.auction = auction
    bid.user = current_user
    if bid.save
      render json: { id: bid.id }
    else
      render(
        json: { errors: bid.errors },
        status: 422,
      )
    end
  end

  private

  def bid_params
    params.require(:bid).permit(:bid)
  end
end
