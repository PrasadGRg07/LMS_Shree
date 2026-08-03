"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <span className="
            rounded-full
            bg-blue-100
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-700
          ">
            FAQ
          </span>

          <h2 className="
            mt-6
            text-4xl
            font-bold
            text-slate-900
            md:text-5xl
          ">
            Frequently Asked Questions
          </h2>

          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-slate-600
          ">
            Find answers to common questions about our learning platform.
          </p>
        </div>


        <div className="mt-14">
          
          <Accordion className="space-y-4">

            {faqs.map((faq, index) => (

              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="
                  rounded-2xl
                  border
                  bg-slate-50
                  px-6
                "
              >

                <AccordionTrigger
                  className="
                    text-lg
                    font-semibold
                    text-slate-900
                    hover:no-underline
                  "
                >
                  {faq.question}
                </AccordionTrigger>


                <AccordionContent
                  className="
                    pb-6
                    leading-7
                    text-slate-600
                  "
                >
                  {faq.answer}
                </AccordionContent>


              </AccordionItem>

            ))}

          </Accordion>

        </div>

      </div>
    </section>
  );
}