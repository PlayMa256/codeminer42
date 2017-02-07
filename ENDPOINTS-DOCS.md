**ZSSN (Zombie Survival Social Network)**
----
> This is a REST API which stores information about the survivors, as well as the resources they own.

* **URL**

  `/api/survivors/create`

* **Method:**
  
  `POST`
  
* **Data Params**
```
  {
    "name" : "Matheus",
    "age" : 21,
    "gender" : "male",
    "lastLocation" : [{
      "lastLong": 21.8778,
      "lastLat": 14.8771
    }],
    "inventory": [
      {
        "item_name": "Water",
        "qty" : 4
      },
      {
        "item_name": "Food",
        "qty" : 4
      }
    ]
  }
```

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

```
{
  "lastLocation" : [{
    "lastLong": 21.1178,
    "lastLat": 14.7777777
  }]
}
```

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

----

* **URL**

  `/api/reports/infecteds/`

* **Method:**
  
  `GET`
  
* **Success Response:**
    * **Code:** 200 <br />
    **Content:** `{ message: "x %" }`
 
* **Error Response:**
  * **Code:** 500 <br />
    **Content:** `{ message : "Couldnt get the % of infecteds" }`


----

* **URL**

  `/api/reports/survivors/`

* **Method:**
 
  `GET`
  
* **Success Response:**
    * **Code:** 200 <br />
    **Content:** `{ message: "x %" }`
 
* **Error Response:**
  * **Code:** 500 <br />
    **Content:** `{ message : "Couldnt get the % of alives" }`

----

* **URL**

  `/api/reports/averageMaterial`

* **Method:**
  `GET`
  
* **Success Response:**
    * **Code:** 200 <br />
    **Content:** `{"Water": 8, "Food": 0, "Ammunition": 0,"Medication": 0}`
 
* **Error Response:**
  * **Code:** 500 <br />
    **Content:** `{ message : "we couldnt find the number of survivors " }`
      OR
    **Content:** `{ message : "we couldnt find all the survivors" }`
