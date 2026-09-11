import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, Check, RefreshCw, Camera } from 'lucide-react';

interface CameraCaptureProps {
  onCapture: (url: string, blob: Blob) => void;
  onCancel: () => void;
}

export function CameraCapture({ onCapture, onCancel }: CameraCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<{ url: string; blob: Blob } | null>(null);

  const stopStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  }, []);

  const startCamera = async () => {
    setError(null);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      streamRef.current = mediaStream;
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Camera error:", err);
      setError("Unable to access camera. Please ensure permissions are granted.");
    }
  };

  useEffect(() => {
    startCamera();
    return () => stopStream();
  }, [stopStream]);

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            setPreview({ url, blob });
            stopStream(); // Stop the camera once captured
          }
        }, 'image/jpeg', 0.9);
      }
    }
  };

  const retakePhoto = () => {
    setPreview(null);
    startCamera();
  };

  const confirmPhoto = () => {
    if (preview) {
      onCapture(preview.url, preview.blob);
    }
  };

  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-neutral-800">
      {!preview ? (
        <div className="relative">
          {error ? (
            <div className="h-64 sm:h-80 flex flex-col items-center justify-center p-6 text-center bg-neutral-800 text-neutral-300">
              <p className="mb-4">{error}</p>
              <button 
                type="button"
                onClick={onCancel} 
                className="px-5 py-2.5 bg-neutral-700 hover:bg-neutral-600 rounded-lg text-sm font-medium transition-colors"
              >
                Close Camera
              </button>
            </div>
          ) : (
            <>
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                className="w-full h-64 sm:h-80 object-cover bg-black" 
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex justify-center items-center gap-6">
                <button 
                  type="button" 
                  onClick={onCancel} 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800/80 text-white hover:bg-neutral-700 transition-colors backdrop-blur-sm"
                  aria-label="Cancel"
                >
                  <X className="w-5 h-5" />
                </button>
                <button 
                  type="button" 
                  onClick={takePhoto} 
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-neutral-900 border-4 border-neutral-300 hover:scale-105 active:scale-95 transition-transform"
                  aria-label="Take Photo"
                >
                  <Camera className="w-6 h-6" />
                </button>
                <div className="w-12 h-12" /> {/* Spacer for centering the take photo button */}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="relative">
          <img src={preview.url} alt="Captured preview" className="w-full h-64 sm:h-80 object-cover bg-black" />
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex justify-between items-center">
            <button 
              type="button" 
              onClick={retakePhoto} 
              className="px-4 py-2.5 flex items-center gap-2 rounded-lg bg-neutral-800/80 backdrop-blur-sm text-white hover:bg-neutral-700 transition-colors text-sm font-medium"
            >
              <RefreshCw className="w-4 h-4" /> Retake
            </button>
            <button 
              type="button" 
              onClick={confirmPhoto} 
              className="px-5 py-2.5 flex items-center gap-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors text-sm font-medium shadow-sm"
            >
              <Check className="w-4 h-4" /> Confirm
            </button>
          </div>
        </div>
      )}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
