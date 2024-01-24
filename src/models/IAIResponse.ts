export interface IAIResponse {
    
      choices: [{
        text: string;
        index: number;
        logprobs: null | string;
        finish_reason: string;
      }];
      created: number;
      id: string;
      model: string;
      object: string;
      usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
      };
    
  }