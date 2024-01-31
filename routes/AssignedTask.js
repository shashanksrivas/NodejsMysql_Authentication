const express = require("express");
const router = express.Router();
const { AdminNavigation } = require("../models");

 
router.post("/adminNavigation", async (req, res) => {
    console.log(req.header('x-api-key'))
    if( req.header('x-api-key')){
        // const apikey=req.header("apikey");
        const { id, navigation,icon,treeview,parent,orderby,status } = req.body;
        console.log(req.body)
    
        AdminNavigation.create({
            id: id,
            navigation: navigation,
            icon: icon,
            treeview: treeview,
            parent: parent,
            orderby: orderby,
            status: status, 
        }).then(res => {
            console.log(res)
            
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
            res.json("error");
        });
    
        res.json("SUCCESS");

    }else{
        res.json("no api key");
    }


  });


  module.exports = router;

