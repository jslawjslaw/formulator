class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :require_signed_in_user!, :log_out_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in_user(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def log_out_user
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_signed_in_user!
    redirect_to new_session_url unless signed_in?
  end
end
