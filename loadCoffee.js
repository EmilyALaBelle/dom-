function getCoffee(){
fetch('https://api.sampleapis.com/coffee/hot')
.then(response => response.json())
.then(coffeeList => console.log(coffeeList))
.catch(console.error)
}

function displayCoffee(coffeeList) {
    coffeeList.map()
}

getCoffee()