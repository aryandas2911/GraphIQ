import bcrypt from "bcryptjs";
import { supabase } from "../config/db.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const { data: existingUser, error: existingError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);

    if (existingUser && existingUser.length > 0) {
      return res.status(403).json({ message: "User already exists" });
    }

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Invalid Inputs" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be atleast 6 characters" });
    }

    const salt = await bcrypt.genSalt();
    const password_hash = await bcrypt.hash(password, salt);

    const { data: newUser, error: newError } = await supabase
      .from("users")
      .insert([{ name: name, email: email, password_hash: password_hash }])
      .select("id,name,email,created_at");

    if (newError) {
      return res.status(500).json({ message: "Database error" });
    }

    const user = newUser[0];

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return res.status(200).json({ message: "User registered", token, newUser });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Invalid Inputs" });
    }

    const { data: userData, error: loginError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);

    if (loginError || !userData || userData.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = userData[0];

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return res.status(200).json({
      message: "User logged in",
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const me = async (req, res) => {
  try {
    const { id, email } = req;

    const { data, error } = await supabase
      .from("users")
      .select("id,name,email,created_at")
      .eq("email", email)
      .single();

    if (error || !data) {
      return res.status(400).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User details: ", data });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching user data" });
  }
};
