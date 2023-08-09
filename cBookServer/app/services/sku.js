// This provides the functions for retrieving the data asked for 
// through http requests
// first, the sku is used to search the provided xml document and the corresponding URL
// is retrieved.
// Then, using Axios, the page at the provided url is retrieved.
// This is parsed using the Cheerio library and the page's relevant information
// is taken using appropriate classnames.
// These values are returned along with an error code to tell downstream functions
// whether the data was successfully retrieved or not.

const helper = require("../helper.js")
const axios = require("axios");
const cheerio = require("cheerio");


async function get(sku) 
{
    const url = helper.getUrlFromSKU(sku);
    // status -2 is 'sku not found', 
    // status -1 is 'product not found',
    // status 1 is success
    var title;
    var author;
    var price;

    if (url.length < 1) 
    {
        return {
            status: -2,
            title: -2,
            author: -2,
            price: -2
        }
    }

    const res = await axios.get(helper.getUrlFromSKU(sku))
    .then(({ data }) => {
        const $ = cheerio.load(data);

        if ($('.CBD-MastheadHeading').text() == "Product Not Found") 
        {
            return {
                status: -1,
                title: -1,
                author: -1,
                price: -1
            }
        }

        else 
        {
            title = $('.CBD-ProductDetailTitle').first().text();
            author = $('.CBD-ProductDetailAuthorLink').first().text();
            price = $('.CBD-ProductDetailActionPrice').first().text().replace(/[^0-9.,]/g, "");
        }

        // some minor tidying
        if (title.length < 1) {
            title = "n/a"
        }
        if (author.length < 1) {
            author = "n/a"
        }
        if (price.length < 1) {
            price = "n/a"
        }

        return {
            status: 1,
            title: title,
            author: author,
            price: price
        }
    });
    return res;
}



module.exports = {
    get,
}
