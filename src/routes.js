"use strict";

module.exports.register = (app, database) => {

    //Get all items.
    app.get('/', async (req, res) => {
        let query;
        query = database.query(
            'select * from items'
        );
        const items = await query;
        res.status(200).send(JSON.stringify(items)).end();
    });

    //Get items by id. Returns all items of which the id supplied in the request, is contained as a substring of the item.
    app.get('/api/item/:id', async (req, res) => {

        let _id = req.params.id;
        const query_string = database.query("Select * from items WHERE itemID LIKE '%' ? '%'", [_id]);
        const result = await query_string;

        res.status(200).send(JSON.stringify(result)).end();
    });


    //Get items by name. Returns all items of which the name substring supplied in the request is contained within the item name.
    app.get('/api/item/name/:substring', async (req, res) => {

        //Select * from items WHERE id = ‘5’;
        let _name = req.params.substring;
        const query_string = database.query("Select * from items WHERE itemName LIKE '%' ? '%'", [_name]);
        const result = await query_string;
        res.status(200).send(JSON.stringify(result)).end();
    });

    //POST - Adds a new item to list.
    app.post('/api/item', async (req, res) => {
        let _id = req.body.itemID;
        let _name = req.body.itemName;
        let _quantity = req.body.itemQuantity;
        let _price = req.body.itemPrice;
        let _supplierID = req.body.supplierID;
        let _status;
        console.log(_name);
        if ((typeof _id === 'undefined') || (typeof _name === 'undefined') || (typeof _quantity === 'undefined') || (typeof _price === 'undefined') || (typeof _supplierID === 'undefined')) {
            _status = "Unsuccess";
        } else {

            const query = database.query(
                'insert into items(itemID, itemName, itemQuantity, itemPrice, supplierID) values (?, ?, ?, ?, ?)',
                [_id, _name, _quantity, _price, _supplierID]
            );
            const items = await query;
            _status = "Success";
        }

        let messsage = '{"status":"' + _status + '", "data":{"_itemID":"' + _id + '","_name":"' + _name + '","_quantity":"' + _quantity + '", "_price":"' + _price + '","_supplierID":"' + $
        const obj_messsage = JSON.parse(messsage);
        res.status(200).send((obj_messsage)).end();

    });
};