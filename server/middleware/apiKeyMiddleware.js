// apiKeyMiddleware.js

const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['api-key']; // Get API key from request headers

  if (apiKey && apiKey === process.env.API_KEY) {
    // API key is valid, proceed to the next middleware or route handler
    next();
  } else {
    // API key is invalid, send unauthorized response
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = validateApiKey;
