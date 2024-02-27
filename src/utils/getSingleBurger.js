import { cache } from "react";
import "server-only";
import { getBurgerByIdFromDb } from "../database/burger.service";

const getSingleBurger = cache(getBurgerByIdFromDb);

export default getSingleBurger;