// These are miscellaneous helper functions, used by middleware or for testing


const fastXMLParser = require('fast-xml-parser');
const fs = require('fs');
const xmlFilePath = __basedir + "/christianbook.com_sitemap4.xml"
const xmlFile = fs.readFileSync(xmlFilePath, 'utf8');
const parser = new fastXMLParser.XMLParser();
const json = parser.parse(xmlFile);



function getUrlFromSKU(sku) {

    const result = json.urlset.url.filter(
        function(entry) {
            return entry.loc.includes(sku);
        }
    )

    if (result.length < 1) {return ""}
    
    return result[0].loc;
}


function getRandomSKU(amount) {
    // only meant for a reasonably small amount of random skus
    //just used for some testing

    var parsedSKU;
    const skus = [];

    for (var i = 0; i < amount; i++) {
        
        parsedSKU = json.urlset.url[Math.floor(Math.random() * 49999)].loc;
        console.log(parsedSKU);
        skus.push(parsedSKU.substring(parsedSKU.lastIndexOf('/')+1));
    }
    return skus;
}

module.exports = {
    getUrlFromSKU,
}




