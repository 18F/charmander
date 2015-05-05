# Charmander

Charmander is a simple template for producing Jekyll static sites using Vagrant, Gulp, Bourbon, Neat, Bitters, and Bower.

![Charmander](charmander.gif "char! mander! charmander!")

## Getting Started

```
$ vagrant up
$ vagrant ssh
$ cd /vagrant
$ gulp
```

This will start a process which monitors both Jekyll and your static assets for changes, and will automatically generate everything any time a change is made and notify your browser to refresh the page. The command line will return something like this:

```
[BS] Access URLs:
 -------------------------------------------
    Local: http://localhost:3000
 	External: http://10.0.2.15:3000
    Tunnel: https://ocutmjjycu.localtunnel.me
```

Using the **tunnel** URL will allow you to view your site with changes being synced in real time.

## Layout

```
app/ # Where your jekyll site goes
assets/ # Where your static assets go
```

## Todo
- Minify JS
- Set up a better Jekyll base template
- Get a dev server automatically started on vagrant up (maybe just a host-side shell script?)