const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/start-ocr', async (req, res) => {
  try {
    // Ici, tu ajoutes la logique pour traiter la question du quiz
    res.json({ message: "Traitement OCR effectué", result: "test"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});