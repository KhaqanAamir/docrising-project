const express=require('express');
const router= express.Router();
const axios = require('axios');
const cheerio = require('cheerio');


router.get('/api/anxiety-data', async (req, res) => {
    try {
      const response = await axios.get('https://connect.xytal.com/xytal-new-to-partnership-programme-sign-up-june-and-september-2023?utm_term=uk%20nhs&utm_campaign=N2P+Jun+%2B+Sept+%2723&utm_source=adwords&utm_medium=ppc&hsa_acc=1961815498&hsa_cam=20195834156&hsa_grp=149754354379&hsa_ad=659936293163&hsa_src=g&hsa_tgt=kwd-298818559106&hsa_kw=uk%20nhs&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwg-GjBhBnEiwAMUvNWy7Qkp-5CXXf24yvu9BJwaJGiIpbPMSB3PPMcE6IeO9K_4BmfVEFtBoChykQAvD_BwE');
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