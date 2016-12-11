class Api::FieldsController < ApplicationController
  def create
    @field = Field.create(field_params)
    if @field.save
      render :show
    else
      render json: @field.errors.full_messages, status: 422
    end
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
    params.require(:field).permit(:label, :field_type, :user_instruction, :ord, :form_id)
  end
end
