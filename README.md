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
* React (Already done)
* Node.js – To build the API
* MongoDB – To store all data on the server. 

### Project setup

In the "code" folder in this assignment you'll find a copy of the Technigo React starter project which you can use as a base to complete this assignment! In the terminal, "cd" into that folder and install dependencies by running `npm install`. Once that's done, you can start the project by running `npm start`.

### React Components

Start by thinking of how to divide your page into React components. For example, you might want to build a `Page` component which is responsible for reading the JSON, and a `Product` component which the `Page` could render for each product. Try to draw out your plan on paper to get it clear in your mind.

### Iterate over the data

In the `code/src/product.json` file there's an array of products in JSON format –– basically just normal JavaScript objects. This is the data you will be using to fill your product listing. The starter code is set up to require this file and makes it available through the `productsJson` variable.

When the project is running, if you navigate to http://localhost:3000/ in the browser and look in the console, you'll see the products list printed out. It is being loaded from the JSON file we mentioned before.

Your task is to iterate over this array and render at least one component for each product to build up the page from reusable components. Every product listing should have the following data rendered:

* `name`
* `price`
* `type`
* `size`
* `numberInPack`
* `deliveryTime`
* `image`
* `substance`

Don't panic, there is more data in the file but let's leave that for the stretch goals.

When you are finished you should have a listing that looks like the sketch above.

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

After completing this assignment you should be comfortable working with reusable components in React. You should also be comfortable using your JavaScript skills to iterate over an array of data, select the parts you want, and create a dynamic webpage based on that.

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Add more information about the product on hover, use the `description` parameter for this. [Here's an example](https://www.apoteket.se/kategori/erbjudanden/) of what we're thinking.
1. Make your page responsive and work for mobile and tablets. Use a 2-column layout on tablet and single column for mobile.
1. Add a header to the listing that tells how many products you are showing. `xxx products`.
