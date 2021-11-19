# COMP-3504-Assignment3
# This is the API design and implementation repo that corresponds to the Assignment 2 frontend.
| Method      | Endpoint                  |Parameters                                            |Description                                                               |
| ----------- |---------------------------|------------------------------------------------------|--------------------------------------------------------------------------|
| GET         | /                         |                                                      |Finds the list of all items                                               |
| GET         | /api/item/:id             |id                                                    |Finds the list of items that contain supplied id parameter as a substring |
| GET         | /api/item/name/:substring |substring                                             |Finds all names that contain supplied substring parameter                 |       
| POST        | /api/item                 |itemID, itemName, itemQuantity, itemPrice, supplierID |Add new item                                                              |                                
