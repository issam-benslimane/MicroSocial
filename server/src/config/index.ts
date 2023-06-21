import * as dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT as string,
  JWTSECRET: process.env.SECRET as string,
};

export default config;
