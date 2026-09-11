import React from 'react';
import { RefreshCcw, Trash2 } from 'lucide-react';

interface ImagePreviewProps {
  url: string;
  onRemove: () => void;
  onChange: () => void;
}

export function ImagePreview({ url, onRemove, onChange }: ImagePreviewProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50 shadow-sm relative group">
        <img src={url} alt="Preview" className="w-full h-64 sm:h-80 object-cover" />
      </div>
      
      <div className="flex flex-wrap gap-3 mt-1">
        <button 
          type="button" 
          onClick={onChange} 
          className="flex-1 bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 py-2.5 px-4 rounded-lg text-sm font-medium flex justify-center items-center gap-2 transition-colors shadow-sm"
        >
          <RefreshCcw className="w-4 h-4" /> Change Photo
        </button>
        <button 
          type="button" 
          onClick={onRemove} 
          className="flex-1 bg-red-50 hover:bg-red-100 text-red-700 py-2.5 px-4 rounded-lg text-sm font-medium flex justify-center items-center gap-2 transition-colors"
        >
          <Trash2 className="w-4 h-4" /> Remove Photo
        </button>
      </div>
    </div>
  );
}
