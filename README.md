# README

## Overview

This app shortens urls, inputted by the user.
Any user can load the app and input the url. The app will generate a unique shortened url, which will redirect to the original URL.

## Server and MVC

The server-side of the app, which was built using Ruby on Rails, is in another repository, [found here](https://github.com/francosta/url-shortener-server).
There is only one model, `Url` for which a REST API was set up. The main endpoint for the API is `http://localhost:3000/urls` The model has controllers for `index`, `show` and `create`.

## Client

This repository contains all files that make up the client-side of the app, which was built in vanilla Javascript, HTML and CSS.

## CORS policy

For development purposes, the CORS policy was set to allow requests from all servers.

## Initialization

In the root directory of this repository:

- Follow the instructions in the [server-side repository](https://github.com/francosta/url-shortener-server) to start the server.
- Clone this repository to your machine.
- From the main directory, run `open index.html` to start the app.
