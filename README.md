# ImkerHub API
Dit is mijn Node.js + Express + MongoDB API voor het vak Back End.
De API beheert imkers (beekeepers) en ondersteunt volledige CRUD-functionaliteit.

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
- POST /beekeepers
Nieuwe imker toevoegen.

Body voorbeeld (raw in json):
{
  "name": "Juan",
  "email": "juan@example.com",
  "location": "Brussel"
}

- GET /beekeepers
Alle imkers ophalen.

- GET /beekeepers/:id
Eén imker ophalen op ID.

- PUT /beekeepers/:id
Imker updaten.

- DELETE /beekeepers/:id
Imker verwijderen.

## 🧪 API Testing
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
