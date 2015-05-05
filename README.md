# Charmander

Charmander is a simple template for producing Jekyll static sites using Vagrant, Gulp, Bourbon, Neat, Bitters, and Bower.

![Charmander](charmander.gif "char! mander! charmander!")

## Getting Started

```
$ vagrant up
$ vagrant ssh
$ gulp
```

This will start a process which monitors both Jekyll and your static assets for changes, and will automatically generate everything any time a change is made and notify your browser to refresh the page.

## Layout

```
app/ # Where your jekyll site goes
assets/ # Where your static assets go
```

## Todo
- Minify JS
- Set up a better Jekyll base template
- Get Browser Sync working
- Get a dev server automatically started on vagrant up (maybe just a host-side shell script?)