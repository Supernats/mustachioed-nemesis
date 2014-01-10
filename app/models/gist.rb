class Gist < ActiveRecord::Base
  attr_accessible :owner_id, :title
  validates :owner, :title, :presence => true
  belongs_to :owner, :class_name => "User"
end