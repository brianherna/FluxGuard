import { Router } from "express";
import { crearProspecto } from "../controllers/prospectController";

const router = Router();

router.post("/", crearProspecto);

export default router;