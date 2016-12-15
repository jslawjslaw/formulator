@submissions.each do |submission|
  json.set! submission.id do
      json.partial! 'api/submissions/entries', submission: submission
  end
end
