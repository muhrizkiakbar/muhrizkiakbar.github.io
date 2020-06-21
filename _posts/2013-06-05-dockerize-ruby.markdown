---
title: Dockerize Ruby
layout: post
date: '2013-06-05 17:06:25 +0000'
categories:
- docker
- ruby
---

Docker ? Yup docker is tech stack that i usually use for development. why? cause docker is good for managing container, light technology and versioning tech.

If you want to know about docker, just read[ this page](https://www.docker.com/).

Dont forget to install Docker-compose and virtual box to your PC.

After that, you must make a Folder for Your Project and make 2 file Docker for your Project.

Dockerfile
{% highlight file %}

FROM starefossen/ruby-node:2-8-stretch

RUN apt-get update -qq && \
apt-get install -y nano build-essential libpq-dev && \
gem install bundler

{% endhighlight file %}

docker-compose.yml
{% highlight file %}
	
version: '3'
  services:
  app:
   build:
    context: .
     dockerfile: Dockerfile
   volumes:
     - .:/rubyc

{% endhighlight file %}
<br>
run `docker-compose build` to install requirement images.
after that, run `docker-compose up -d` to build containers and run containers.

try to make simple file ruby to your project folder. example, try.rb

{% highlight ruby %}

# try.rb

puts "Hello dev!"

{% endhighlight ruby %}

to run that ruby file, run this command `docker-compose run app "/bin/bash"`.
go to your project folder, and run the script using `ruby try.irb`.
