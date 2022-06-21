import { ListBikesDatabase } from "../data/ListBikesDatabase";
import { bike } from "../types/bikeType";


const listBikesDatabase = new ListBikesDatabase();

export class ListBikesBusiness {
    
  listBikes = async (): Promise< bike[] > => {
    try {

      const bikes = await listBikesDatabase.listBikes();

      if (!bikes) {
        throw new Error("Não existem bikes cadastradas.");
      }

      return bikes

    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  listBikesByColor = async (color:string): Promise< bike[] > => {
    try {

      const bikes = await listBikesDatabase.listBikesByColor(color);

      if (!bikes) {
        throw new Error("ONão há bikes com a cor desejada.");
      }

      return bikes

    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  listBikesByPrice = async (minorPrice:string, majorPrice:string): Promise< bike[] > => {
    try {
      /* const minorPriceNumber = Number(minorPrice)
      const majorPriceNumber = Number(majorPrice) */
      
      const bikes = await listBikesDatabase.listBikesByPrice(minorPrice, majorPrice);

      if (!bikes) {
        throw new Error("Não há bikes nesse intervalo de preço.");
      }

      return bikes

    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
