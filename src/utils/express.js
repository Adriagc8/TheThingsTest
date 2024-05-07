const { Router: ExpressRouter } = require("express");

class Router {
  constructor() {
    this.expressRouter = new ExpressRouter({ mergeParams: true });
  }

  get(...callbacks) {
    this.expressRouter.get("/", callbacks.flat().map(createMiddleware));
  }

  post(...callbacks) {
    this.expressRouter.post("/", callbacks.flat().map(createMiddleware));
  }

  put(...callbacks) {
    this.expressRouter.put("/", callbacks.flat().map(createMiddleware));
  }

  delete(...callbacks) {
    this.expressRouter.delete("/", callbacks.flat().map(createMiddleware));
  }
}

function createMiddleware(callback) {
  return async (req, res, next) => {
    try {
      await callback({ req, res, next });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = { Router, createMiddleware };
