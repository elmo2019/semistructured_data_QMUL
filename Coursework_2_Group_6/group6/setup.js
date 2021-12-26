db.Airport.remove({});
db.Booking.remove({});
db.Employee.remove({});
db.Flight.remove({});
db.Plane.remove({});
db.Trip.remove({});

//employee

emp1 = {
    "id": 1,
    "name": "Puff Kineton",
    "post": "pilot",
    "pilot_info": {
        "address": {
            "postcode": "E3 4LL",
            "street": "63 Pleasure Road",
            "city": "London"
        },
        "contact_details": {
            "email": "pkineton0@hostgator.com",
            "phone": "4268527358",
            "mobile": "+44 07653039504"
        },
        "employment_records": [{
            "start_date": "2021-08-14T",
            "end_date": "2026-07-01T"
        }],
        "lastTestDate": "2021-06-05T"
    },
    "salary": 508.4
}
emp2 = {
    "id": 2,
    "name": "Brigit Grover",
    "post": "pilot",
    "pilot_info": {
        "address": {
            "postcode": "N6 5GH",
            "street": "78 Cherokee Street",
            "city": "London"
        },
        "contact_details": {
            "email": "bgrover1@narod.ru",
            "phone": "5203060388",
            "mobile": "+44 07971344252"
        },
        "employment_records": [{
            "start_date": "2018-07-03T",
            "end_date": "2023-07-01T"
        }],
        "lastTestDate": "2021-08-24T"
    },
    "salary": 505.6
}
emp3 = {
    "id": 3,
    "name": "Blanche Haney",
    "post": "pilot",
    "pilot_info": {
        "address": {
            "postcode": "E1 O42",
            "street": "52 Algoma Road",
            "city": "London"
        },
        "contact_details": {
            "email": "bhaney2@networkadvertising.org",
            "phone": "4798387651",
            "mobile": "+44 07661802182"
        },
        "employment_records": [{
            "start_date": "2016-10-14T",
            "end_date": "2021-09-30T"
        }],
        "lastTestDate": "2021-09-15T"
    },
    "salary": 411.0
}
emp4 = {
    "id": 4,
    "name": "Freemon Tethcote",
    "post": "pilot",
    "pilot_info": {
        "address": {
            "postcode": "W2 4NE",
            "street": "44 Graedel Street",
            "city": "London"
        },
        "contact_details": {
            "email": "ftethcote3@independent.co.uk",
            "phone": "1608346455",
            "mobile": "+44 07962245943"
        },
        "employment_records": [{
            "start_date": "2017-07-01T",
            "end_date": "2022-07-01T"
        }],
        "lastTestDate": "2021-04-09T"
    },
    "salary": 473.9
}
emp5 = {
    "id": 5,
    "name": "Margie Reidshaw",
    "post": "pilot",
    "pilot_info": {
        "address": {
            "postcode": "N9 RT3",
            "street": "57 Rockefeller Way",
            "city": "London"
        },
        "contact_details": {
            "email": "mreidshaw4@tiny.cc",
            "phone": "1426014099",
            "mobile": "+44 07452369494"
        },
        "employment_records": [{
            "start_date": "2018-03-30T",
            "end_date": "2023-02-28T"
        }],
        "lastTestDate": "2021-08-12T"
    },
    "salary": 523.1
}
emp6 = {
    "id": 6,
    "name": "Charmane Duffy",
    "post": "pilot",
    "pilot_info": {
        "address": {
            "postcode": "N4 WEF",
            "street": "65 Elgar Street",
            "city": "London"
        },
        "contact_details": {
            "email": "cduffy5@example.com",
            "phone": "2543175233",
            "mobile": "+44 07475360523"
        },
        "employment_records": [{
            "start_date": "2019-11-08T",
            "end_date": "2024-10-30T",
        }],
        "lastTestDate": "2021-07-06T"
    },
    "salary": 510.3
}
emp7 = {
    "id": 7,
    "name": "Cybill Lorrie",
    "post": "pilot",
    "pilot_info": {
        "address": {
            "postcode": "S1 SFW",
            "street": "44 Anniversary Mew",
            "city": "London"
        },
        "contact_details": {
            "email": "clorrie6@nyu.edu",
            "phone": "8432747990",
            "mobile": "+44 07104206638"
        },
        "employment_records": [{
            "start_date": "2020-08-04T",
            "end_date": "2025-07-31T",
        }],
        "lastTestDate": "2021-09-22T"
    },
    "salary": 492.0
}
emp8 = {
    "id": 8,
    "name": "Mason Mount",
    "post": "pilot",
    "pilot_info": {
        "address": {
            "postcode": "SW6 1HS",
            "street": "19 Fulham",
            "city": "London"
        },
        "contact_details": {
            "email": "mason19@cfc.com",
            "phone": "5927943743",
            "mobile": "+44 07489495197"
        },
        "employment_records": [{
            "start_date": "2020-01-25T",
            "end_date": "2025-02-01T",
        }],
        "lastTestDate": "2021-08-29T"
    },
    "salary": 519.1
}

emp9 = {
    "id": 9,
    "name": "Romelu Lukaku",
    "post": "booking clerks",
    "salary": 236.4
}

emp10 = {
    "id": 10,
    "name": "Kai Havertz",
    "post": "maintenance staff",
    "salary": 267.8
}

emp11 = {
    "id": 11,
    "name": "N'Golo Kante",
    "post": "maintenance staff",
    "salary": 365.9
}

emp12 = {
    "id": 12,
    "name": "Jorginho",
    "post": "cabin staff",
    "salary": 374.1
}

emp13 = {
    "id": 13,
    "name": "Mateo Kovacic",
    "post": "cabin staff",
    "salary": 401.5
}

db.Employee.insert([emp1, emp2, emp3, emp4, emp5, emp6, emp7, emp8, emp9, emp10, emp11, emp12, emp13])

//airports

airport1 = {
    "id": 1,
    "name": "Heathrow Airport",
    "location": "London",
    "fuel_charge": 210.5,
    "stop_charge_rate": 5.5
}

airport2 = {
    "id": 2,
    "name": "Gatwick Airport",
    "location": "London",
    "fuel_charge": 195.0,
    "stop_charge_rate": 7.5
}

airport3 = {
    "id": 3,
    "name": "Edinburgh Airport",
    "location": "Edinburgh",
    "fuel_charge": 205.5,
    "stop_charge_rate": 4.5
}

airport4 = {
    "id": 4,
    "name": "Manchester Airport",
    "location": "Manchester",
    "fuel_charge": 188.0,
    "stop_charge_rate": 5.5
}

airport5 = {
    "id": 5,
    "name": "Leeds Bradford International Airport",
    "location": "Leeds",
    "fuel_charge": 195.0,
    "stop_charge_rate": 3.5
}


db.Airport.insert([airport1, airport2, airport3, airport4, airport5])

//plane

plane1 = {
    "id": 1,
    "maker": "Boeing",
    "model": "Boeing 747",
    "flying_range": 11250.0,
    "service_date": "2003-03-20T",
    "status": "working",
    "seat": 100
}

plane2 = {
    "id": 2,
    "maker": "Airbus",
    "model": "Airbus A380",
    "flying_range": 10500.0,
    "service_date": "2005-10-22T",
    "status": "working",
    "seat": 80
}

plane3 = {
    "id": 3,
    "maker": "Boeing",
    "model": "Boeing 747",
    "flying_range": 11250.0,
    "service_date": "2012-09-26T",
    "status": "working",
    "seat": 100
}

plane4 = {
    "id": 4,
    "maker": "Boeing",
    "model": "Boeing 737",
    "flying_range": 10250.0,
    "service_date": "2015-01-02T",
    "status": "working",
    "seat": 120
}

plane5 = {
    "id": 5,
    "maker": "Airbus",
    "model": "Airbus A380",
    "flying_range": 10500.0,
    "service_date": "2001-02-14T",
    "status": "repaired",
    "seat": 80
}

plane6 = {
    "id": 6,
    "maker": "Airbus",
    "model": "Airbus A350",
    "flying_range": 9800.0,
    "service_date": "1999-06-17T",
    "status": "upgraded",
    "seat": 60
}

db.Plane.insert([plane1, plane2, plane3, plane4, plane5, plane6])

//flight

flight1 = {
    "id": 1,
    "start_airport_id": 1,
    "destination_airport_id": 3,
    "departure_date": "2021-11-01T07:11Z",
    "arrival_date": "2021-11-01T15:42Z",
    "plane_id": 1,
    "pilot_id": 1,
    "co-pilot_id": 2,
    "length": 5081.0

}
flight2 = {
    "id": 2,
    "start_airport_id": 5,
    "destination_airport_id": 4,
    "departure_date": "2021-11-01T10:37Z",
    "arrival_date": "2021-11-01T17:16Z",
    "plane_id": 2,
    "pilot_id": 8,
    "co-pilot_id": 7,
    "length": 4488.2

}
flight3 = {
    "id": 3,
    "start_airport_id": 3,
    "destination_airport_id": 5,
    "departure_date": "2021-11-01T19:08Z",
    "arrival_date": "2021-11-02T03:28Z",
    "plane_id": 1,
    "pilot_id": 2,
    "co-pilot_id": 6,
    "length": 5152.9

}
flight4 = {
    "id": 4,
    "start_airport_id": 3,
    "destination_airport_id": 2,
    "departure_date": "2021-11-02T11:55Z",
    "arrival_date": "2021-11-02T20:07Z",
    "plane_id": 3,
    "pilot_id": 5,
    "co-pilot_id": 6,
    "length": 4790.0

}
flight5 = {
    "id": 5,
    "start_airport_id": 4,
    "destination_airport_id": 1,
    "departure_date": "2021-11-02T06:02Z",
    "arrival_date": "2021-11-02T18:27Z",
    "plane_id": 4,
    "pilot_id": 7,
    "co-pilot_id": 8,
    "length": 7996.3

}
flight6 = {
    "id": 6,
    "start_airport_id": 1,
    "destination_airport_id": 4,
    "departure_date": "2021-11-03T05:47Z",
    "arrival_date": "2021-11-03T13:31Z",
    "plane_id": 4,
    "pilot_id": 8,
    "co-pilot_id": 5,
    "length": 7995.7

}
flight7 = {
    "id": 7,
    "start_airport_id": 4,
    "destination_airport_id": 5,
    "departure_date": "2021-11-03T23:25Z",
    "arrival_date": "2021-11-04T06:34Z",
    "plane_id": 2,
    "pilot_id": 5,
    "co-pilot_id": 8,
    "length": 4488.7

}
flight8 = {
    "id": 8,
    "start_airport_id": 5,
    "destination_airport_id": 3,
    "departure_date": "2021-11-04T13:45Z",
    "arrival_date": "2021-11-04T22:17Z",
    "plane_id": 1,
    "pilot_id": 6,
    "co-pilot_id": 2,
    "length": 5153.0

}
flight9 = {
    "id": 9,
    "start_airport_id": 2,
    "destination_airport_id": 3,
    "departure_date": "2021-11-04T11:18Z",
    "arrival_date": "2021-11-04T19:35Z",
    "plane_id": 3,
    "pilot_id": 7,
    "co-pilot_id": 1,
    "length": 4789.0

}
flight10 = {
    "id": 10,
    "start_airport_id": 3,
    "destination_airport_id": 1,
    "departure_date": "2021-11-05T08:36Z",
    "arrival_date": "2021-11-05T16:50Z",
    "plane_id": 1,
    "pilot_id": 1,
    "co-pilot_id": 6,
    "length": 5080.6

}
flight11 = {
    "id": 11,
    "start_airport_id": 3,
    "destination_airport_id": 5,
    "departure_date": "2021-11-05T15:45Z",
    "arrival_date": "2021-11-05T23:52Z",
    "plane_id": 3,
    "pilot_id": 7,
    "co-pilot_id": 2,
    "length": 5153.4

}
flight12 = {
    "id": 12,
    "start_airport_id": 5,
    "destination_airport_id": 3,
    "departure_date": "2021-11-06T12:09Z",
    "arrival_date": "2021-11-06T20:20Z",
    "plane_id": 2,
    "pilot_id": 5,
    "co-pilot_id": 7,
    "length": 5153.2

}
flight13 = {
    "id": 13,
    "start_airport_id": 5,
    "destination_airport_id": 2,
    "departure_date": "2021-11-07T08:30Z",
    "arrival_date": "2021-11-07T23:17Z",
    "plane_id": 3,
    "pilot_id": 2,
    "co-pilot_id": 8,
    "length": 9043.9

}
flight14 = {
    "id": 14,
    "start_airport_id": 3,
    "destination_airport_id": 2,
    "departure_date": "2021-11-07T08:00Z",
    "arrival_date": "2021-11-07T16:09Z",
    "plane_id": 2,
    "pilot_id": 7,
    "co-pilot_id": 5,
    "length": 4866.7

}
flight15 = {
    "id": 15,
    "start_airport_id": 1,
    "destination_airport_id": 2,
    "departure_date": "2021-11-06T08:20Z",
    "arrival_date": "2021-11-06T10:59Z",
    "plane_id": 1,
    "pilot_id": 6,
    "co-pilot_id": 1,
    "length": 1028.6

}
flight16 = {
    "id": 16,
    "start_airport_id": 4,
    "destination_airport_id": 2,
    "departure_date": "2021-11-07T05:00Z",
    "arrival_date": "2021-11-07T18:09Z",
    "plane_id": 4,
    "pilot_id": 1,
    "co-pilot_id": 6,
    "length": 8006.4

}

db.Flight.insert([flight1, flight2, flight3, flight4, flight5, flight6, flight7, flight8, flight9, flight10, flight11, flight12, flight13, flight14, flight15, flight16])

//booking

book1 = {
    "id": 1,
    "flight_id": 13,
    "passengers": [
        "Cristiano Ronaldo",
        "Marcus Rashford"
    ],
    "cost": 2050.0
}
book2 = {
    "id": 2,
    "flight_id": 1,
    "passengers": [
        "Bruno Fernandes"
    ],
    "cost": 594.0
}
book3 = {
    "id": 3,
    "flight_id": 3,
    "passengers": [
        "Bruno Fernandes"
    ],
    "cost": 601.0
}
book4 = {
    "id": 4,
    "flight_id": 6,
    "passengers": [
        "Fred"
    ],
    "cost": 874.0
}
book5 = {
    "id": 5,
    "flight_id": 7,
    "passengers": [
        "Fred"
    ],
    "cost": 521.0
}
book6 = {
    "id": 6,
    "flight_id": 7,
    "passengers": [
        "Paul Pogba"
    ],
    "cost": 521.0
}
book7 = {
    "id": 7,
    "flight_id": 12,
    "passengers": [
        "Paul Pogba"
    ],
    "cost": 491.0
}
book8 = {
    "id": 8,
    "flight_id": 14,
    "passengers": [
        "Paul Pogba"
    ],
    "cost": 513.0
}
book9 = {
    "id": 9,
    "flight_id": 2,
    "passengers": [
        "Harry Maguire",
        "Luke Shaw"
    ],
    "cost": 1010.0
}
book10 = {
    "id": 10,
    "flight_id": 5,
    "passengers": [
        "Harry Maguire",
        "Luke Shaw"
    ],
    "cost": 1638.0
}
db.Booking.insert([book1, book2, book3, book4, book5, book6, book7, book8, book9, book10])
//trip

trip1 = {
    "id": 1,
    "booker_name": "Bruno Fernandes",
    "bookings": [
        2,
        3

    ],
    "book_date": "2021-09-29T"

}
trip2 = {
    "id": 2,
    "booker_name": "Fred",
    "bookings": [
        4,
        5

    ],
    "book_date": "2021-11-01T"

}
trip3 = {
    "id": 3,
    "booker_name": "Paul Pogba",
    "bookings": [
        6,
        7,
        8

    ],
    "book_date": "2021-11-02T"

}
trip4 = {
    "id": 4,
    "booker_name": "Cristiano Ronaldo",
    "bookings": [
        1

    ],
    "book_date": "2021-11-05T"

}
trip5 = {
    "id": 5,
    "booker_name": "Luke Shaw",
    "bookings": [
        2,
        5
    ],
    "book_date": "2021-11-01T"

}
db.Trip.insert([trip1, trip2, trip3, trip4, trip5])