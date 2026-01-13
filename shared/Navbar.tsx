"use client";

import { useState, memo } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import NavHead from "./NavHead";
import QuoteModal from "./QuoteModal";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white">
        {/* Top Head */}
        <motion.div
          className="hidden md:block overflow-hidden"
          initial={{ height: "auto", opacity: 1 }}
          animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.3 }}
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

              {/* Desktop Nav */}
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
              <Button
                onClick={() => setQuoteOpen(true)}
                className="hidden md:block bg-[#00019A] text-white hover:bg-[#000178]"
              >
                Get Quote
              </Button>

              {/* Mobile */}
              <div className="flex items-center gap-3 md:hidden">
                <Button
                  size="sm"
                  onClick={() => setQuoteOpen(true)}
                  className="bg-[#00019A] text-white"
                >
                  Quote
                </Button>

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

                      <nav className="flex-1 px-6 py-8">
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
                        <Button
                          onClick={() => {
                            setMobileOpen(false);
                            setQuoteOpen(true);
                          }}
                          className="w-full bg-[#00019A] text-white"
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PORTAL MODAL */}
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}

export default memo(Navbar);
