class Api::V1::AuctionsController < Api::ApplicationController
  # before_action :authenticated_user!
  before_action :find_auction, only: [:show]

  def index
    auction = Auction.order(created_at: :desc)
    render(json: auctions)
  end

  def show
  end

  def create
    auction = Auction.new auction_params
    if auction.save
      render json: { id: auction.id }
    else
      render(
        json: { errors: auction.errors },
        status: 422,
      )
    end
  end

  private

  def auction_params
    params.require(:auction).permit(:first_name, :last_name, :prefered_name, :dob, :image)
  end
  def find_auction
    auction = Auction.find params[:id]
  end
end
