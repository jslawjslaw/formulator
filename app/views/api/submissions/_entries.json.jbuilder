json.array! submission.entries do |entry|
  json.id entry.id
  json.value entry.value
  json.field_id entry.field_id
end
