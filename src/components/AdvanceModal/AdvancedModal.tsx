import React, { useState, useEffect, useRef } from 'react';

type AnimationType = 'fade' | 'scale' | 'slide-in';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  animation?: AnimationType;
  size?: 'small' | 'medium' | 'fullscreen';
  backdropBlur?: boolean;
  children?: React.ReactNode;
  drawer?: 'left' | 'right';
  loading?: boolean;
};

const sizeClasses = {
  small: 'w-96 max-w-full',
  medium: 'w-[600px] max-w-full',
  fullscreen: 'w-full h-full',
};

const AdvancedModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  animation = 'fade',
  size = 'medium',
  backdropBlur = false,
  children,
  drawer,
  loading = false,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      // Trap tab focus inside modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      }
    };
    if (isOpen) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        backdropBlur ? 'backdrop-blur-sm bg-black bg-opacity-30' : 'bg-black bg-opacity-50'
      }`}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={onClose} // Close when clicking backdrop
    >
      <div
        ref={modalRef}
        className={`bg-white dark:bg-gray-800 rounded shadow-lg p-6 relative
          ${sizeClasses[size]} 
          ${
            animation === 'fade'
              ? 'animate-fade-in'
              : animation === 'scale'
              ? 'animate-scale-in'
              : animation === 'slide-in'
              ? drawer === 'left'
                ? 'animate-slide-in-left'
                : drawer === 'right'
                ? 'animate-slide-in-right'
                : 'animate-slide-in-up'
              : ''
          }
          ${drawer ? 'fixed top-0 bottom-0' : ''}
          ${drawer === 'left' ? 'left-0 h-full' : ''}
          ${drawer === 'right' ? 'right-0 h-full' : ''}
        `}
        onClick={e => e.stopPropagation()} // Prevent closing when clicking modal
      >
        <h2 id="modal-title" className="text-xl font-semibold mb-4">
          Advanced Modal
        </h2>
        <div id="modal-description" className="mb-6">
          {children ?? 'This is a modal with animations, backdrop blur, keyboard navigation, and drawer variants.'}
        </div>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 rounded">
            <svg
              className="animate-spin h-8 w-8 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Loading spinner"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          </div>
        )}

        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 dark:hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default AdvancedModal;
