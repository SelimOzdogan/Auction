class UsersController < ApplicationController

    def users_info
        @users = User.all.order(id: :asc)
      end
end
