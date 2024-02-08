export interface IMessage {
  role: string;
  content: string;
}

export interface IAPIBody {
    model: string,
    messages: IMessage[],
    temperature: number,
    max_tokens: number,
    top_p:number
  }
  