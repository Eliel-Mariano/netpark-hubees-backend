import { BaseDatabase } from "./BaseDatabase"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

export class CreateTables extends BaseDatabase{
   createTables = () => this.connection.raw(`
      CREATE TABLE IF NOT EXISTS bikes (
         id VARCHAR(255) PRIMARY KEY,
         color VARCHAR(255) NOT NULL,
         number_of_gears INT NOT NULL,
         mark VARCHAR(255) NOT NULL,
         model VARCHAR(255) NOT NULL,
         price FLOAT NOT NULL
      );      
   `)
   .then(() => { console.log("Tables created successfully!!") })
   .catch(printError)

   closeConnection = () => { this.connection.destroy() }

}
const migrations = new CreateTables()

migrations.createTables()
   .finally(migrations.closeConnection)