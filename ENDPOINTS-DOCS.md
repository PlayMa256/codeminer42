**ZSSN (Zombie Survival Social Network)**
----
> This is a REST API which stores information about the survivors, as well as the resources they own.

* **URL**

  `/api/survivors/create`

* **Method:**
  
  `POST`
  
* **Data Params**

  `{
  "name" : "Matheus",
  "age" : 22,
  "gender" : "male",
  "lastLocation" : [{
    "lastLong": 21.8778,
    "lastLat": 14.8771
  }]
}`

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ success : true }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ message :  "error message"}`

----

* **URL**

  `/api/survivors/update/:survivorID`

* **Method:**
  
  `PUT`
  
* **Data Params**

  `{
  "lastLocation" : [{
    "lastLong": 21.1178,
    "lastLat": 14.7777777
  }]
}`

* **Success Response:**
    * **Code:** 200 <br />
    **Content:** `{ message: "updated successfully" }`
 
* **Error Response:**
  * **Code:** 500 <br />
    **Content:** `{ message : error }`

----

* **URL**

  `/api/survivors/flag/:survivorID`

* **Method:**
  
  `GET`
  
* **Data Params**

  `{
  "lastLocation" : [{
    "lastLong": 21.1178,
    "lastLat": 14.7777777
  }]
}`

* **Success Response:**
    * **Code:** 200 <br />
    **Content:** `{ message: "updated successfully" }`
 
* **Error Response:**
  * **Code:** 500 <br />
    **Content:** `{ message : error }`
