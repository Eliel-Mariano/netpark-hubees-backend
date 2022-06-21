import { Request, Response } from "express";
import { ListBikesBusiness } from "../business/ListBikesBusiness";

const listBikesBusiness = new ListBikesBusiness

export class ListBikesContoller{

    listBikes = async (req:Request, res:Response):Promise<void>=>{

        try {
            
            const bikes = await listBikesBusiness.listBikes()

            res.status(200).send({bikes})

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
            res.status(500).send("Erro na venda.")
        }
    }
}