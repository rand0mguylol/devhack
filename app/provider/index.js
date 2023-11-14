const { DiscussServiceClient } = require("@google-ai/generativelanguage");

const { GoogleAuth } = require("google-auth-library");

const API_KEY = process.env.BARD_API_KEY;

const bardClient = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

export default bardClient;
