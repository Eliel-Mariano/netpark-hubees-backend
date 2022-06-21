import { Request, Response } from "express";
import { ListBikesBusiness } from "../business/ListBikesBusiness";

//const listBikesBusiness = new ListBikesBusiness

export class ListBikesContoller{

    constructor(
        private listBikesBusiness:ListBikesBusiness
      ){}

    listBikes = async (req:Request, res:Response):Promise<void>=>{

        try {            
            const bikes = await this.listBikesBusiness.listBikes()

            res.status(200).send(bikes)

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
            res.status(500).send("Erro no servidor.")
        }
    }

    listBikesByColor = async (req:Request, res:Response):Promise<void>=>{

        try {
            const color:string = req.params.color

            const bikes = await this.listBikesBusiness.listBikesByColor(color)

            res.status(200).send(bikes)

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
            res.status(500).send("Erro no servidor.")
        }
    }

    listBikesByPrice = async (req:Request, res:Response):Promise<void>=>{

        try {
            const minorPrice:string = req.params.minorPrice
            const majorPrice:string = req.params.majorPrice
            
            const bikes = await this.listBikesBusiness.listBikesByPrice(minorPrice, majorPrice)

            res.status(200).send(bikes)

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
            res.status(500).send("Erro no servidor.")
        }
    }
}