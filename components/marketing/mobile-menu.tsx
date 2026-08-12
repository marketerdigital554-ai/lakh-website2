"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col bg-navy px-6 py-6 md:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold text-warm-white">LAKH</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-md"
            >
              <X className="h-6 w-6 text-warm-white" aria-hidden />
            </button>
          </div>

          <nav
            className="mt-12 flex flex-1 flex-col gap-6"
            aria-label="Mobile primary"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-2xl font-bold text-warm-white"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pb-4">
            <Button variant="outline-light" size="lg" asChild>
              <Link href="/login" onClick={onClose}>
                Log in
              </Link>
            </Button>
            <Button variant="solar" size="lg" asChild>
              <Link href="/register" onClick={onClose}>
                Get started
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
