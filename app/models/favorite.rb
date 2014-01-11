class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id

  validates :gist, :favoriter, :presence => true
  validates :gist_id, :uniqueness => { :scope => :user_id }

  belongs_to :gist
  belongs_to(
    :favoriter,
    :foreign_key => :user_id,
    :class_name => "User"
  )
end
