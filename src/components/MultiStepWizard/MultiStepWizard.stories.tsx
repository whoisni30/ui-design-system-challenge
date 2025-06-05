import React, { useState } from "react";
import MultiStepWizard from "./MultiStepWizard";

export default {
  title: "Components/Multi-Step Wizard Form",
  component: MultiStepWizard,
};

const steps = [
  {
    title: "User Info",
    description: "Enter your personal details",
    content: (
      <form>
        <label htmlFor="name" className="block mb-1 font-semibold">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          className="w-full p-2 border border-neutral-400 rounded mb-4"
          required
        />
        <label htmlFor="email" className="block mb-1 font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          className="w-full p-2 border border-neutral-400 rounded"
          required
        />
      </form>
    ),
    validate: () => true, // Could add real validation here
  },
  {
    title: "Address",
    description: "Where do you live?",
    content: (
      <form>
        
