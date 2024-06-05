export interface IMessageContent {
  type: string;
  text: string;
}
export interface IMessage {
  role: string;
  content: IMessageContent[];
}

export interface IAPIBody {
    model: string,
    messages: IMessage[],
    temperature: number,
    max_tokens: number,
    top_p:number
  }
  