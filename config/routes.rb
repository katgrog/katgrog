Rails.application.routes.draw do
  root to: 'pages#show'

  get "/:page" => "pages#show"
end
