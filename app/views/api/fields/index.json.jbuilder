json.array! (@fields) do |field|
  json.partial! 'api/fields/field', field: field
end
