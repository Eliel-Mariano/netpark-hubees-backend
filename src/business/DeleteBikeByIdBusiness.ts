import { DeleteBikeByIdDatabase } from "../data/DeleteBikeByIdDatabase";

export class DeleteBikeByIdBusiness {
  constructor(private deleteBikeByIdDatabase: DeleteBikeByIdDatabase) {}

  deleteBike = async (id: string): Promise<void> => {

    try {
      const registeredBike = await this.deleteBikeByIdDatabase.findById(id);
      if (registeredBike.length === 0) {
        throw new Error("Bike não cadastrada.");
      }

      await this.deleteBikeByIdDatabase.deleteBike(id);

    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
