# Sprint 2 – Build a Product Page API

Do you remember your old product page assignment with pharmacuticals? Today's assignment is to build an API that feeds the page the products and implement that it fetches data from your API instead of the blob of json. This will also be your first full stack application – meaning you will have build both the frontend and backend, YAY! 

You will create a API that fetches all products from a database and returns the following response: (The same as the json file you had before)

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
When you are finished with your assignment your frontend application should fetch the data from the API and display the products. 


## How to complete this assignment

The tools to use is for this assignment is: 
* :white_check_mark: React – Frontend
* Node.js – For the API
* MongoDB – To store product data. 

### Getting started with MongoDB

### A Node API

~~ OLD TEXT ~~

### Iterate over the data

Use the old `product.json` from the previous assignment to populate the database. 

You should iterate over the data you fetch from your API and render at least one component for each product to build up the page from reusable components. Every product listing should have the following data rendered:

* `name`
* `price`
* `type`
* `size`
* `numberInPack`
* `deliveryTime`
* `image`
* `substance`

### :books: Reading List

* [List and Keys in React](https://reactjs.org/docs/lists-and-keys.html)
* [React Components](https://reactjs.org/docs/react-component.html)

---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you should know how to build your first real API with a Mongo Database. You will also have build your first full stack application and gain lots more understanding of the backend side of apps. 

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

Error Handling! 
1. What happens if the database is empty? 
1. What happens if the server is not responding? 
