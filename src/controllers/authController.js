const { Magic } = require("@magic-sdk/admin");
const magic = new Magic(process.env.MAGIC_SECRET_KEY);

exports.authenticate = async (req, res) => {
  const didToken = magic.utils.parseAuthorizationHeader(req.headers.authorization);

  if (!didToken) {
    return res
      .status(401)
      .json({ error: "Authorization header missing or invalid" });
  }

  try {
    // Validate the DID token with Magic Admin SDK
    magic.token.validate(didToken);
    const metadata = await magic.users.getMetadataByToken(didToken);
    req.session.user = metadata; // Store user data in session
    req.session.didToken = didToken;
    res.status(200).json({ valid: true });
  } catch (error) {
    // If validation fails, send an unauthorized error
    console.error("DID Token validation failed:", error);
    return res.status(401).json({ error: "Invalid or expired DID token" });
  }
};

exports.logout = async (req, res) => {
  const didToken = req.session.didToken;

  if (!didToken) {
    return res
      .status(401)
      .json({ error: "Authorization header missing or invalid" });
  }

  try {
    magic.users.logoutByToken(didToken);
    // Clear the session
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error clearing session");
      } else {
        res.redirect("/");
      }
    });
  } catch (error) {
    // If validation fails, send an unauthorized error
    console.error("Logout failed:", error);
    return res.status(401).json({ error: "Error logging out user:" });
  }
};
