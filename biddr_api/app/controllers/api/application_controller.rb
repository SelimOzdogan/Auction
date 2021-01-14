class Api::ApplicationController < ApplicationController
  skip_before_action :verify_authenticity_token

  private

  def authenticated_user!
    unless user_signed_in?
      render(json: { status: 401, errors: "You must sign in or sign up first" })
    end
  end

  def current_user
    if session[:user_id].present?
      @current_user ||= User.find_by(id: session[:user_id])
    end
  end

  def user_signed_in?
    current_user.present?
  end
end
