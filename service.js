//After loading the excecute the fetch reqeust
document.addEventListener('DOMContentLoaded', fetchServices)
const servicesDiv = document.querySelector("body > section > div")

// Load up the content 
function fetchServices() {
     fetch('service-data.json')
          .then(resp => resp.json())
          .then(services => {
               appenedServicestoDom(services.services)
          })
}

function appenedServicestoDom(services) {


     const products = services.map((service) => {
          //main div
          const div = document.createElement('div')
          div.className = "divConatiner"
          // img conatiner div
          const imgDiv = document.createElement('div')
          imgDiv.className = "imgContainer"
          //img div
          const img = document.createElement('img')
          img.classname = 'servImage'
          img.src= "https://picsum.photos/200"
          imgDiv.append(img)
          //content container
          const contContainer = document.createElement('div')
          contContainer.className = 'contContainer'
          //h1 tag 
          const h1 = document.createElement('h1')
          h1.className = 'servsHeading'
          h1.innerHTML = `${service.name}`
          contContainer.append(h1)
          //h2 tag price 
          const h2 = document.createElement('h2')
          h2.className = 'srvsDesc'
          h2.innerHTML = `${service.price}`
          contContainer.append(h2)
          // P tag 
          const p = document.createElement('p')
          p.className = 'srvsDesc'
          contContainer.append(p)
          div.append(imgDiv)
          div.append(contContainer)
          return div
     })
     
     
     const ul = document.createElement('div')
     ul.id = "service-list-ul"
     servicesDiv.append(ul)
     console.log(products)
     products.forEach((service) => {
          // const ul = document.querySelector("#service-list")
          ul.append(service)
     })

}