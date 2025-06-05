import React, { useState } from 'react';
import AdvancedModal from './AdvancedModal';

export default {
  title: 'Components/AdvancedModal',
  component: AdvancedModal,
};

export const BasicModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      <AdvancedModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const ModalWithAnimations = () => {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState<'fade' | 'scale' | 'slide-in'>('fade');

  return (
    <div className="space-y-4 max-w-md mx-auto p-4">
      <label className="block">
        Animation Type:
        <select
          className="border rounded p-1 ml-2"
          value={animation}
          onChange={e => setAnimation(e.target.value as any)}
        >
          <option value="fade">Fade</option>
          <option value="scale">Scale</option>
          <option value="slide-in">Slide In</option>
        </select>
      </label>
      <button
        onClick={() => setOpen(true)}
        className="bg-secondary text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      <AdvancedModal
        isOpen={open}
        onClose={() => setOpen(false)}
        animation={animation}
        backdropBlur={true}
        size="medium"
        loading={false}
      >
        <p>This modal uses the "{animation}" animation and a backdrop blur.</p>
      </AdvancedModal>
    </div>
  );
};

export const DrawerModal = () => {
  const [open, setOpen] = useState(false);
  const [drawerSide, setDrawerSide] = useState<'left' | 'right'>('left');

  return (
    <div className="space-y-4 max-w-md mx-auto p-4">
      <label className="block">
        Drawer Side:
        <select
          className="border rounded p-1 ml-2"
          value={drawerSide}
          onChange={e => setDrawerSide(e.target.value as any)}
        >
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </label>
      <button
        onClick={() => setOpen(true)}
        className="bg-tertiary text-white px-4 py-2 rounded"
      >
        Open Drawer Modal
      </button>
      <AdvancedModal
        isOpen={open}
        onClose={() => setOpen(false)}
        animation="slide-in"
        drawer={drawerSide}
        size="medium"
        backdropBlur={true}
      >
        <p>This is a drawer-style modal sliding from the {drawerSide}.</p>
      </AdvancedModal>
    </div>
  );
};
