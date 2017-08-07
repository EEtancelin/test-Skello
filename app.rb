require "sinatra"
require "sinatra/reloader" if development?
require_relative "database"

#js = "home.js" in this file and <%= "<script src=\"/#{@js}\"></script>" if @js %> in layout.erb
#Allow loading of each page JS after all the JS be loaded.

get "/" do
  @database = DB
  @comments = COMMENTS
  @js = "home.js"

  erb :index
end
