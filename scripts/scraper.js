const cheerio = require("cheerio");
const axios = require("axios");
 module.exports = {
    scraper: ()=>{
      return  axios.get("https://www.nytimes.com/section/world?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=World&WT.nav=page").then(function(response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            let $ = cheerio.load(response.data);
            let results = [];
            // Now, we grab every h2 within an article tag, and do the following:
            $(".story-body").each(function(i, element) {
                
              // Add the text and href of every link, and save them as properties of the result object
              let title = $(element)
                .find(".headline")
                .text().trim();
             let link = $(element)
                .children("a").attr("href");
                let summary = $(element)
                .find(".summary").text();
        
              // Create a new Article using the `result` object built from scraping
              results.push({
                title: title,
                link: link,
                summary: summary
              });
              
            });
            return results;
            // If we were able to successfully scrape and save an Article, send a message to the client
          });      
    } 
 }


   