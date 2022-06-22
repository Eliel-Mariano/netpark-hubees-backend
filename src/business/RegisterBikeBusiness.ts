import { RegisterBikeDatabase } from "../data/RegisterBikeDatabase";
import { Idgenerator } from "../services/IdGenerator";
import { bike } from "../types/bikeType";
import { registerBikeInputDTO } from "../model/registerBikeInputDTO";


export class RegisterBikeBusiness {

  constructor(
    private registerBikeDatabase:RegisterBikeDatabase,
    private idGenerator:Idgenerator
  ){}
    
  registerBike = async (input: registerBikeInputDTO): Promise<void> => {
    try {
      const { color, numberOfGears, mark, model, price } = input;

      if (!color || !numberOfGears || !mark || !model || !price) {
        throw new Error("Informe color, numberOfGears, mark, model e price.");
      }

      const id = this.idGenerator.generateId();

      const bike: bike = { id, color, numberOfGears, mark, model, price };

      await this.registerBikeDatabase.registerBike(bike);

    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  newPrice = async (price:number, id:string): Promise<void> => {
    try {
      
      if (!price) {
        throw new Error("Informe o novo valor de price.");
      }

      await this.registerBikeDatabase.newPrice(price, id);

    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
