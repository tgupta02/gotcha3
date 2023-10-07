// content.js
//import axios from 'axios'
// import cheerio from 'cheerio'
// import dotenv from 'dotenv'
// const axios = require('axios');
// const cheerio = require('cheerio');
// const dotenv = require('dotenv');

// Load environment variables from .env file
//dotenv.config();

// Input statement (you can use the readline module for interactive input)
 const input_stmt = "India"; // Replace with your input
 const word = input_stmt;


//import dotenv from 'dotenv'
document.addEventListener('dblclick', function () {
 
  //import axios from 'axios'
  // const dotenv = require('dotenv');
  // dotenv.config();
    const selectedText = window.getSelection().toString().trim();
    if (selectedText !== '') {
      //alert(selectedText+"hellos");
      const url = 'https://www.google.com/search?q=${word}&tbm=isch';
    axios.get(url)
  .then((response) => {
    const content = response.data;
    const $ = cheerio.load(content);
    const images = $('img');

    const url1 = images.eq(1).attr('src');
    const url2 = images.eq(2).attr('src');
    alert(selectedText+url1);
    console.log(url1);
    console.log(url2);

  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
  }
    
  });
  

