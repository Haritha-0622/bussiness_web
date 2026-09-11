import React, { useState, useRef } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { CameraCapture } from './CameraCapture';
import { ImagePreview } from './ImagePreview';

interface PhotoUploaderProps {
  label: string;
  placeholderTitle: string;
  placeholderSubtitle: string;
  value: string | null;
  onChange: (url: string | null, file: File | Blob | null) => void;
}

export function PhotoUploader({ label, placeholderTitle, placeholderSubtitle, value, onChange }: PhotoUploaderProps) {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onChange(url, file);
    }
  };

  const handleCameraCapture = (url: string, blob: Blob) => {
    onChange(url, blob);
    setIsCameraOpen(false);
  };

  if (isCameraOpen) {
    return (
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-neutral-700">{label}</h3>
        <CameraCapture 
          onCapture={handleCameraCapture} 
          onCancel={() => setIsCameraOpen(false)} 
        />
      </div>
    );
  }

  if (value) {
    return (
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-neutral-700">{label}</h3>
        <ImagePreview 
          url={value} 
          onChange={() => fileInputRef.current?.click()} 
          onRemove={() => onChange(null, null)} 
        />
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/jpeg, image/png, image/webp" 
          onChange={handleFileUpload} 
        />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-neutral-700">{label}</h3>
      <div className="border-2 border-dashed border-neutral-300 bg-neutral-50 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-4 transition-colors hover:border-neutral-400">
        <div className="w-12 h-12 bg-neutral-200 text-neutral-500 rounded-full flex items-center justify-center">
          <ImageIcon className="w-6 h-6" />
        </div>
        
        <div>
          <p className="font-semibold text-neutral-800">{placeholderTitle}</p>
          <p className="text-sm text-neutral-500 mt-1 max-w-[250px] mx-auto">{placeholderSubtitle}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2 w-full sm:w-auto">
          <button 
            type="button" 
            onClick={() => setIsCameraOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-neutral-300 text-neutral-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors shadow-sm"
          >
            <Camera className="w-4 h-4" />
            Take Photo
          </button>
          
          <button 
            type="button" 
            onClick={() => fileInputRef.current?.click()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-900 text-white border border-neutral-900 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <ImageIcon className="w-4 h-4" />
            Upload Photo
          </button>
        </div>
      </div>
      
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/jpeg, image/png, image/webp" 
        onChange={handleFileUpload} 
      />
    </div>
  );
}
