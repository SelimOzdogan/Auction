class Api::V1::AuctionsController < Api::ApplicationController
  before_action :authenticated_user!, only: [:create]
  before_action :find_auction, only: [:show]

  def index
    auctions = Auction.order(created_at: :desc)
    render(json: auctions)
  end

  def show
    if @auction
      render(
        json: @auction,
        # include:[:bids]
        include: [:bid]

      )
    else
      render(json: { error: "Auction Not Found" })
    end
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
    params.require(:auction).permit(:title, :description, :ends_at, :reserve_price)
  end

  def find_auction
    @auction = Auction.find params[:id]
  end
end
