var assert = require('assert');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/');
let should = chai.should();
chai.use(chaiHttp);

describe('testing survivors', function() {
  it('it should say im negan', function(done){
  	chai.request(server)
  	.get('/api/survivors/who-are-you')
  	.end((err, res) => {
  		res.should.have.status(200);
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


    it('it should update a an user latitude', (done) =>{
    	let gusmaoID = "589a8ce225e8bd2286be315e";
    	let newLat = {
		  "lastLocation" : [{
		    "lastLong": 21.1178,
		    "lastLat": 14.7777777
		  }]
		};
    	chai.request(server)
    	.put('/api/survivors/update/'+gusmaoID)
    	.send(newLat)
    	.end((err, res) =>{
    		res.should.have.status(200);
    		done();
    	});
    });

        it('it should flag a survivor as a walker', (done) =>{
        	let gusmaoID = "589a8ce225e8bd2286be315e";

        	chai.request(server)
        	.get('/api/survivors/flag/'+gusmaoID)
        	.end((err, res) =>{
        		res.should.have.status(200);
        		done();
        	});
        });


        it('it should return the % of walkers', (done) =>{
        	chai.request(server)
        	.get('/api/reports/infecteds/')
        	.end((err, res) =>{
        		res.should.have.status(200);
        		done();
        	});
        });


        it('it should return the % of survivors', (done) =>{
        	chai.request(server)
        	.get('/api/reports/survivors/')
        	.end((err, res) =>{
        		res.should.have.status(200);
        		done();
        	});
        });
});

