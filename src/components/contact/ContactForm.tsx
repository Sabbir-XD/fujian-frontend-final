import { Send } from "lucide-react";
import { ReactNode } from "react";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  return (
    <form className="space-y-5 w-full">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Your Name">
          <input className="input" placeholder="John Doe" />
        </Field>

        <Field label="Your Email">
          <input type="email" className="input" placeholder="john@email.com" />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Contact Number">
          <input className="input" placeholder="+880 1XXXXXXXXX" />
        </Field>

        <Field label="Subject">
          <input className="input" placeholder="Quotation / Sample / MOQ" />
        </Field>
      </div>

      <Field label="Write Something">
        <textarea
          rows={4}
          className="input resize-none"
          placeholder="Describe your requirement in details..."
        />
      </Field>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00019A] px-6 py-3 text-sm font-medium text-white hover:bg-[#000178]"
      >
        <Send className="h-4 w-4" />
        Submit Inquiry
      </button>
    </form>
  );
}
