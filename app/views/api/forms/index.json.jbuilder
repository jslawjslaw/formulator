@forms.each do |form|
  json.set! form.id do
    json.extract! form, :title, :description, :author_id, :permanent_link, :private, :id
  end
end
