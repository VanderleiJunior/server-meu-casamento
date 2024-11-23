import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

const routesPath = path.join(__dirname);

fs.readdirSync(routesPath).forEach((file) => {
  if (file.endsWith('.routes.ts')) {
    const route = require(path.join(routesPath, file));
    if (route.default) {
      router.use(route.default);
    }
  }
});

export default router;
