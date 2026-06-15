import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Course,
  Admin,
} from "../model/userModel.js";

const router = Router();

// Get All Data
router.get("/alldata", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const courses = await Course.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects,
      contact: contacts[0],
      experiences,
      courses,
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
});
//
router.post("/login", async (req, res) => {
  try {
    console.log(req.body);

    const admin = await Admin.findOne({
      username: req.body.username,
    });

    console.log(admin);

    if (!admin) {
      return res.status(400).send({
        message: "Admin not found",
      });
    }

    if (req.body.password !== admin.password) {
      return res.status(400).send({
        message: "Invalid Password",
      });
    }

    res.send({
      success: true,
      message: "Login Successful",
    });
  } catch (error) {
    console.log(error);
  }
});

// Save Intro
router.post("/save-intro", async (req, res) => {
  try {
    const intro = await Intro.create(req.body);

    res.status(201).send({
      success: true,
      data: intro,
      message: "Intro saved successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

// Update Intro
router.put("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true }
    );

    res.status(200).send({
      success: true,
      data: intro,
      message: "Intro updated successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});



router.put("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      success: true,
      data: about,
      message: "About updated successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});
 
router.post("/save-about", async (req, res) => {
  try {
    const about = await About.create(req.body);

    res.status(201).send({
      success: true,
      data: about,
      message: "About saved successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});    
// Save Contact
router.post("/save-contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    res.status(200).send({
      success: true,
      message: "Contact saved successfully",
      data: contact,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Contact
router.put("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Contact updated successfully",
      data: contact,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Save Project
router.post("/save-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    res.status(200).send({
      success: true,
      message: "Project Saved Successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Project
router.put("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Project Updated Successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//delete project
router.delete("/delete-project/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);

    res.status(200).send({
      success: true,
      message: "Project Deleted Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
// Save Experience
router.post("/save-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();

    res.status(200).send({
      success: true,
      message: "Experience Saved Successfully",
      data: experience,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Experience
router.put("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Experience Updated Successfully",
      data: experience,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//save course
router.post("/save-course", async (req, res) => {
  try {
    console.log(req.body);

    const newCourse = new Course(req.body);

    await newCourse.save();

    res.status(200).send({
      success: true,
      message: "Course Saved Successfully",
      data: newCourse,
    });
  } catch (error) {
    console.log("SAVE COURSE ERROR:", error);

    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

router.put("/update-course", async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.body._id,
      req.body,
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Course Updated Successfully",
      data: course,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/delete-course/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);

    res.status(200).send({
      success: true,
      message: "Course Deleted Successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
//



export default router;