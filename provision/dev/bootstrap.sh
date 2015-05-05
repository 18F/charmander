#!/usr/bin/env bash
sudo apt-get update -y
sudo apt-get install build-essential -y
sudo apt-get install ruby ruby-dev make gcc -y
sudo apt-get install git -y

curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
sudo apt-get install nodejs -y
sudo apt-get install npm -y

npm install --global gulp
npm install --save-dev gulp
sudo npm install --global bower

sudo gem install jekyll --no-rdoc --no-ri

sudo su vagrant <<'EOF'
cd /vagrant
bower install
npm install
EOF