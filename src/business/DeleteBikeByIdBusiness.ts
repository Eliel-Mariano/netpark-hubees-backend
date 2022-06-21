import { DeleteBikeByIdDatabase } from "../data/DeleteBikeByIdDatabase";

const deleteBikeByIdDatabase = new DeleteBikeByIdDatabase();

export class DeleteBikeByIdBusiness {
    
  deleteBike = async (id:string): Promise<void> => {
    try {

      await deleteBikeByIdDatabase.deleteBike(id);

    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
