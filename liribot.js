//import
require("dotenv").config();
const Spotify = require('node-spotify-api');
const axios = require('axios')
const fs = require('fs')
const moment = require('moment')
const keys = require("./keys.js")

//keys
let spotify = new Spotify(keys.spotify);

const [, , command, ...choice] = process.argv

//joinChoice takes the choice element in our process.argv and converts it to a string using join.
let joinChoice = choice.join(' ')

//use 'this' function to find concert

const findConcert = (band) => {
  if (joinChoice) {
    axios.get(`https://rest.bandsintown.com/artists/${band}/events?app_id=codingbootcamp`)
  
//use 'this' function to find song
const searchSong = (song) => {
  song ? song : song = 'The Sign'

//use 'this' function to find movie
//do-what-it-says function that identifies which function above needs to run
//function is identified and then runs correlated function 
//use switch case to handle multiple scenarios
//console log
