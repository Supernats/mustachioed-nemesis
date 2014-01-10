class Gist < ActiveRecord::Base
  attr_accessible :owner_id, :title
  validates :owner, :title, :presence => true
  belongs_to :owner, :class_name => "User"
  has_many :favorites
  has_many(
    :favoriters,
    :through => :favorites,
    :source => :favoriter
  )
end
