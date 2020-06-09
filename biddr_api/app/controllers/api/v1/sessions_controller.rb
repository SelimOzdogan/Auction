class Api::V1::SessionsController < Api::ApplicationController
  def create
    byebug
    user = User.find_by_email params[:email]
    if user&.authenticate params[:password]
      session[:user_id] = user.id
      render json: { id: user.id }
    else
      render(
        json: { status: 401 },
        status: 401,
      )
    end
  end

  def current
    render(json: current_user)
  end

  def destroy
    session[:user_id] = nil
    render(json: { status: 200 }, status: 200)
  end
end
