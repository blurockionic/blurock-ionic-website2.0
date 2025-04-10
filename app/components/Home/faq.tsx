import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQs() {
  return (
    <div className='mt-20 w-full flex flex-col justify-center items-center px-4'>
    <h1 className='font-bold mx-[97px] text-2xl mb-[14px]'>Frequently Asked Questions</h1>
    <p className='text-md mt-[24px] text-start'>
      Have questions about our services, solutions, or how Blurock Ionic can help your business? We've got you covered.
    </p>
  
    <Accordion type="single" collapsible className="w-full mt-6 max-w-3xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>What services does Blurock Ionic offer?</AccordionTrigger>
        <AccordionContent>
          We provide full-cycle Web & App Development, Graphic Design, Digital Marketing, and Social Media Management tailored to enterprise needs.
        </AccordionContent>
      </AccordionItem>
  
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I get a custom website or mobile app for my business?</AccordionTrigger>
        <AccordionContent>
          Absolutely! We specialize in building custom web and mobile applications that align with your brand and business goals.
        </AccordionContent>
      </AccordionItem>
  
      <AccordionItem value="item-3">
        <AccordionTrigger>What is marriagevendor.com?</AccordionTrigger>
        <AccordionContent>
          It's one of our in-house platforms that connects users with top-rated wedding vendors, making event planning easy and efficient.
        </AccordionContent>
      </AccordionItem>
  
      <AccordionItem value="item-4">
        <AccordionTrigger>How does Blurock Ionic help with social media growth?</AccordionTrigger>
        <AccordionContent>
          We offer end-to-end social media management including content creation, strategy, posting, and audience engagement to grow your online presence.
        </AccordionContent>
      </AccordionItem>
  
      <AccordionItem value="item-5">
        <AccordionTrigger>How do I get a quote for my project?</AccordionTrigger>
        <AccordionContent>
          Just head to our Contact Us page or reach out via email/phone. Share your requirements and our team will get back with a custom quote.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
  
  )
}
