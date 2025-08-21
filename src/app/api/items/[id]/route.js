import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"


export async function GET(req, {params}) {
   const p = await params
  const data = await dbConnect('products').findOne({_id : new ObjectId(p.id)})
 
  return Response.json(data)
}
