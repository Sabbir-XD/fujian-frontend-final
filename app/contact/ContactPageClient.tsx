"use client";

import { memo } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Globe,
  Send,
  Factory,
} from "lucide-react";

function ContactPageClient() {
  return (
    <main className="relative pt-24 bg-linear-to-b from-blue-50 via-white to-white">
      <section className="mx-auto max-w-7xl px-4 md:px-6">
        {/* MAIN GRID */}
        <div className="grid gap-14 lg:grid-cols-2 items-stretch">
          {/* LEFT – FORM */}
          <div className="h-full rounded-3xl border bg-white p-8 shadow-sm flex flex-col">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5 flex-1">
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Your Name">
                  <input className="input" placeholder="John Doe" />
                </Field>
                <Field label="Your Email">
                  <input
                    type="email"
                    className="input"
                    placeholder="john@email.com"
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Contact Number">
                  <input className="input" placeholder="+880 1XXXXXXXXX" />
                </Field>
                <Field label="Subject">
                  <input
                    className="input"
                    placeholder="Quotation / Sample / MOQ"
                  />
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
                className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#00019A] px-6 py-3 text-sm font-medium text-white hover:bg-[#000178]"
              >
                <Send className="h-4 w-4" />
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* RIGHT – INFO */}
          <div className="h-full grid grid-cols-2 auto-rows-min gap-5">
            <InfoCard
              icon={<Mail />}
              title="Email"
              value="info@faclbangladesh.com"
            />
            <InfoCard
              icon={<MessageCircle />}
              title="Support Email"
              value="support@faclbangladesh.com"
            />
            <InfoCard icon={<Phone />} title="Phone" value="+88 01725-752574" />
            <InfoCard
              icon={<Globe />}
              title="Website"
              value="www.faclbangladesh.com"
            />

            <LocationCard
              className="col-span-2"
              title="Bangladesh Office & Factory"
              address={`Plot No. 15, Road No. 16, Block-M,
Eastern Housing (2nd Phase), Rupnagar,
Dhaka-1216, Bangladesh`}
              phone="+88 01725-752574"
              emails={["info@faclbangladesh.com", "support@faclbangladesh.com"]}
            />

            <LocationCard
              className="col-span-2"
              title="China Manufacturing Factory"
              address={`Shigui Xucuo Industrial Area,
Longhu Town, Jinjiang City,
Fujian Province, China`}
              phone="+86-85336880"
              emails={[
                "support@faclbangladesh.com",
                "facl.china@faclbangladesh.com",
              ]}
            />
          </div>
        </div>

        {/* MAP – BELOW */}
        <div className="mt-20 overflow-hidden rounded-3xl border shadow-sm">
          <div className="overflow-hidden rounded-3xl border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.751238279067!2d90.35045497518992!3d23.827443378617897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10001edce73%3A0xf6404849b479ee0c!2sFujian%20Accessories%20CO.%20Ltd.!5e0!3m2!1sen!2sbd!4v1766307335815!5m2!1sen!2sbd"
              className="h-105 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* INPUT STYLE */}
      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #d1d5db;
          padding: 0.65rem 1rem;
          font-size: 0.875rem;
          outline: none;
        }
        .input:focus {
          border-color: #00019a;
          box-shadow: 0 0 0 3px rgba(0, 1, 154, 0.15);
        }
      `}</style>
    </main>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-[#00019A]">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-700">{value}</p>
      </div>
    </div>
  );
}

function LocationCard({
  title,
  address,
  phone,
  emails,
  className = "",
}: {
  title: string;
  address: string;
  phone: string;
  emails: string[];
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white p-6 shadow-sm space-y-3 ${className}`}
    >
      <h3 className="flex items-center gap-2 text-sm font-semibold text-[#00019A]">
        <MapPin className="h-4 w-4" />
        {title}
      </h3>
      <p className="text-xs text-gray-600 whitespace-pre-line">{address}</p>
      <div className="text-xs md:text-md text-gray-700">
        <p className="flex justify-items-center items-center gap-1">
          <Phone size={16} /> {phone}
        </p>
        <br />
        <p className="flex justify-items-center items-center gap-1">
          <Mail size={16} /> {emails.join(", ")}
        </p>
      </div>
    </div>
  );
}

export default memo(ContactPageClient);
