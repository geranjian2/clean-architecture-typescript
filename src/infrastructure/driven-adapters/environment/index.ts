import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

export class ConfigService {
    vars: any

    constructor() {
        this.vars = {
            aws_id: process.env.AWS_ACCESS_KEY_ID,
            aws_secret: process.env.AWS_SECRET_ACCESS_KEY
        }
    }
    

}

