---
title: "[Docker] One Container For All Rails5 Project"
layout: post
date: '2020-08-12 04:36:03'
categories:
- docker
- ruby
- rails
---

Alhamdulilah ada kesempatan berbagi ilmu saya yang sedikit ini dengan kawan-kawan.
Ada beberapa hal baru yang saya coba untuk tools pengembangan dengan rails5.
Langsung saja, Saya membuat sebuah folder bernama rails5_dev yang berisikan file `Dockerfile` dan `docker-compose.yml`.

Untuk `Dockerfile`
{% highlight file %} 
FROM starefossen/ruby-node:2-8-stretch #### image untuk rails 5
########## Install software yang kalian perlukan
RUN apt-get update \
 && apt-get install -y \
 apt-utils \
 build-essential \
 libpq-dev \
 libjpeg-dev \
 libpng-dev \
 nodejs \
 yarn \
 && gem install bundler
 
 WORKDIR /Project ##### workdirectory di dalam vm machine docker nya
 ####### nah ini akan mengarahkan ke entrypoint dari bash machine nya
 ####### kalo kalian menggunakan command `docker-compose up -d` maka container rails_dev
 ####### tidak akan jalan
 ENTRYPOINT [/bin/bash] 
{% endhighlight file %}

Untuk `docker-compose.yml`
{% highlight file %} 
version: '3'
networks:
  postgres_db_networks: ####untuk akses container postgre yang terpisah dari file docker-compose.yml ini
    external: true
services:
  rails_dev:
    build:
      context: .
    ports:
      - "3000:3000"  ##### port ini saya gunakan buat serve rails nyaa
      - "7658:7658"  ##### dan port ini saya gunakan untuk solargraph, lumayan vim saya ada IDE nya
		# nah ini command"rm -f tmp/pids/server.pid && rm -f /usr/local/var/postgres/postmaster.pid && bundle exec rails s -p 3000 -b '0.0.0.0'"
    volumes:
      - ~/Project:/Project     # yang sebelah kiri adalah posisi parent folder project kita dan sebelah kanan adalah posisi directory yang di vm nya docker
      - ~/.ssh:/root/.ssh      ######## biar bisa dapet ssh key di pc kita ke docker, biar deploy nya enak
    environment:
		########## environment untuk akses database
      - PGHOST=postgresql  
      - PGUSER=postgres
    networks:
      - postgres_db_networks
{% endhighlight file %}


Setelah kedua file tersebut kalian buat, masuk ke folder `rails_dev`.
Jalankan perintah `docker-compose build`,  `docker-compose run --rm --service-ports rails_dev` yang akan masuk ke folder project di vm docker kalian (--rm berfungsi menghapus container setiap selesai menggunakan container tersebut), masuk ke folder project rails kalian jalankan `bundle install` untuk menginstall gem dari project kalian.

Untuk serve rails nyaa lakukan perintah `rm -f tmp/pids/server.pid && rm -f /usr/local/var/postgres/postmaster.pid && bundle exec rails s -p 3000 -b '0.0.0.0'`.
Dan untuk menjalankan solargraph (jalankan bash di portainer pada container yang sedang berjalan, karna perintah solargraph ini listening, jadi tidak bisa dijalankan bersamaan dengan rails serve) dengan perintah `bundle exec solargraph socket --host=0.0.0.0 --port=7658`.

Notes : Pada container tersebut kita bisa menjalankan irb dan rails c.

Selamat menikmati !!!

Maaf jika tulisan ini kurang sempurna, jika ada yang kurang, silahkan telegram saya (@muhrizkiakbar), Terimakasih
