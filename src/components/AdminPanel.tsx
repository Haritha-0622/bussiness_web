import React, { useState } from 'react';
import { PhotoUploader } from './PhotoUploader';
import { Building2, Save } from 'lucide-react';
import { BusinessInfo } from '../types';

export function AdminPanel() {
  const [formData, setFormData] = useState<BusinessInfo>({
    name: '',
    tagline: '',
    email: '',
    phone: '',
    address: '',
    mapsUrl: '',
    latitude: '',
    longitude: '',
    shopPhoto: null,
    auditorPhoto: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (field: 'shopPhoto' | 'auditorPhoto', url: string | null, file: File | Blob | null) => {
    // In a production application, you would upload `file` to an external
    // storage service (like Firebase Storage, Cloudinary, AWS S3) and then
    // save the returned permanent URL. For this prototype, we store the local
    // Object URL to provide immediate preview capabilities.
    setFormData(prev => ({ ...prev, [field]: url }));
    if (file) {
      console.log(`[Storage Stub] Photo selected for ${field}:`, file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving business information to backend:', formData);
    alert('Changes saved successfully! Data is available in the console.');
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
          <Building2 className="w-7 h-7 text-blue-600" />
          Admin / Business Information
        </h1>
        <p className="text-neutral-500 mt-2 text-sm max-w-xl">
          Manage your website's public profile, contact details, and location. Updates here will reflect across your storefront.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        
        {/* Core Information Section */}
        <section className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm border border-neutral-200">
          <h2 className="text-lg font-semibold text-neutral-900 border-b border-neutral-100 pb-4 mb-5">
            Core Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-neutral-700">Business Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" 
                placeholder="Acme Corp" 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-neutral-700">Tagline</label>
              <input 
                type="text" 
                name="tagline" 
                value={formData.tagline} 
                onChange={handleChange} 
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" 
                placeholder="Quality you can trust" 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-neutral-700">Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" 
                placeholder="contact@acme.com" 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-neutral-700">Phone Number(s)</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" 
                placeholder="(555) 123-4567" 
              />
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm border border-neutral-200">
          <h2 className="text-lg font-semibold text-neutral-900 border-b border-neutral-100 pb-4 mb-5">
            Location Details
          </h2>
          <div className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-neutral-700">Physical Address</label>
              <textarea 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                rows={2} 
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none" 
                placeholder="123 Main St, Suite 100..." 
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-1.5 md:col-span-1">
                <label className="text-sm font-medium text-neutral-700">Google Maps URL</label>
                <input 
                  type="url" 
                  name="mapsUrl" 
                  value={formData.mapsUrl} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" 
                  placeholder="https://maps.google.com/..." 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-neutral-700">Latitude</label>
                <input 
                  type="text" 
                  name="latitude" 
                  value={formData.latitude} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-mono text-sm" 
                  placeholder="40.7128" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-neutral-700">Longitude</label>
                <input 
                  type="text" 
                  name="longitude" 
                  value={formData.longitude} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-mono text-sm" 
                  placeholder="-74.0060" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Media / Photos Section */}
        <section className="bg-white p-5 sm:p-7 rounded-2xl shadow-sm border border-neutral-200">
          <h2 className="text-lg font-semibold text-neutral-900 border-b border-neutral-100 pb-4 mb-6">
            Photographs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PhotoUploader 
              label="Shop / Office Photo"
              placeholderTitle="Add Shop Photo"
              placeholderSubtitle="Take a Photo or Upload an Existing Photo"
              value={formData.shopPhoto}
              onChange={(url, file) => handlePhotoChange('shopPhoto', url, file)}
            />

            <div className="md:hidden w-full h-px bg-neutral-100 my-2"></div>

            <PhotoUploader 
              label="Auditor / Business Owner Photo"
              placeholderTitle="Add Auditor Photo"
              placeholderSubtitle="Take a Photo or Upload an Existing Photo"
              value={formData.auditorPhoto}
              onChange={(url, file) => handlePhotoChange('auditorPhoto', url, file)}
            />
          </div>
        </section>

        {/* Action Bar */}
        <div className="flex justify-end pt-2">
          <button 
            type="submit" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm focus:ring-4 focus:ring-blue-500/20"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
}
