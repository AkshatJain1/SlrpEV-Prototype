var express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment');
var path = require('path');
var app = express();




//id of everything is decided by its index in the list
var user =  {
        firstName: 'Akshat',
        lastName: 'Jain',
        // vehicleSettings: {
        //     name: "Camry",
        //     range: 200,
        //     capacity: 50,
        //     efficiency: 4.0,
        // },
        sessions: [
            {
                startTime: moment("2019-1-15 9:30",       "YYYY-MM-DD HH:mm"),   // parsed as 10:00 local time
                endTimeCharging: moment("2019-1-15 14:30",       "YYYY-MM-DD HH:mm"),   // parsed as 2:30 local time
                setDepartureTime:  moment("2019-1-15 14:30",       "YYYY-MM-DD HH:mm"),   // parsed as 2:30 local time
                actualDepartureTime: moment("2019-1-15 17:00",       "YYYY-MM-DD HH:mm"),   // parsed as 10:00 local time
                milesNeeded: 40,
                flexible: false,  //if false, it's immediate
                co2Saved: 16
            },
        ],
        currentSession: {
            startTime: moment("2019-1-19 2:30",       "YYYY-MM-DD HH:mm"),   // parsed as 10:00 local time
            setDepartureTime:  moment("2019-1-19 8:30",       "YYYY-MM-DD HH:mm"),   // parsed as 2:30 local time
            milesNeeded: 60,
            currentMiles: 30,
            flexible: false,  //if false, it's immediate
        }
    }

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var api = express.Router();

api.get('/sessions', (req, res) => {
    res.status(200).json(user.sessions);
});

api.post('/addSession', (req, res) => {
    user.sessions.push(req.body);
    res.sendStatus(200);
});

api.get('/hasVehicle', (req, res) => {
    res.json( ("vehicleSettings" in user) );
});

api.post('/setVehicle', (req, res) => {
    console.log(req.body)
    user.vehicleSettings = req.body;
    res.sendStatus(200);
});

api.get('/currentSession', (req, res) => {
    if("currentSession" in user) {
        res.json(user.currentSession);
    } else {
        res.json({success: false, message: 'no current session running'});
    }
});

api.post('/currentSession', (req, res) => {
    user.currentSession = req.body;
    res.sendStatus(200);
});


const port = process.env.PORT || 8080;


app.use('/api', api);

app.use(express.static(path.join(__dirname, 'public')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port);