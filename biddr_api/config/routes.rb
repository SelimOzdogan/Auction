Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/users/users_info" => "users#users_info"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :auctions do
        resources :bids, shallow: true, only: [:new, :create]
      end
      resource :session, only: [:new, :create, :destroy]
      get("/users/current", to: "sessions#current")
    end
  end
end
