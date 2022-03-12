import Collection from "mongodb/lib/collection";
import Db from "mongodb/lib/db";
import connectDB from "../../../connectDB"
import Fellow from "../../../models/Fellow"
import fellowProfile from "../../profile/[fellowProfile]";
import clientPromise from "../../../lib/mongodb"

export default async function handler(req, res, ID) {
    const { 
        method,
        query: { params }
      } = req;

      connectDB()
    // const client = await clientPromise
    // const db = client.db("PHDdata")
    

    if (method === "GET") {
        try {
           //const fellow = await db.collection("fellow_profiles").find().toArray();
           const fellow = await Fellow.find({ID:ID});
           res.status(200).json(fellow);
        } catch (err) {
            res.status(500).json(err);

        }
    }

    // if (method === "POST") {
    //     try {
    //         const fellow = await Fellow.create(req.body);
    //         res.status(201).json()
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // }
}