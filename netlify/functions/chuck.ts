import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import axios from 'axios';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const CHUCK_API = 'https://api.chucknorris.io/jokes/random';
  const response = await axios.get(CHUCK_API);
  const joke = response.data;
  //console.log("joke", joke);

  return {
    statusCode: 200,
    body: JSON.stringify({ joke }),
  };
};

export { handler };