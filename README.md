
# Colors App

Designing and Implementing a Simple Web Page UI with Functionality


## API Reference

#### Get all items using react

```http
useEffect(() => {
    fetch("https://api.prolook.com/api/colors/prolook")
      .then((response) => response.json())
      .then((data) => setColors(data.colors));


## Authors

- [@FaustNiim](https://www.github.com/FaustNiim)
- Gregor Gonzales

## Installation

Install my-project with npm

```bash
    cd color-app 

    npm install //To install dependancies

    npm run dev //To run the code with port
```
    