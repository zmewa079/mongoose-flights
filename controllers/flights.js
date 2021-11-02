import { Flight } from '../models/flights.js'

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if(err) {
      return res.redirect('flights/new')
    }
    res.redirect(`/flights/${flight._id}`)
  })
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {
      flights,
      title: 'All Flights'
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render('flights/show', {
      title: 'Flight Detail',
      flight
    })
  })
}

export {
  index,
  newFlight as new, 
  create,
  show
}