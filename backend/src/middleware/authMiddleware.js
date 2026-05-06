import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const authheader = req.header("Authorization");
  if (!authheader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authheader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token invalid" });
  }

  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET);

    req.id = verify.id;
    req.email = verify.email;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
};
