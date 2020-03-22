# frozen_string_literal: true

class Api::PeopleController < ApplicationController
  respond_to :json

  def people_view; end

  def freq_count_view; end

  def send_people
    page_number = params[:page_number] || 1
    response = fetch_people(page_number)

    respond_with({ people: response['data'] })
  end

  def fetch_people(page_number)
    url = "https://api.salesloft.com/v2/people.json?per_page=100&page=#{page_number}"
    headers = { 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ENV['SALESLOFT_APPLICATION_ID'] }

    JSON.parse(RestClient.get(url, headers).to_str)
  end

end
