import { bike } from "../types/bikeType";
import { BaseDatabase } from "./BaseDatabase";

export class ListBikesDatabase extends BaseDatabase {

  listBikes = async (): Promise<bike[]> => {
    try {
      const bikes = await this.connection.raw(`
        SELECT * FROM bikes
        `);
        return bikes[0]
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  listBikesByColor = async (color:string): Promise<bike[]> => {
    try {
      const bikes = await this.connection.raw(`
        SELECT * FROM bikes
        WHERE color = "${color}"
        `);
        return bikes[0]
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  listBikesByPrice = async (minorPrice:string, majorPrice:string): Promise<bike[]> => {
    try {
      const bikes = await this.connection.raw(`
        SELECT * FROM bikes
        WHERE price BETWEEN ${minorPrice} AND ${majorPrice}
        `);
        return bikes[0]
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
