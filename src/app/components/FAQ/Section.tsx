import { ReactNode } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { Accordion } from "@/app/CoreUI/components/Accordion/Accordion";
import { AccordionDetails } from "@/app/CoreUI/components/Accordion/components/AccordionDetails";
import { AccordionSummary } from "@/app/CoreUI/components/Accordion/components/AccordionSummary";
import { Heading } from "@/app/CoreUI/components/Heading/Heading";

interface SectionProps {
  title: string;
  content: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div className="border-primary-light/20 pt-6 first:pt-0 pb-2 first:pb-0">
      <Accordion className="text-accent-secondary">
        <AccordionSummary
          renderIcon={(expanded) =>
            expanded ? (
              <AiOutlineMinus size={24} />
            ) : (
              <AiOutlinePlus size={24} />
            )
          }
        >
          <Heading variant="h6">
            <span className="align-middle">{title}</span>
          </Heading>
        </AccordionSummary>
        <AccordionDetails className="p-2" unmountOnExit>
          <div className="prose prose-sm max-w-none">{content}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
