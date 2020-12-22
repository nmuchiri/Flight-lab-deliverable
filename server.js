const dbConfig = require('./config/db.config')


const db = require("./models");
const Airport = db.airport;
const Flight= db.flight
const Terminal= db.terminal

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const airport = new Airport({
	name: "First Airport",
	country: "US",
	opened: "2020-12-15"
})

const flight1= new Flight ({

  from: "Heathrow UK",
  to: "JFK New-York",
  airline: "American Airlines"
})

const flight2= new Flight ({

  from: "CDG France",
  to: "JFK New York",
  airline: "British Airways"
})

const airport = new Airport({
	name: "JFK",
	country: "US",
	opened: "1990-12-15"
})

const terminal = new Terminal({
	name: Terminal1,
  flights: [flight1, flight2],
  capacity: 234324 ,
})

terminal.save()
console.log("Airport saved", airport)
// Lets Make and Save our first airport

terminal.flights.push(flight1)
terminal.flights.push(flight2)
