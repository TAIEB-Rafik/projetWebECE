import axios from "axios";
import { login } from "../actions/AuthAction";
const API = axios.create({ baseURL: "http://localhost:5000" });

//apples
export const logIn = (formData) => API.post("/auth/login", formData); // formaData = req.body

export const signUp = (formData) => API.post("/auth/register", formData);
