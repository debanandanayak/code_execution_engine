export type Output = {
  id: string,
  status: "code uploaded" | "success",
  input: string,
  output: string,
  error: string,
  time: number,
  isCompleted: boolean,
}

export type QueueResponse = {
  id: string,
  status: "code uploaded" | "success",
  input: string,
  output: string,
  error: string,
  time: number,
  isCompleted: boolean,
}

export type Message = {
  id: string,
  code: string,
  input: string,
  language: string,
  status: "OK" | "error"
}

export type FormData = {
 code: string,
 input: string,
 language: string,
}


