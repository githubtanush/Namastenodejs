const { MongoClient } = require('mongodb')
const URL = "mongodb+srv://namastetanush:yeRNokl3BlM7tcnu@namastenode.qikrg8y.mongodb.net/";
const client = new MongoClient(URL)
const dbName = 'helloWorld';

async function main(){
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('documents');

    const data = {
        "firstname" : "Sagar",
        "lastname" : "Arora",
        "city" : "Ludhiana",
        "phone Number" : "+91-123435",
    };
    //Insertion Operation
    //insert many for inserting many documents
    // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    // console.log('Inserted documents =>', insertResult);
    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);
    

    //Reading Operation
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
