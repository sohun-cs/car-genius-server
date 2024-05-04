const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());
require('dotenv').config();


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.k7dzav4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(uri);

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)



       
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send("Doctor is running....")
});

app.listen(port, () => console.log(`My Fucking server is running on ${port}`));