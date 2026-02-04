"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-secondary-accent overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-6 text-left bg-dark-grey hover:bg-secondary-accent transition-colors"
          >
            <span className="font-heading text-lg tracking-wide text-foreground pr-4">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-primary-accent" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="px-6 pb-6 text-gray-400 tracking-wide leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
