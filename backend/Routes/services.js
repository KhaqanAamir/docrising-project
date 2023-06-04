const express=require('express');
const router= express.Router();
const axios = require('axios');
const cheerio = require('cheerio');


router.get('/api/anxiety-data', async (req, res) => {
    try {
      const response = await axios.get('https://www.healthline.com/health/anxiety');
      const parsedData = parseAnxietyData(response.data);
      res.json(parsedData);
    } catch (error) {
      console.error('Error fetching anxiety data:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

  const parseAnxietyData = (html) => {
    const $ = cheerio.load(html);
  
    // Extract the relevant information using selectors
    const title = $('h1').text().trim();
    const paragraphs = $('.css-0, .css-17aigah')
    .find('p')
    .map((_, element) => $(element).text())
    .get();

  
  
    return { title, paragraphs };
  };

  module.exports= router;