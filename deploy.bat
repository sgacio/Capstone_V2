dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t coffee-clicker-image ./bin/release/netcoreapp2.2/publish

docker tag coffee-clicker-image registry.heroku.com/coffee-clicker/web

docker push registry.heroku.com/coffee-clicker/web

heroku container:release web -a coffee-clicker

# sudo chmod 755 deploy.bat
# ./deploy.sh