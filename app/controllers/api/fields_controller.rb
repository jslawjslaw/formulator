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
    @field = Field.find(params[:field][:id])
    if @field.update(field_params)
      form_id = @field.form_id
      form = Form.find(form_id)
      @fields = form.fields
      render :index
    else
      render json: @field.errors.full_messages, status: 422
    end
  end

  def update_field_ords
    @field1 = Field.find(params[:field1][:id])
    @field2 = Field.find(params[:field2][:id])
    @field1.ord, @field2.ord = @field2.ord, @field1.ord
    begin
      Field.transaction do
        [@field1, @field2].each do |field|
          Field.update(field.id, ord: field.ord)
        end
      end

      form_id = @field1.form_id
      form = Form.find(form_id)
      @fields = form.fields
      
      render :index
    rescue ActiveRecord::RecordInvalid
      render json: ["Unable to update fields."], status: 422
    end
  end

  def destroy
    @field = Field.find(params[:id])
    form_id = @field.form_id
    form = Form.find(form_id)
    @field.destroy
    @fields = form.fields
    render :index
  end

  private
  def field_params
    params.require(:field).permit(:label, :field_type, :user_instruction, :ord, :form_id, :choices)
  end
end
