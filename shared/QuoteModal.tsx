"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Send } from "lucide-react";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
}

export default function QuoteModal({ open, onClose }: QuoteModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <h3 className="text-xl font-semibold">Send Us a Message</h3>

        <form className="mt-5 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Your Name
              </label>
              <input className="input" placeholder="John Doe" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                className="input"
                placeholder="john@email.com"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Contact Number
              </label>
              <input className="input" placeholder="+880 1XXXXXXXXX" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Subject
              </label>
              <input
                className="input"
                placeholder="Quotation / Sample / MOQ"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Write Something
            </label>
            <textarea
              rows={4}
              className="input resize-none"
              placeholder="Describe your requirement..."
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00019A] px-6 py-3 text-sm font-medium text-white hover:bg-[#000178]"
          >
            <Send className="h-4 w-4" />
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
