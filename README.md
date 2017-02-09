**ZSSN (Zombie Survival Social Network)**
----
> To create a new survivor
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
    "id": 1,
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
> To update a survivors localization
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
> To flag a survivor as walker
* **URL**

  `/api/survivors/flag/:survivorID`

* **Method:**
  
  `GET`
  
* **Success Response:**
    * **Code:** 200 <br />
    **Content:** `{ message: "updated successfully" }`
 
* **Error Response:**
  * **Code:** 500 <br />
    **Content:** `{ message : error }`

----
> Show the % of walkers/infecteds
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
> Show the % of survivors
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
> Show the average material per survivor
* **URL**

  `/api/reports/averageMaterial`

* **Method:**
  `GET`
  
* **Success Response:**
    * **Code:** 200 <br />
    **Content:** `{"Water": 8, "Food": 0, "Ammunition": 0,"Medication": 0}`
 
* **Error Response:**
  * **Code:** 404 <br />
    **Content:** `{ message : "we couldnt find the number of survivors " }`
      OR
    **Content:** `{ message : "we couldnt find all the survivors" }`

----
> Show the amount of material loss
* **URL**

  `/api/reports/losses`

* **Method:**
  `GET`
  
* **Success Response:**
    * **Code:** 200 <br />
    **Content:** `{"amountLost": 300;}`
 
* **Error Response:**
  * **Code:** 404 <br />
    **Content:** `{"message": "We had a problem finding walkers"}`

----
> To trade items between survivors
> Trade between A (origin [URL PARAMETER]) and B (destination -> destSurvivorID)
* **URL**

  `/api/survivors/:originId`

* **Method:**
  `POST`

* **Data Params**

```
 {
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
 
 }
```
* **Success Response:**
    * **Code:** 200 <br />
    **Content:** `{"message": "Trade successfull";}`
 
* **Error Response:**
  * **Code:** 500 <br />
    **Content:** `{"message": "One of the users is a walker"}`
    **Content:** `{"message": "the trade should have the same amount of point on either sides"}`
    **Content:** `{"message" : "error while trading, we couldnt save the destination inventory"}`
    **Content:** `{"message" : "error while trading, we couldnt save the origin inventory"}`
    **Content:** `{"message": "couldnt find the destination survivor"}`
    **Content:** `{"message": "couldnt find the origin survivor"}`
