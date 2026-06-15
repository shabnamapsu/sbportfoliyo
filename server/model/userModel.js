import mongoose from "mongoose";

const introSchema = new mongoose.Schema({
  welcometext: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieurl: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  timeperiod: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  technologies: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "",
  },
});

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});
//
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const Admin= mongoose.model("users", adminSchema);
export const Intro = mongoose.model("Intro", introSchema);
export const About = mongoose.model("About", aboutSchema);
export const Experience = mongoose.model("Experience", experienceSchema);
export const Project = mongoose.model("Project", projectSchema);
export const Course = mongoose.model("Course", courseSchema);
export const Contact = mongoose.model("Contact", contactSchema);