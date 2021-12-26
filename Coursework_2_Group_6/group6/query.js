//1.charge for stops at an airport
db.Airport.aggregate([{
		$lookup: {
			from: "Flight",
			localField: "id",
			foreignField: "start_airport_id",
			as: "flight_from"
		}
	},
	{
		$lookup: {
			from: "Flight",
			localField: "id",
			foreignField: "destination_airport_id",
			as: "flight_to"
		}
	},
	{
		$project: {
			_id: 0,
			stop_charge: "1",
			charge1: {
				$reduce: {
					input: {
						$map: {
							input: "$flight_from",
							as: "ff",
							in: {
								$multiply: [{
										$divide: [{
												$subtract: [{
													$toDate: "$$ff.departure_date"
												}, {
													$toDate: "2021-11-01T"
												}]
											},
											3600000
										]
									},
									"$stop_charge_rate"
								]
							}
						}
					},
					initialValue: 0,
					in: {
						$add: ["$$value", "$$this"]
					}
				}
			},
			charge2: {
				$reduce: {
					input: {
						$map: {
							input: "$flight_to",
							as: "ft",
							in: {
								$multiply: [{
										$divide: [{
												$subtract: [{
													$toDate: "$$ft.arrival_date"
												}, {
													$toDate: "2021-11-01T"
												}]
											},
											3600000
										]
									},
									"$stop_charge_rate"
								]
							}
						}
					},
					initialValue: 0,
					in: {
						$add: ["$$value", "$$this"]
					}
				}
			}
		}
	},
	{
		$group: {
			_id: "$stop_charge",
			sum_charge1: {
				$sum: "$charge1"
			},
			sum_charge2: {
				$sum: "$charge2"
			}
		}
	}
])

//2.list of charge for trips
db.Trip.aggregate({
	$unwind: "$bookings"
}, {
	$lookup: {
		from: "Booking",
		localField: "bookings",
		foreignField: "id",
		as: "used"
	}
}, {
	$unwind: "$used"
}, {
	$group: {
		_id: "$id",
		moneySpent: {
			$sum: "$used.cost"
		}
	}
});


//3.address and contact of pilot whose id is 1.
db.Flight.aggregate([{
		$match: {
			id: 1
		}
	},
	{
		$lookup: {
			from: "Employee",
			localField: "pilot_id",
			foreignField: "id",
			as: "pilot"
		}
	},
	{
		$unwind: "$pilot"
	},
	{
		$project: {
			_id: 0,
			id: 1,
			pilot_id: 1,
			pilot_name: "$pilot.name",
			pilot_address: "$pilot.pilot_info.address",
			pilot_contact: "$pilot.pilot_info.contact_details"
		}
	}
])


//4.Pilots eligible to be co-pilots (in service and passed the test)
db.Employee.aggregate([{
		$match: {
			post: "pilot"
		}
	},
	{
		$project: {
			_id: 0,
			id: 1,
			name: 1,
			post: 1,
			end_date: "$pilot_info.employment_records.end_date",
			lastTestDate: "$pilot_info.lastTestDate"
		},
	},
	{
		$unwind: "$end_date"
	},
	{
		$match: {
			end_date: {
				"$gt": "2021-11-08T"
			},
			//Exclude departing pilots
			lastTestDate: {
				"$gt": "2021-05-09T"
			}
		} //The gap between 2021-05-09 and 2021-11-08 is 183 days, so pilots who passed last "fit for flying" test after 2021-05-09 are qualified.
	}
])

//5.plane not available for use
db.Plane.aggregate([{
	$match: {
		status: "working"
	}
}])

//6.The plane with the shortest service time
db.Plane.find({}).sort({
	service_date: -1
}).limit(1);



//7.Flights over 5,000 km
db.Flight.aggregate([{
	$match: {
		length: {
			$gt: 5000
		}
	}
}])


//8.flight hours of pilot whose id is 1
db.Employee.aggregate([{
		$match: {
			id: 1
		}
	},
	{
		$lookup: {
			from: "Flight",
			localField: "id",
			foreignField: "pilot_id",
			as: "pilot"
		}
	},
	{
		$lookup: {
			from: "Flight",
			localField: "id",
			foreignField: "co-pilot_id",
			as: "co-pilot"
		}
	},
	{
		$project: {
			_id: 0,
			name: 1,
			hours_as_pilot: {
				$reduce: {
					input: {
						$map: {
							input: "$pilot",
							as: "p",
							in: {
								$divide: [{
										$subtract: [{
											$toDate: "$$p.arrival_date"
										}, {
											$toDate: "$$p.departure_date"
										}]
									},
									3600000
								]
							}
						}
					},
					initialValue: 0,
					in: {
						$add: ["$$value", "$$this"]
					}
				}
			},
			hours_as_copilot: {
				$reduce: {
					input: {
						$map: {
							input: "$co-pilot",
							as: "cp",
							in: {
								$divide: [{
										$subtract: [{
											$toDate: "$$cp.arrival_date"
										}, {
											$toDate: "$$cp.departure_date"
										}]
									},
									3600000
								]
							}
						}
					},
					initialValue: 0,
					in: {
						$add: ["$$value", "$$this"]
					}
				}
			}
		}
	},
])


//9.plane depart form the airport which id is 1 in 2021-11-01
db.Flight.aggregate([{
	$match: {
		start_airport_id: 1,
		departure_date: {
			$gte: "2021-11-01T00:00Z",
			$lt: "2021-11-02T00:00Z"
		}
	},
}])

//10.List of planes in descending order of maximum flight range
db.Plane.find().sort({
	flying_range: -1
})

//11.The model of plane with the least number of seats
db.Plane.find({}, {
	_id: 0,
	model: 1,
	seat: 1
}).sort({
	seat: 1
}).limit(1)


//12.View Paul Pogba's total expenses
db.Trip.aggregate([{
		$match: {
			booker_name: "Paul Pogba"
		}
	},
	{
		$lookup: {
			from: "Booking",
			localField: "bookings",
			foreignField: "id",
			as: "totalcost"
		}
	},
	{
		$project: {
			_id: 0,
			booker_name: 1,
			totalcost: {
				$sum: "$totalcost.cost"
			},
		}
	}
])