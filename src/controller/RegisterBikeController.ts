import { Request, Response } from "express";
import { RegisterBikeBusiness } from "../business/RegisterBikeBusiness";
import { registerBikeInputDTO } from "../types/registerBikeInputDTO";

const registerBikeBusiness = new RegisterBikeBusiness

export class RegisterBikeContoller{

    registerBike = async (req:Request, res:Response):Promise<void>=>{

        try {
            const {color, numberOfGears, mark, model, price} = req.body

            const input: registerBikeInputDTO ={
                color, numberOfGears, mark, model, price
            }
            
            await registerBikeBusiness.registerBike(input)

            res.status(201).send({
                message:"Bike cadastrada com sucesso!"
            })

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
            res.status(500).send("Erro no cadastro")
        }
    }

    newPrice = async (req:Request, res:Response):Promise<void>=>{

        try {
            const {price} = req.body
            const id:string = req.params.id
            
            await registerBikeBusiness.newPrice(price, id)

            res.status(201).send({
                message:"Preço atualizado com sucesso!"
            })

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message)
            }
            res.status(500).send("Erro no na atualização do preço.")
        }
    }
}