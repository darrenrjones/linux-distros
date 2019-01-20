# Linux Distros

This app was created with the intended purpose of finding the most searched for Linux Distributions in a previous time span and then providing a random item from the list weighted for popularity.

## Contents

1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installing](#installing)
4. [Adding to the game](#adding-to-the-game)
5. [Built With](#built-with)
6. [License](#license)
7. [Acknowledgments](#acknowledgments)
8. [Author](#author)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

## Prerequisites

- [Nodejs](https://nodejs.org/en)

## Installing

npm install 

in terminal at root run:

npm start

Terminal should show: 

```
> linuxdistros@1.0.0 start /home/{yourPCName}/LinuxDistros
> nodemon app.js

[nodemon] 1.18.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
listening on 8008
```

Navigate in browser to : http://localhost:8008

This will display a Linux Distribution from the top 100 distros from the past 7 days as searched on [Distrowatch](https://distrowatch.com)

## Built With
- [Express](https://expressjs.com/)
- [Cheerio](https://www.npmjs.com/package/cheerio)
- [Axios](https://www.npmjs.com/package/axios)
- [Pug](https://pugjs.org/api/getting-started.html)

## License

This project is licensed under the ISC License 

## Acknowledgments

* Jerry Wardlow [github](https://github.com/jerrywardlow)

## Author: 

* **Darren Jones** - [github](https://github.com/darrenrjones) - [Portfolio](https://DarrenRaymondJones.com)
