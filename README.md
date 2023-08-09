# Full Stack Web Developer Coding Challenge

This project created by Yarrow Simmons

## How does your system work?

I go over it in comments, but basically, the system uses Express on the backend as a framework for the URL routes and middleware. 
There is a url endpoint that receives an sku, then, in the backend, the provided XML is filtered and the corresponding url is retrieved.
Using this url and a combination of Axios and Cheerio, the page is parsed and the pertinent information is grabbed.
This is sent back to the front end as a response, the JSON object is then parsed and used to populate the front end.

## How could you scale your system to search across all sitemap files?

I think that the best place to scale the system would be in the backend, at the "database" level.
To search across all sitemap files, I would add different categories with a corresponding tag in the XML, these tags could easily be filtered and used in the same way to achieve
searching across all sitemap files. 

## How will your system perform with 100 users? 10,000 users? 1,000,000 users?

The system would probably be alright with 100 users, although the way it works is a little slow and unoptimized.
At 10,000 users, not to mention 1,000,000, I believe the cracks would begin to show.
I believe this because the program polls the backend with each request, searching the XML. With lots of users, the amount of concurrent requests would be tremendous.

## What documentation, websites, papers, etc did you consult in doing this assignment?

In doing this assignment, I primarily utilized the React documentation, some of Bezkoder's tutorials (ie, https://www.bezkoder.com/react-redux-crud-example/#Overview)),
to a lesser extent, the Axios and Cheerio documentation and the JavaScript documentation for minor functional details.

## How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it and how would you prioritize each item?

I spent roughly 16-20 hourse on this exercise. With unlimited time, I would probably prioritize improving performance and bottlenecks.
I would look into implementing a cache, as well as a system to sort the XML data for faster referencing.

## If you were to critique your code, what would you have to say about it?

I feel that it's not quite as clean and concise as I would like it to be.
Usually, as part of a later optimization stage, I tighten and tidy things up a bit more.
I also feel that the front end is not particularly attractive and the performance isn't instant. This irks me and is something I would change with more time, but I feel 
good about where I spent my focus.

## How can you change your system be updated to support simple keyword searches?

Again, I would turn my attention primarily to the database.
I would amass keywords from each listing, have them filed under their corresponding XML entry (or something more organized)
and I would use that dictionary of SKUs and keywords for filtering and facilitating simple keyword searches.
