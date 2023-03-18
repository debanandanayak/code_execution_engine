import { NextResponse } from "next/server"
import { Message } from "../../../../../types"
import { nanoid } from 'nanoid'
import { kBlankMessage } from "@/constants/constants"
import { getData } from "../../../../../util/db"
import { publish } from "../../../../../util/publisher"

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const id = searchParams.get("id")
  if(!id){
    return NextResponse.json({message:"Query parameter id not found"},{status:400})
  }
  const data = await getData(id)
  return NextResponse.json(data)
}




export async function POST(request: Request) {
  const body: Message = await request.json()
  if (!body.language) {
    return NextResponse.json({ message: "language name should not be empty!", status: "failed" })
  }
  const id = nanoid(5)
  const message = { ...kBlankMessage, ...body, id }
  publish(message)
  return NextResponse.json(message)
}


