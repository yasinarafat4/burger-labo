
import { getBurgersFromDb } from "@/database/burger.service";
import { cache } from "react";
import "server-only";

const getBurgers = cache(getBurgersFromDb);

export default getBurgers;