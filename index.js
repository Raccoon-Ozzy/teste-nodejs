const express = require("express");
const app = express();
const port = 3000;

// Endpoint para converter decimal para binario
app.get("/to-binary/:decimal", (req, res) => {
  // Converte o parametro para numero inteiro
const decimal = parseInt(req.params.decimal, 10);

  // Se nao for numero decimal retorna um erro com status 400
if (isNaN(decimal)) {
    return res.status(400).json({ error: "Invalid decimal number" });
}

  const binary = decimal.toString(2); // Converte o numero decimal para binario
  res.json({ decimal, binary }); // Retorna a resposta como JSON
});

app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`);
});
