import {app} from "./controller/app"
import { DeleteBikeByIdContoller } from "./controller/DeleteBikeByIdController"
import { ListBikesContoller } from "./controller/ListBikesContoller"
import { RegisterBikeContoller } from "./controller/RegisterBikeController"

const registerBikeContoller = new RegisterBikeContoller
const deleteBikeByIdBikeBusiness = new DeleteBikeByIdContoller
const listBikesContoller = new ListBikesContoller

app.get("/bikes", listBikesContoller.listBikes)

app.post("/register", registerBikeContoller.registerBike)

app.put("/register/newprice/:id", registerBikeContoller.newPrice)

app.delete("/delete/:id", deleteBikeByIdBikeBusiness.deleteBike)