import { BaseDatabase } from "./BaseDatabase";

export class DeleteBikeByIdDatabase extends BaseDatabase {
  deleteBike = async (id: string): Promise<void> => {
    try {
      await this.connection.raw(`
        DELETE FROM bikes
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
