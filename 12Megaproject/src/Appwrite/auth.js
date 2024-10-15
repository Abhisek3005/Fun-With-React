import conf from "../conf.js";

import { Client, Account, ID } from "appwrite";


export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name }{
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount){
                
            }
        }
    })
 }

const authservice = new AuthService();

export default authservice