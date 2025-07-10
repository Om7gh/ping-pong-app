import InputField from "@/components/ui/utils/InputField";
import Titles from "@/components/ui/utils/Titles";
import { Form } from "react-router-dom";
import { useRef, useState } from "react";

export default function Settings() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);
  const [charCount, setCharCount] = useState(50);

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

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(50 - e.target.value.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 animate-fadeIn px-4">
      <Titles title="Player Settings" className="text-center" />

      <div className="flex flex-col items-center lg:flex-row gap-8 mt-8 bg-slate-800/50 rounded-xl p-8 border border-slate-700 shadow-lg">
        {/* Left Column - Avatar & Bio */}
        <div className="flex flex-col items-center w-full lg:w-1/3 space-y-8">
          <div className="relative group w-full max-w-xs text-center">
            <div className="w-40 h-40 rounded-full border-4 border-teal-400/30 p-1 overflow-hidden transition-all duration-300 group-hover:border-teal-400 mx-auto">
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
            <div className="mt-6 w-full text-center">
              <label
                htmlFor="avatar-upload"
                className="inline-flex bg-gradient-to-r from-teal-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:shadow-lg hover:shadow-teal-500/20 transition-all items-center gap-2">
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

          <div className="w-full max-w-xs space-y-4 text-center">
            <div className="relative">
              <label className="block text-sm font-medium text-teal-300 mb-2">
                Player Bio{" "}
                <span className="text-orange-400/80">(10-50 characters)</span>
              </label>
              <textarea
                maxLength={50}
                minLength={10}
                name="bio"
                className="w-full px-4 py-3 border-2 border-teal-400 rounded-lg shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-teal-500
                  placeholder-slate-500 text-teal-100 bg-slate-700/50 backdrop-blur-sm
                  transition-all"
                rows={4}
                placeholder="Describe your play style..."
                ref={bioRef}
                onChange={handleBioChange}
              />
              <div className="absolute -bottom-5 right-0 left-0 mx-auto w-fit px-2 py-1 bg-orange-500/90 text-slate-900 text-xs font-bold rounded-tl-md rounded-tr-md">
                {charCount} CHAR LEFT
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form Fields */}
        <Form
          method="POST"
          className="w-full lg:w-2/3 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
            <div className="space-y-2 text-center">
              <label className="block text-sm font-medium text-teal-400">
                Username
              </label>
              <InputField
                id="username"
                name="username"
                type="text"
                placeholder="Enter cool new name..."
                className="w-full bg-slate-700 border-slate-600 focus:border-teal-400 focus:ring-teal-400/50 text-center"
              />
            </div>

            <div className="space-y-2 text-center">
              <label className="block text-sm font-medium text-orange-400">
                New Password
              </label>
              <InputField
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-700 border-slate-600 focus:border-orange-400 focus:ring-orange-400/50 text-center"
              />
            </div>

            <div className="space-y-2 text-center md:col-span-2">
              <label className="block text-sm font-medium text-orange-400">
                Confirm Password
              </label>
              <InputField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-700 border-slate-600 focus:border-orange-400 focus:ring-orange-400/50 text-center"
              />
            </div>
          </div>

          <div className="pt-6 w-full max-w-xs">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-500 hover:to-orange-400 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-teal-500/30 transition-all flex items-center justify-center gap-2">
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

      {/* Danger Zone - Centered */}
      <div className="mt-8 bg-gradient-to-r from-slate-800/50 to-rose-900/20 rounded-xl p-6 border border-rose-800/50 max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-bold text-rose-400 flex items-center justify-center gap-2">
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
        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
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

export async function settingHandler({ request }) {
  const formData = await request.formData();
  const settings = {
    username: formData.get("username"),
    password: formData.get("password"),
    repeatPass: formData.get("confirmPassword"),
    avatar: formData.get("avatar"),
    bio: formData.get("bio"),
  };
  console.log(settings);
  return null;
}
