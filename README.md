# Sprint 5 – Build a Product Page API

Do you remember your old product page assignment with pharmaceuticals? Today's assignment is to build an API which feeds the page the products. So the page fetches data from your API, instead of the blob of JSON as it did before. This will also be your first full stack application – meaning you will have built both the frontend and backend, YAY! (You will use the old frontend, though, so you don't have to rebuild it)

You will create a API which fetches all products from a database and returns a response which looks like the example below:

```
{
	"products": [{
			"name": "Alvedon",
			"type": "Filmdragerad tablett",
			"size": "500 mg",
			"numberInPack": "20",
			"substance": "Paracetamol",
			"price": 26,
			"deliveryTime": "1-2 vardagar",
			"image": "https://www.apoteket.se/produktbilder/Validoo/097610s.jpg",
			"description": "Skonsamt mot magen om man behöver ta värkmedicin ofta. Lindrar smärta och sänker feber. Effekten på värk kommer inom 30 minuter och på feber efter ½ - 1 timme. Från 3 år."
		},
		{
			"name": "Ipren",
			"type": "Filmdragerad tablett",
			"size": "400 mg",
			"numberInPack": "30",
			"substance": "Ibuprofen",
			"price": 39,
			"deliveryTime": "1-3 vardagar",
			"image": "https://www.apoteket.se/produktbilder/Validoo/088534s.jpg",
			"description": "Lindrar smärta, dämpar inflammation och sänker feber. Effekten kommer inom 30 min, varar i ca 6 tim. Från 12 år."
		}
	]
}
```

This is the same format which the JSON blob had.

When you are finished with your assignment your frontend application should fetch the data from the API and display the products.

## How to complete this assignment

For this assignment, you'll use the React frontend from the old product page assignment and update it to fetch data from an api written in Express, with a MongoDB database.

First, concentrate on building the API. For that, we've started you off with an express server setup in the code folder of this repository. To make life a little easier, it already has mongo configured, too. You will need to have mongo installed and running, though.

Once the API is done, you can load up your old products page project, and update it to fetch data from the API.

### Starting the API

In code/server.js, you'll find a setup similar to the one we created during the lecture. *Start by reading through code/server.js to familiarize yourself with the setup we've given you.* Now you can install dependencies with `npm install`, then run the project with `npm start`.

### The product model

Update the Product model in code/server.js to include all the attributes which the product will need (the keys which the old JSON had). You can then create products by sending POST requests using postman to the /products endpoint (an endpoint which was defined for you in server.js).

### New endpoint

Add a new endpoint to the api on GET /products. In here, you'll need to use `.find()` on the `Product` model to retrieve all objects from the database. Then return them in the response.

### Updating the old project

Now it's just to open up the old project and use `fetch` to fetch data from the API!

### :books: Reading List

* [Mongoose Docs](http://mongoosejs.com/docs/index.html)
* [Using promises in Mongoose](http://erikaybar.name/using-es6-promises-with-mongoosejs-queries/)
* [Express](https://expressjs.com/)

---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you should know how to build your first real API with a MongoDB database, using Mongoose to model data. You will also have build your first full stack application and gain lots more understanding of the backend side of apps.

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Create a form to create products with. It should handle the POST requests to the API.
1. Add error handling to the React project so it shows an error message when the API isn't running.
