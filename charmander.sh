#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

function boot_vagrant {
	if [ -f $DIR/.vagrant/machines/default/virtualbox/id ];
	then
		(cd $DIR; vagrant destroy --force)
	fi
	vagrant up
}

function check_vagrant_status {
	if [ ! -f $DIR/.vagrant/machines/default/virtualbox/action_provision ];
	then
		boot_vagrant
	fi
}

if [ "$1" == "serve" ];
then
	check_vagrant_status
	(cd $DIR; vagrant ssh --command "cd /vagrant && gulp")
elif [ "$1" == "build" ];
then
	check_vagrant_status
	(cd $DIR; vagrant ssh --command "cd /vagrant && gulp jekyll")
	echo "Your built site is now located in _deploy!"
fi