const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");
const client = new TextAnalyticsClient(
  "https://northeurope.api.cognitive.microsoft.com/",
  new AzureKeyCredential("c7786aa9eedd49c0856410c86226500a")
);

exports.analyzeText = async (text) => {
  const results = await client.analyzeSentiment([text]);

  return results[0]
}