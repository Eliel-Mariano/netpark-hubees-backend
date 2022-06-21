import { DeleteBikeByIdBusiness } from "./business/DeleteBikeByIdBusiness"
import { ListBikesBusiness } from "./business/ListBikesBusiness"
import { RegisterBikeBusiness } from "./business/RegisterBikeBusiness"
import {app} from "./controller/app"
import { DeleteBikeByIdContoller } from "./controller/DeleteBikeByIdController"
import { ListBikesContoller } from "./controller/ListBikesContoller"
import { RegisterBikeContoller } from "./controller/RegisterBikeController"
import { DeleteBikeByIdDatabase } from "./data/DeleteBikeByIdDatabase"
import { ListBikesDatabase } from "./data/ListBikesDatabase"
import { RegisterBikeDatabase } from "./data/RegisterBikeDatabase"
import { Idgenerator } from "./services/IdGenerator"

const deleteBikeByIdBikeContoller = new DeleteBikeByIdContoller(
    new DeleteBikeByIdBusiness(
        new DeleteBikeByIdDatabase()
    )
)

const listBikesContoller = new ListBikesContoller(
    new ListBikesBusiness(
        new ListBikesDatabase()
    )
)

const registerBikeContoller = new RegisterBikeContoller(
    new RegisterBikeBusiness(
        new RegisterBikeDatabase(),
        new Idgenerator()
    )
)


app.get("/bikes", listBikesContoller.listBikes)
app.get("/bikes/:color", listBikesContoller.listBikesByColor)
app.get("/bikes/:minorPrice/:majorPrice", listBikesContoller.listBikesByPrice)

app.post("/register", registerBikeContoller.registerBike)

app.put("/register/newprice/:id", registerBikeContoller.newPrice)

app.delete("/delete/:id", deleteBikeByIdBikeContoller.deleteBike)