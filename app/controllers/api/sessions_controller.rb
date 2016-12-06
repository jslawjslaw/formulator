class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      log_in_user(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username or password."], status: 401
    end
  end

  def destroy
    if current_user
      log_out_user
      render json: {}
    else
      render json: ["No user to log out."], status: 404
    end
  end
end
