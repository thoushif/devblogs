import { MongoClient } from "mongodb";

export default async function contactHandler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json("Invalid input");
      return;
    }

    let client;
    const newMessage = { email, name, message };

    const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.j2tj1.mongodb.net/${process.env.MONGODB_DBKEY}?retryWrites=true&w=majority`;
    console.log("in api calls", connectionString);
    try {
      client = await MongoClient.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    } catch (err) {
      console.log("in api calls", err);
      res.status(500).json({ message: "Could not connect to DB" });
      return;
    }
    console.log("in api calls aga", newMessage);
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      res.status(500).json({ message: "Could not add message to DB" });
      return;
    }
    res.status(201).json({
      message: "Successfully stored message!",
      newMessage: newMessage
    });
    client.close();
  }
  if (req.method === "GET") {
    res
      .status(200)
      .json(
        "in Contact API, this is just POST, give post body to save messages in contact us page"
      );
    return;
  }
}
