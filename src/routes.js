"use strict";

module.exports.register = (app, database) => {

    app.get('/', async (req, res) => {
        let query;
        query = database.query(
            'select * from items'
        );
        const items = await query;
        res.status(200).send(JSON.stringify(items)).end();
    });

    app.get('/api/item/:id', async (req, res) => {
 
    //Select * from items WHERE id = ‘5’;
    let _id = req.params.id;
    const query_string = database.query('Select * from items WHERE itemID = ?', [_id]); 
    const result = await query_string;

    //200 status means that request was successful.
    //”string-ifies” the result, from a JSON format, and sends the result to the user.

    res.status(200).send(JSON.stringify(result)).end();
    });



    app.get('/api/item/:name', async (req, res) => {
 
        //Select * from items WHERE id = ‘5’;
        let _name = req.params.name;
        const query_string = database.query('Select * from items WHERE itemName = ?', [_name]); 
        const result = await query_string;
    
        //200 status means that request was successful.
        //”string-ifies” the result, from a JSON format, and sends the result to the user.
    
        res.status(200).send(JSON.stringify(result)).end();
        });

    
    app.post('/api/item', async (req, res) => {
        let _id = req.body.id;
        let _name = req.body.name;
        let _quantity = req.body.quantity;
        let _price = req.body.price;
        let _supplierID = req.body.supplierID;

        if ((typeof _id === 'undefined') || (typeof _name === 'undefined') || (typeof _quantity === 'undefined') || (typeof _price === 'undefined') || (typeof _supplierID === 'undefined')) {
            _status = "Unsuccess";

        } else {
        
            const query = database.query(
                'insert into items(itemID, itemName, itemQuantity, itemPrice, supplierID) values (?, ?, ?, ?)',
                [_name, _phone, _email, _address, _supplierID]
            );
            const items = await query;
            _status = "Success";

        }

        let messsage = '{"status":"' + _status + '", "data":{"_name":"' + _name + '","_phone":"' + _phone + '","_email":"' + _email + '", "_address":"' + _address + '"}}';
        const obj_messsage = JSON.parse(messsage);
        res.status(200).send((obj_messsage)).end();

    });
};