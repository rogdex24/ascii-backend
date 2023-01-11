# ASCII Backend

## Getting Started

1. Ensure you have Node.js installed.
2. Create a New Project and Enable Google Custom Search API in [Google Cloud Platform](https://stackoverflow.com/a/11100863/11771587) and get your API KEY from [Custom Search JSON API](https://developers.google.com/custom-search/v1/introduction).
3. Create a `.env` file in the root directory and for variable `API_KEY` set it to your custom Google Search API KEY.
```
// .env file 
API_KEY=<yourapikey>
```
4. In the terminal, run: `npm install`

## Running the Project (Dev)

1. In the terminal, run: `npm run watch`
2. By default it would be running on [localhost:8000](http://localhost:8000) you can change the port by including `PORT=<PortNumber>` in the `.env` file

## API End points

### 1. GET http://localhost:8000/v1/ascii/`<keyword>`
&rarr; Give the keyword you want to search for and it will return the ascii art in ansi escape code.

### 2. POST http://localhost:8000/v1/ascii/file
&rarr; In the body of the request give the url of the picture and it will return the ascii art in ansi escape code.
```
{ "url" : <url_of_the_picture> }
```
