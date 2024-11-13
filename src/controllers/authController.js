const { Magic } = require("@magic-sdk/admin");
const magic = new Magic(process.env.MAGIC_SECRET_KEY);

exports.authenticate = async (req, res) => {
  const didToken = magic.utils.parseAuthorizationHeader(req.headers.authorization);

  if (!didToken) {
    return res.status(401).json({ error: 'Authorization header missing or invalid' });
  }

  try {
    // Validate the DID token with Magic Admin SDK
    await magic.token.validate(didToken);
    const metadata = await magic.users.getMetadataByToken(didToken);
    res.status(200).json({ valid: true, user: metadata });
  } catch (error) {
    // If validation fails, send an unauthorized error
    console.error('DID Token validation failed:', error);
    return res.status(401).json({ error: 'Invalid or expired DID token' });
  }
};