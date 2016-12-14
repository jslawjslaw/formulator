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

  def show
    @form = Form.find(params[:id])
    render :show
  end

  def fetch_form
    @form = Form.find_by(permanent_link: params[:permanent_link])
    render :show
  end

  def update
    @form = Form.find(params[:form][:id])
    if @form.update(form_params)
      if params[:render] == "index"
        @forms = current_user.forms
        render :index
      else
        render :show
      end
    else
      render json: @form.errors.full_messages, status: 422
    end
  end

  def destroy
    @form = Form.find(params[:id])
    @form.destroy
    @forms = current_user.forms
    render :index
  end

  private
  def form_params
    params.require(:form).permit(:title, :description, :author_id, :permanent_link, :private)
  end
end
