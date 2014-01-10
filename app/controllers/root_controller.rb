class RootController < ApplicationController
  before_filter :require_current_user!

  def root
    # kick off single page app
  end
end
