"use client";

import { useState, memo, ReactNode } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Send } from "lucide-react";

import NavHead from "./NavHead";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
}

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Dialog>
      <header className="sticky top-0 z-50 w-full bg-white">
        {/* Top Head */}
        <motion.div
          className="hidden md:block overflow-hidden"
          initial={{ height: "auto", opacity: 1 }}
          animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <NavHead scrolled={scrolled} />
        </motion.div>

        {/* Main Navbar */}
        <div
          className={`border-b transition-shadow ${
            scrolled ? "shadow-md" : "border-gray-200"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/fujian.svg"
                  alt="Fujian Accessories"
                  width={160}
                  height={40}
                  priority
                  className="w-36 lg:w-40"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-semibold transition ${
                      isActive(item.href)
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <DialogTrigger asChild>
                <Button className="hidden md:block bg-[#00019A] text-white hover:bg-[#000178]">
                  Get Quote
                </Button>
              </DialogTrigger>

              {/* Mobile Controls */}
              <div className="flex items-center gap-3 md:hidden">
                <DialogTrigger asChild>
                  <Button size="sm" className="bg-[#00019A] text-white">
                    Quote
                  </Button>
                </DialogTrigger>

                <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent side="left" className="w-80 p-0">
                    <div className="flex h-full flex-col">
                      <div className="flex items-center justify-between border-b p-6">
                        <Image
                          src="/fujian.svg"
                          alt="Logo"
                          width={140}
                          height={40}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setMobileOpen(false)}
                        >
                          <X />
                        </Button>
                      </div>

                      <nav className="flex-1 overflow-y-auto px-6 py-8">
                        {navItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block py-2 text-lg font-medium ${
                              isActive(item.href)
                                ? "text-blue-700"
                                : "text-gray-700"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </nav>

                      <div className="border-t p-6">
                        <DialogTrigger asChild>
                          <Button className="w-full bg-[#00019A] text-white">
                            Get Quote
                          </Button>
                        </DialogTrigger>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MODAL */}
      <DialogContent className="w-full max-w-xl rounded-2xl p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Send Us a Message
          </DialogTitle>
        </DialogHeader>

        <form className="mt-4 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
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

          <div className="grid gap-5 sm:grid-cols-2">
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
      </DialogContent>
    </Dialog>
  );
}

export default memo(Navbar);
