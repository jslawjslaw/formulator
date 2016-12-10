class Api::FieldsController < ApplicationController
  def create
  end

  def index
  end

  def show
  end

  def update

  end

  def destroy
  end

  private
  def field_params
    params.require(:field).permit(:label, :type, :description, :ord, :form_id)
  end
end
