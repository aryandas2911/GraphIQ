import bcrypt from "bcryptjs";
import { supabase } from "../config/db.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const { data:existingUser, error:existingError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);

    if (existingUser && existingUser.length>0) {
      return res.status(403).json({ message: "User already exists" });
    }

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Invalid Inputs" });
    }

    if (!(password.length >= 6)) {
      return res
        .status(400)
        .json({ message: "Password should be atleast 6 characters" });
    }

    const salt = await bcrypt.genSalt();
    const password_hash = await bcrypt.hash(password, salt);

    const { data:newUser, error:newError } = await supabase
      .from("users")
      .insert([{ name: name, email: email, password_hash: password_hash }])
      .select("id,name,email,created_at");

    if (newError) {
      return res.status(500).json({ message: "Database error" });
    }

    return res.status(200).json({ message: "User registered", newUser });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
