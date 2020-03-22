Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }

  namespace :api, defaults: { format: "json" } do
    get :me, to: 'me#me'
    get 'people/all', to: 'people#send_people'
  end

  get 'people', to: 'api/people#people_view'
  get 'people/freq-count', to: 'api/people#freq_count_view'

  root to: "main#index"
end
