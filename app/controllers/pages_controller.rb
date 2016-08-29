class PagesController < ApplicationController
  def show
    render template: "pages/#{params[:page] || 'home'}"
  end
end
