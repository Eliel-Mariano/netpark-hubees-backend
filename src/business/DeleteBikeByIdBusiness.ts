import { DeleteBikeByIdDatabase } from "../data/DeleteBikeByIdDatabase";

//const deleteBikeByIdDatabase = new DeleteBikeByIdDatabase();

export class DeleteBikeByIdBusiness {

  constructor(
    private deleteBikeByIdDatabase:DeleteBikeByIdDatabase
  ){}
    
  deleteBike = async (id:string): Promise<void> => {
    try {

      await this.deleteBikeByIdDatabase.deleteBike(id);

    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
