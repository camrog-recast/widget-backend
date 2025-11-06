import express from 'express';

const app = express();
app.use(express.json());

// Example route: proxy a Base44 call
app.post('/api/createWidgetConversation', async (req, res) => {
  const { shopify_customer_id } = req.body;

  // TODO: Call Base44 securely here with SDK or REST API
  // For now, stubbed response:
  res.json({ conversationId: 'abc123', status: 'created' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});