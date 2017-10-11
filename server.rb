require 'sinatra'
require "sinatra/reloader" if development?

set :haml, :format => :html5

get '/' do
  haml :index
end

post '/do_good_post' do
end

post '/do_bad_post' do
  raise 'Oh No!'
end
