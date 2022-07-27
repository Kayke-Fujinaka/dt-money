import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de Website",
          type: "deposit",
          category: "Dev",
          amount: 620,
          createdAt: new Date("2022-02-12 09:06:20"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1200,
          createdAt: new Date("2022-02-25 17:23:00"),
        },
        {
          id: 3,
          title: "Burguer Mania",
          type: "withdraw",
          category: "Alimentação",
          amount: 43,
          createdAt: new Date("2022-03-02 18:49:07"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api"; // Captar todas as chamadas apartir desse endereço

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transaction", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
