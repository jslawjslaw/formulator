json.extract! @form, :id, :title, :description, :author_id, :permanent_link, :private
json.fields do
  json.array! @form.fields do |field|
    json.partial! 'api/fields/field', field: field
  end
end
