import { MongoClient } from "mongodb";

async function handlers(req, res) {
  const data = req.body;
  console.log(data);
  if (req.method === "POST") {
    const client = await MongoClient.connect(
      "mongodb+srv://meche:meche.in@cluster0.j9fvny4.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();
    const record = db.collection("books");
    const results = await record.insertOne(data);
    res.json({ message: "Posted successfully" });

    client.close();
  }
}

export default handlers;
