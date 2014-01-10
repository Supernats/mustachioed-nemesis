json.array! @gists do |gist|
  json.(gist, :id, :owner_id, :title, :created_at, :updated_at)
end