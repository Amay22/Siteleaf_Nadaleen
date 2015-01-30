# Siteleaf_test_CMS

Basic test for siteleaf

## Introduction

Siteleaf is cloud-based Content Management System (CMS) system. It is not like a traditional CMS which only allow creating, editing, modifying and publishing; it also manages workflow by automating certain processes internally. It uses Liquid templates for the dynamic content. The entire concept of siteleaf is to host blogs or webpages by normal users who don’t know much about coding. It publishes static HTML files which are fast and easily portable. The siteleaf website is very user-friendly and has a great user interface for anyone who wants to publish a website. Siteleaf even supports SFTP (Secure or SSH File Transfer Protocol) along with FTP, Amazon S3, Rackspace Cloud Files, GitHub Pages and their very own Siteleaf Hosting at [siteleaf](http://www.siteleaf.com) 

## Installation
There is an easy sign up form which is free for developers and it allows only to create and not publish at [siteleaf](https://manage.siteleaf.com/signup)

First install Siteleaf gem:

	gem install siteleaf


## Creating a New Website

Now to deploy these websites locally that we create we need to setup a localhost server and siteleaf API takes care of that but it all needs to be in sync with that with what is actually being hosted.
Start off by just creating a new site locally by:

	siteleaf new amay.com

The console might ask for email and password verification the first time around. This command will create a local folder with config.ru already made.

## Existing Website

To configure an existing website 

	siteleaf config amay.com

Note: Always go in the local directory:

	cd amay.com



Before Deploying

Make sure there’s one webpage that is homepage on the server. Simply login onto the siteleaf website and make a webpage in amay.com.

Make sure that the local folder has default.html and style.css present and if not then pull it from the siteleaf server by:

	siteleaf pull theme


Note: if you get SSL error you could either install the certificates based upon your system from this link http://railsapps.github.io/openssl-certificate-verify-failed.html.

Or you can totally save yourself from the hassle by just adding the default.html and style.css from this repo. 


## Publish theme to siteleaf server

To push all your files which include images, html files, stylesheest, javascript, sass etc. use:
	
	Siteleaf push theme

## Deploy Locally

To deploy locally start the server with the following command.

	Siteleaf server

Now just open http://localhost:9292  and you’ll see the default page or wherever the default page points to.

## Switch Users.

When using siteleaf only once the login is required i.e. email and password. But if you wanna switch users then this command can be used:

	Siteleaf auth

## Using this gem in Ruby Application

To use this gem in your application, add the following to your Gemfile:

	gem 'siteleaf', :git => 'git://github.com/siteleaf/siteleaf-gem.git'

To get a good look at the API and the discussion above please visit the following link: https://github.com/siteleaf/siteleaf-gem
