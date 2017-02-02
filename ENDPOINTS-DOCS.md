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
    **Content:** `{ message : "" }`

----

* **URL**

  `/api/survivors/create`

* **Method:**
  
  `POST`
  
* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ success : true }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ message : "" }`
