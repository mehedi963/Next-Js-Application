import dbConnect from "@/lib/dbConnect"


export async function GET(req) {
  const data = await dbConnect('products').find().toArray()
 
  return Response.json(data)
}

export async function POST(req) {
  const postData = await req.json()
  const result = await dbConnect('products').insertOne(postData)
 
  return Response.json(result)
}