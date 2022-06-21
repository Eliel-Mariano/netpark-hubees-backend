import { Request, Response } from "express";
import { DeleteBikeByIdBusiness } from "../business/DeleteBikeByIdBusiness";

const deleteBikeByIdBikeBusiness = new DeleteBikeByIdBusiness

export class DeleteBikeByIdContoller{

    deleteBike = async (req:Request, res:Response):Promise<void>=>{

        try {
            const id:string = req.params.id
            
            await deleteBikeByIdBikeBusiness.deleteBike(id)

            res.status(201).send({
                message:"Bike vendida com sucesso!"
            })

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
            res.status(500).send("Erro na venda.")
        }
    }
}