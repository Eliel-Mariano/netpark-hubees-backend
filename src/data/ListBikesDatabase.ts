import { bike } from "../types/bikeType";
import { BaseDatabase } from "./BaseDatabase";

export class ListBikesDatabase extends BaseDatabase {

  listBikes = async (): Promise<bike[]> => {
    try {
      const bike = await this.connection.raw(`
        SELECT * FROM bikes
        `);
console.log(bike[0]);

        return bike[0]
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
