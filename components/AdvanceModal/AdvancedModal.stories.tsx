import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { AdvancedModal } from "./AdvancedModal";

export default {
  title: "Components/Advanced Modal",
  component: AdvancedModal,
  parameters: {
    docs: {
      description: {
        component: "A highly configurable modal with animations, blur, sizes, and accessibility.",
      },
    },
  },
} as Meta;

export const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-primary text-white rounded"
      >
        Open Modal
      </button>
      <AdvancedModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Welcome Modal"
        size="md"
        animation="scale"
        backdropBlur
      >
        <p>This is a demo modal with fade/scale/slide animations.</p>
      </AdvancedModal>
    </>
  );
};
