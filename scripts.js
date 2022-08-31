{/* <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div> */}

let body = document.querySelector('body')

let card = document.createElement('div')
card.className = 'card'
card.style = 'width: 18rem'

let image = document.createElement('img')
image.className = 'card-img-top'
image.alt = '#'
image.src = '#'

let cardBody = document.createElement('div')
cardBody.className = 'card-body'

let cardTitle = document.createElement('h5')
cardTitle.className = 'card-title'
cardTitle.innerText = 'Card title'

let cardText = document.createElement('p')
cardText.className = 'card-text'
cardText.innerText = "Some quick example text to build on the card title and make up the bulk of the card's content."

let listGroup = document.createElement('ul')
listGroup.className = 'list-group list-group-flush'

let listGroupItem = document.createElement('li')
listGroupItem.className = 'list-group-item'
listGroupItem.innerText = 'An item'

let listGroupItem2 = document.createElement('li')
listGroupItem2.className = 'list-group-item'
listGroupItem2.innerText += 'A second item'

let listGroupItem3 = document.createElement('li')
listGroupItem3.className = 'list-group-item'
listGroupItem3.innerText += 'A third item'

card.appendChild(image)
card.appendChild(cardBody)
cardBody.appendChild(cardTitle)
cardBody.appendChild(cardText)
card.appendChild(listGroup)
listGroup.appendChild(listGroupItem)
listGroup.appendChild(listGroupItem2)
listGroup.appendChild(listGroupItem3)
console.log(card)
body.appendChild(card)