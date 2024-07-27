class PagesController < ApplicationController
  def home
    if current_user
      redirect_to search_path
    end
  end
  def search
    @user = current_user
    @search_history = SearchHistory.new
    @search_histories = current_user.search_histories
    # raise
    # @search_history = SearchHistory.find[params[:id]]
  end

  # def new
  #   @search_history = SearchHistory.new
  # end

  # def create

  # end
end

# display pickup form
# display dropoff form
