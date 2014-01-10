ActiveRecord::Base.transaction do
  rory = User.create!(:username => "rory", :password => "dinosaurs")
  nathan = User.create!(:username => "nathan", :password => "password")
  Gist.create!(:owner_id => 1, :title => "hiihihihihi")
  Gist.create!(:owner_id => 1, :title => "gist gist")
  Gist.create!(:owner_id => 2, :title => "verycool verycool")
  Gist.create!(:owner_id => 2, :title => "shitfuck.")
end