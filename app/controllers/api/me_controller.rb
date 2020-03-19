class Api::MeController < Api::BaseController
  respond_to :json

  def me
    unless current_user
      url = 'https://api.salesloft.com/v2/me'
      headers = {'Content-Type' => 'application/json', 'Authorization' => 'Bearer ' + ENV["SALESLOFT_APPLICATION_ID"]}

      response = RestClient.get(url, headers)
      result = JSON.parse(response.to_str)

      current_user = result['data']
    end

    (respond_with({ user: current_user }))
  end
end
