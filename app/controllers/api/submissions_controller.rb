class Api::SubmissionsController < ApplicationController
  def create
    @submission = Submission.new(form_id: params[:formId].to_i)
    if @submission.save
      if Entry.create_entries(@submission.id, params[:values])
        render json: ['Thanks for your submission!']
      else
        @submission.destroy
        render json: ['Unable to submit form'], status: 422
      end
    else
      render json: ['Unable to submit form'], status: 422
    end
  end

  def index
    @submissions = Submission.where(form_id: params[:form_id].to_i)
    render :index
  end
end
