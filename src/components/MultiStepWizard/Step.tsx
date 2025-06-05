import React from 'react';

type StepProps = {
  title: string;
  content: string;
  formData: any;
  setFormData: (data: any) => void;
  step: number;
};

const Step = ({ title, content, formData, setFormData, step }: StepProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <label className="block mb-2">
        {step === 0 && (
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          />
        )}
        {step === 1 && (
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border px-3 py-2 rounded"
          />
        )}
        {step === 2 && (
          <div className="space-y-2">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
          </div>
        )}
      </label>
    </div>
  );
};

export default Step;
