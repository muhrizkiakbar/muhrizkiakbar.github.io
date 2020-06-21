---
title: Dockerize Rails [ID]
layout: post
date: '2020-06-21 13:41:40'
categories:
- docker
- rails
---

Hello, kali ini saya share pake bahasa indonesia aja yaa. Otak lg pegel mikir pake bahasa inggri, tapi nanti akan upload yang english juga.

Sebelum memulai, kalian install Docker dan docker-compose kaya di [tutorial](https://muhrizkiakbar.github.io/2013/06/05/dockerize-ruby/) ini.<br>

Jangan lupa buat dan masuk ke folder proyek kalian (your_project).<br>

# Dockerfile

Untuk, `Dockerfile` nya seperti ini.

{% highlight file %}
FROM starefossen/ruby-node:2-8-stretch

#Install the software you need
RUN apt-get update \
&& apt-get install -y \
apt-utils \
build-essential \
libpq-dev \
libjpeg-dev \
libpng-dev \
nodejs \
yarn \
telnetd \
&& gem install bundler


#Copy the files needed for the bundle install
COPY ./Gemfile /your_project/Gemfile
COPY ./Gemfile.lock /your_project/Gemfile.lock

#Set the working directory for all following commands
WORKDIR /your_project

#RUN Bundle install
RUN bundle install

#depend on server IP
ENV DEFAULT_URL http://localhost:3000

{% endhighlight file %}

<br>
# docker-compose.yml

kemudian untuk `docker-compose.yml`

{% highlight file %}


#Set docker-compose version
version: '3'
networks:
  db_networks:
    driver: bridge
services:
  db: #untuk pengaturan database
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=
    volumes:
      - ./data:/var/lib/postgresql/data #ini untuk penyimpanan data, biar isi database nya tidak hilang ketika build ulang atau restart container (CMIW)

    image: postgres
    networks:
      - db_networks #si container ini menggunakan jaringan db_network

  db_admin:
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: ${PGADMIN_DEFAULT_EMAIL:-pgadmin4@pgadmin.org}
      PGADMIN_DEFAULT_PASSWORD: ${PGADMIN_DEFAULT_PASSWORD:-admin}
    volumes:
      - ./data:/var/lib/pgadmin/data
    ports:
      - "${PGADMIN_PORT:-5050}:80"
    networks:
      - db_networks #nah ini biar si pgadmin terhubung dengan pgsql
    restart: unless-stopped

  redis:
    ports:
      - "6379:6379"
    links:
      - db
    image: redis:5.0-rc


  web:
    build:
      context: .
    ports:
      - "3000:3000"
    command: bash -c "rm -f tmp/pids/server.pid && rm -f /usr/local/var/postgres/postmaster.pid && bundle exec rails s -p 3000 -b '0.0.0.0'" #untuk melakukan perintah pada saat container pertama kali jalan
    volumes:
      - .:/your_project
      - ~/.ssh:/root/.ssh #untuk ngambil ssh key di pc kita, biar deploy bisa repo private
    environment:
      - PGHOST=db #nah pada host ini harus di setting db atau 0.0.0.0
      - PGUSER=postgres
    depends_on:
      - db
      - redis
    networks:
      - db_networks

	#pemanis untuk visual code biar berasa kaya IDE wkwkwk
  solar:
    build: .
    image: sourcegraph/codeintel-ruby
    command: 'bundle exec solargraph socket --host=0.0.0.0 --port=7658'
    working_dir: /your_project
    volumes:
      - .:/your_project
    ports:
      - "7658:7658"

{% endhighlight file %}

# Gemfile and Gemfile.lock

setelah itu saat nya membuat file  `Gemfile` dan `Gemfile.lock`.<br>

tuliskan syntax di bawah pada `Gemfile`<br>
{% highlight file %}

source 'https://rubygems.org'
gem 'rails', '~>5'

{% endhighlight file %}

biarkan kosong untuk file `Gemfile.lock`.<br>

lakukan perintah `docker-compose build` kemudian build dan jalankan container pada project tersebut dengan perintah  `docker-compose up -d`<br>

# Let generate !

lalu tuliskan perintah ini di folder proyek kalian `docker-compose run --user $(id -u):$(id -g) web rails new . --force --database=postgresql --skip-bundle`.<br>
jalankan ulang containernya.<br>
**setting rails database yml nya. untuk host gunakan db atau 0.0.0.0**

Enjoy it !
