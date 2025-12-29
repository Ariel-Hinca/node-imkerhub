# ImkerHub API
Dit is mijn Node.js + Express + MongoDB API voor het vak Back End.
De API beheert imkers (beekeepers) en producten, en ondersteunt volledige CRUD-functionaliteit.

## Vereiste: MongoDB installeren
Deze API gebruikt een **lokale MongoDB‑database**. 
Om de API te kunnen gebruiken, moet de gebruiker **MongoDB Community Server** installeren op zijn machine. 

### MongoDB installeren 
Download MongoDB Community Server: 
https://www.mongodb.com/try/download/community 

### Optioneel: MongoDB Compass 
MongoDB Compass kan gebruikt worden om de database visueel te bekijken:
https://www.mongodb.com/products/compass 

### Databaseverbinding 
De API maakt verbinding met de lokale database via: 
mongodb://localhost:27017/imkerhub

## Installatie
1. Repo clonen
2. Dependencies installeren: `npm install` 
3. Server starten: `npm start`

## Endpoints
### Beekeepers
- POST /beekeepers – nieuwe imker toevoegen
Body voorbeeld (raw in json): 
{
    "name": "Thomas de Superimker",
    "email": "thomas@example.com",
    "location": "Aarschot",
}
- GET /beekeepers – alle imkers ophalen
- GET /beekeepers?limit=10&offset=0 – pagination
- GET /beekeepers/search?name=Juan – zoeken op naam (contains, case‑insensitive)
- GET /beekeepers/:id – één imker ophalen
- PUT /beekeepers/:id – imker updaten
- DELETE /beekeepers/:id – imker verwijderen

### Products
- POST /products – nieuw product toevoegen
Body voorbeeld (raw in json):
{
  "name": "Winterhoning",
  "price": 5.5,
  "description": "Verse winterhoning uit Waambeek"
}
- GET /products – alle producten ophalen
- GET /products?limit=10&offset=0 – pagination
- GET /products/search?name=honing – zoeken op naam
- GET /products/:id – één product ophalen
- PUT /products/:id – product updaten
- DELETE /products/:id – product verwijderen

## API Testing
De verschillende CRUD‑endpoints van deze API zijn getest met **Postman**.  
Postman werd gebruikt om te controleren of alle routes correct functioneren en de juiste JSON‑responses teruggeven.

## Bronvermeldingen
- De MongoDB‑connectie in dit project is gebaseerd op de officiële Mongoose documentatie:
  https://mongoosejs.com/docs/connections.html

- Het opzetten van Mongoose‑modellen en schema’s is gebaseerd op de officiële Mongoose gids:
  https://mongoosejs.com/docs/models.html

- De structuur van de Express-routes (POST, GET, PUT, DELETE) is gebaseerd op de officiële Express documentatie:
  https://expressjs.com/en/guide/routing.html

- Het gebruik van Mongoose-functies zoals save(), find(), findById(), findByIdAndUpdate() en findByIdAndDelete() is gebaseerd op de officiële Mongoose documentatie:
  https://mongoosejs.com/docs/models.html
  https://mongoosejs.com/docs/queries.html

- De optie { new: true } bij findByIdAndUpdate() is gebaseerd op de officiële Mongoose API-referentie:
  https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()

- De algemene projectstructuur (models, routes, controllers) is geïnspireerd door deze gids:
  https://dev.to/harshm03/full-featured-expressjs-project-inspired-by-laravels-mvc-structure-al0

- Het gebruik van limit() en skip() voor pagination is gebaseerd op de officiële Mongoose documentatie:
  https://mongoosejs.com/docs/api/query.html#Query.prototype.limit()
  https://mongoosejs.com/docs/api/query.html#Query.prototype.skip()

- Het gebruik van RegExp voor "contains" type zoekopdrachten, de officiële Mongoose documentatie:
  https://mongoosejs.com/docs/api/query.html#Query.prototype.regex()

- Voor het toevoegen van mijn HTML‑documentatiepagina aan het root‑endpoint ("/") heb ik AI‑assistentie gebruikt.
De uitleg over het gebruik van express.static(), path.join() en de ES‑module oplossing voor __dirname komt uit deze AI‑chat:  
https://chatgpt.com/share/69524911-5348-800f-8d4c-1650adf1f3bb