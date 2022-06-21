import { BaseDatabase } from "./BaseDatabase";

export class DeleteBikeByIdDatabase extends BaseDatabase {

  deleteBike = async (id: string): Promise<void> => {
    try {
      await this.connection.raw(`
        DELETE FROM bikes
        WHERE id = "${id}"
        `);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
