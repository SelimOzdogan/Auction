Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/users/users_info" => "users#users_info"
  resource :session, only: [:new, :create, :destroy]


  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :auctions
      
    end
  end
end
