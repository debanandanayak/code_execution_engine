import { Message, QueueResponse } from "../../types";

export const kBlankMessage: Message = {
    id: "",
    code: "",
    input: "",
    language: "",
    status:"OK"
  }


  export const  kQueueResponse:QueueResponse = {
    id: "",
    status: "code uploaded",
    input: "",
    output: "",
    error: "",
    time: 0,
    isCompleted: false,
  }