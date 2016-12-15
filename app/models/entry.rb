class Entry < ActiveRecord::Base
  validates :submission, :field, :value, presence: true

  belongs_to(
    :submission,
    class_name: :Submission,
    primary_key: :id,
    foreign_key: :submission_id
  )

  belongs_to(
    :field,
    class_name: :Field,
    primary_key: :id,
    foreign_key: :field_id
  )

  def self.create_entries(submission_id, entries)
    begin
      Entry.transaction do
        entries.each do |key, entry|
          unless entry.is_a?(Array)
            entry = [entry]
          end
          entry = Entry.new(submission_id: submission_id, field_id: key, value: entry)
          entry.save!
        end
      end

      true
    rescue ActiveRecord::RecordInvalid
      false
    end
  end
end
