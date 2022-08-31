let cars = [
    {brand: 'opel', model: 'ascona', color: 'red'},
    {brand: 'ford', model: 'mondeo', color:'#005588'},
    {brand: 'honda', model: 'civic', color: '#000000'},
    {brand: 'kia', model: 'ceed', color: 'rgb(255,255,0)'},
]

let body = document.querySelector('body')

for (let i=0; i < cars.length; i++) {
    myFunction(cars[i])
}

function myFunction(data) {
    let card = document.createElement('div')
    card.className = 'card'
    card.style = 'width: 18rem'

    let image = document.createElement('img')
    image.className = 'card-img-top'
    image.src = 'https://i.picsum.photos/id/360/200/150.jpg?hmac=nHh6cJ9hWK4ZG8YoPQlrVLdOzUJ0DB5k9_ZDYxvwuXY'

    let cardBody = document.createElement('div')
    cardBody.className = 'card-body'

    let cardTitle = document.createElement('h5')
    cardTitle.className = 'card-title'
    cardTitle.innerText = data.brand
    cardTitle.style.backgroundColor = data.color

    let cardText = document.createElement('p')
    cardText.className = 'card-text'
    cardText.innerText = data.model
    cardText.style.backgroundColor = data.color

    card.appendChild(image)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    body.appendChild(card)
}




