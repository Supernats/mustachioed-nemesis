json.array! @favorites do |favorite|
  json.(favorite, :gist_id, :user_id, :id, :created_at)
end