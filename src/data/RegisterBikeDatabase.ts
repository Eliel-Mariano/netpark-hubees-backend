import { bike } from "../types/bikeType";
import { BaseDatabase } from "./BaseDatabase";

export class RegisterBikeDatabase extends BaseDatabase {
  registerBike = async (bike: bike) => {
    try {
      await this.connection.raw(`
          INSERT INTO bikes (id, color, number_of_gears, mark, model, price)
            VALUES(
              "${bike.id}",
              "${bike.color}",
              "${bike.numberOfGears}",
              "${bike.mark}",
              "${bike.model}",
              "${bike.price}"
            )
        `);
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage);
    }
  };

  newPrice = async (price: number, id: string) => {
    try {
      await this.connection.raw(`
          UPDATE bikes
          SET price = ${price}
          WHERE id = "${id}"
        `);
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage);
    }
  };

  findById = async (id: string): Promise<any> => {
    try {
      const bike = await this.connection.raw(`
        SELECT * FROM bikes
        WHERE id = "${id}";
    `);
      return bike[0];
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage);
    }
  };
}
