import InputField from "@/components/ui/InputField";
import Titles from "@/components/ui/Titles";
import { Form } from "react-router-dom";
import { useState } from "react";

export default function Settings() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-4/5 mx-auto py-8 animate-fadeIn">
      <Titles title="Player Settings" />

      <div className="flex flex-col lg:flex-row gap-8 mt-8 bg-slate-800/50 rounded-xl p-8 border border-slate-700 shadow-lg">
        <div className="flex flex-col items-center lg:w-1/3">
          <div className="relative group">
            <div className="w-40 h-40 rounded-full border-4 border-teal-400/30 p-1 overflow-hidden transition-all duration-300 group-hover:border-teal-400">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-slate-700 flex items-center justify-center">
                  <span className="text-4xl">🏓</span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <label
                htmlFor="avatar-upload"
                className="bg-gradient-to-r from-teal-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:shadow-lg hover:shadow-teal-500/20 transition-all flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Change Avatar
              </label>
              <input
                id="avatar-upload"
                name="avatar"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-white mb-1">Current Level</h3>
            <div className="w-full bg-slate-700 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-teal-400 to-orange-400 h-2.5 rounded-full"
                style={{ width: "65%" }}></div>
            </div>
            <p className="text-sm text-slate-400 mt-2">Pro Player (65%)</p>
          </div>
        </div>

        <Form method="POST" className="flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-teal-400">
                Username
              </label>
              <InputField
                id="name"
                name="name"
                type="text"
                placeholder="Enter cool new name..."
                className="bg-slate-700 border-slate-600 focus:border-teal-400 focus:ring-teal-400/50"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-teal-400">
                Email
              </label>
              <InputField
                id="email"
                name="email"
                type="email"
                placeholder="your.new@email.com"
                className="bg-slate-700 border-slate-600 focus:border-teal-400 focus:ring-teal-400/50"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-orange-400">
                New Password
              </label>
              <InputField
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="bg-slate-700 border-slate-600 focus:border-orange-400 focus:ring-orange-400/50"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-orange-400">
                Confirm Password
              </label>
              <InputField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="bg-slate-700 border-slate-600 focus:border-orange-400 focus:ring-orange-400/50"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-500 hover:to-orange-400 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-teal-500/30 transition-all flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Save Changes
            </button>
          </div>
        </Form>
      </div>

      {/* Danger Zone */}
      <div className="mt-8 bg-gradient-to-r from-slate-800/50 to-rose-900/20 rounded-xl p-6 border border-rose-800/50">
        <h3 className="text-xl font-bold text-rose-400 flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          Danger Zone
        </h3>
        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <button className="px-4 py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 rounded-lg border border-rose-700 transition-all text-sm font-medium">
            Deactivate Account
          </button>
          <button className="px-4 py-2 bg-rose-800/40 hover:bg-rose-700/50 text-rose-200 rounded-lg border border-rose-800 transition-all text-sm font-medium">
            Delete Account Permanently
          </button>
        </div>
      </div>
    </div>
  );
}
