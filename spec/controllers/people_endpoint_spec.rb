# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Pople endpoint', :type => :request do
  let(:page_number) { nil }
  let(:request_url) { "/api/people/all/#{page_number}" }
  let(:request_headers) { { CONTENT_TYPE: 'application/json', ACCEPT: 'application/json' } }
  subject do
    get request_url, headers: request_headers
    response
  end

  describe 'Fetch people from Salesloft API' do

    it 'without page number' do
      expect(subject.status).to eq(200)
      expect(subject.content_type).to eq('application/json')
      expect(subject.parsed_body['people'].count).to eq(100)
    end

    context 'with valid page number' do
      let(:page_number) { 4 }

      it do
        expect(subject.status).to eq(200)
        expect(subject.content_type).to eq('application/json')
        expect(subject.parsed_body['people'].count).to eq(51)
      end
    end

    context 'with invalid page number' do
      let(:page_number) { 'algo' }

      it do
        expect(subject.status).to eq(200)
        expect(subject.content_type).to eq('application/json')
        expect(subject.parsed_body['people'].count).to eq(100)
      end
    end

    context 'with page number out of the range' do
      let(:page_number) { 10 }

      it do
        expect(subject.status).to eq(200)
        expect(subject.content_type).to eq('application/json')
        expect(subject.parsed_body['people']).to eq([])
      end
    end
  end
end