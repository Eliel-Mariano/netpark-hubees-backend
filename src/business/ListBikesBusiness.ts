import { ListBikesDatabase } from "../data/ListBikesDatabase";
import { bike } from "../types/bikeType";


const listBikesDatabase = new ListBikesDatabase();

export class ListBikesBusiness {
    
  listBikes = async (): Promise< bike[] > => {
    try {

      const bikes = await listBikesDatabase.listBikes();

      if (!bikes) {
        throw new Error("Ocorreu um erro, por favor tente novamente.");
      }

      return bikes

    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
