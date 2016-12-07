class Api::FormsController < ApplicationController
  def create
    @form = Form.new(form_params)
    if @form.save
      render :show
    else
      render json: @form.errors.full_messages, status: 422
    end
  end

  def index
    @forms = current_user.forms
    render :index
  end

  def update
  end

  def destroy
  end

  private
  def form_params
    params.require(:form).permit(:title, :description, :author_id, :permanent_link, :private)
  end
end
