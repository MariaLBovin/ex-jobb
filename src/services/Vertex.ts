import axios from "axios";

const apiKey = import.meta.env.VITE_API2_KEY;

export const searchData = () => {
  const client = axios.create({
    headers: {
      Authorization: 'Bearer' + apiKey,
    }
  })
  const params = {
    prompt: 'Ge mig ett bokförslag som påminner om Harry Potter',
    model: 'text-davinci-003',
    max_tokens: 300,
    temperarture: 0
  
  }
  client
    .post("https://api.openai.com/v1/completions", params)
      .then((result)=> {
        console.log(result.data.choices[0].text);
        
      })
      .catch((err ) =>{
        console.log('error', err);
        
      })
}

