const express = require("express");

module.exports = function (server) {
  // Definindo URL base para todas as rotas
  const router = express.Router();
  server.use("/api", router);

  // Rotas de Ciclo de Pagameto
  const billingCycle = require("../api/billingCycle/billingCycleServices");
  billingCycle.register(router, "/billingCycles");
};
