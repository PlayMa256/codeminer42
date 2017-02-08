var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/');
let should = chai.should();
let mongoose = require("mongoose");
var Survivor = require('./../server/Models');

chai.use(chaiHttp);
describe("testing survivors", function(){
	before((done) => {
		mongoose.connection.collections['survivors'].drop(function(){
			done();
		});
	});

	it('it should insert a new survivor', (done) =>{
		let newSurvivor =  {
			"name" : "gusmao",
			"age" : 21,
			"gender" : "male",
			"lastLocation" : [{
				"lastLong": 21.8778,
				"lastLat": 14.8771
			}],
			"id": 1,
			"inventory": [
			{
				"item_name": "Water",
				"qty" : 2
			},
			{
				"item_name": "Medication",
				"qty" : 2
			}
			]
		};
		chai.request(server)
		.post('/api/survivors/create')
		.send(newSurvivor)
		.end((err, res) =>{
			res.should.have.status(200);
			done();
		});
	});

	it('it should say im negan', function(done){
		chai.request(server)
		.get('/api/survivors/who-are-you')
		.end((err, res) => {
			res.should.have.status(200);
			done();
		});
	});
	it('it should update a an user latitude', (done) =>{
		let newLat = {
			"lastLocation" : [{
				"lastLong": 21.1178,
				"lastLat": 14.7777777
			}]
		};
		chai.request(server)
		.put('/api/survivors/update/1')
		.send(newLat)
		.end((err, res) =>{
			res.should.have.status(200);
			res.body.should.have.property('message').eql('updated successfully');
			done();
		});	
		
	});

	it('it should flag a survivor as a walker', (done) =>{
		chai.request(server)
		.get('/api/survivors/flag/1')
		.end((err, res) =>{
			res.should.have.status(200);
			res.body.should.have.property("message").eql('survivor flaged successfully');
			done();
		});
	});

	describe('testing trade', function(){
		it('insert users and trade', (done) => {
			let newSurvivor1 =  {
				"name" : "gusmao",
				"age" : 21,
				"gender" : "male",
				"lastLocation" : [{
					"lastLong": 21.8778,
					"lastLat": 14.8771
				}],
				"id": 1,
				"inventory": [
				{
					"item_name": "Water",
					"qty" : 2
				},
				{
					"item_name": "Medication",
					"qty" : 2
				}
				]
			};

			let newSurvivor2 =  {
				"name" : "rick",
				"age" : 40,
				"gender" : "male",
				"lastLocation" : [{
					"lastLong": 21.8778,
					"lastLat": 14.8771
				}],
				"id": 2,
				"inventory": [
				{
					"item_name": "Ammunition",
					"qty" : 12
				}
				]
			};

			let trade =		{
				"destSurvivorID": "2", 
				"items_origin": [
				{
					"item_name": "Water",
					"qty": 1
				},
				{
					"item_name": "Medication",
					"qty": 1
				}
				], 
				"items_dest": [
				{
					"item_name": "Ammunition",
					"qty": 6
				}
				]
			};

			chai.request(server)
			.post('/api/survivors/create')
			.send(newSurvivor1)
			.end((err, res) =>{
				chai.request(server)
				.post('/api/survivors/create')
				.send(newSurvivor2)
				.end((err, res) => {
					chai.request(server)
					.post("/api/survivors/1")
					.send(trade)
					.end((err, res) => {
						res.should.have.status(200);
						done();
					});
				});
			});
		});
	});
});
