module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["trasnsactDB"] = {
            host: process.env.EndPoint_rdsTrasnsactDB,
            port: process.env.Port_rdsTrasnsactDB,
            user: process.env.User_rdsTrasnsactDB,
            password: process.env.Password_rdsTrasnsactDB,
            database: "transactDB",
        };
    };