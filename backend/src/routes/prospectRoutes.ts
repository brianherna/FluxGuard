import { Router } from "express";

import {
  crearProspecto,
  obtenerProspectos,
} from "../controllers/prospectController";

const router = Router();

router.post("/", crearProspecto);

router.get("/", obtenerProspectos);

export default router;