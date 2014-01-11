json.array! @gists do |gist|
  json.(gist, :id, :owner_id, :title, :created_at, :updated_at)
  json.favorites gist.favorites do |favorite|
    json.(favorite, :gist_id, :user_id, :id, :created_at)
  end
end