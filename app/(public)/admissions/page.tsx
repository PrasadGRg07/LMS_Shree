import AdmissionsHero from "@/components/sections/AdmissionsHero";
import WhyChooseSchool from "@/components/sections/WhyChooseSchool";
import AdmissionProcess from "@/components/sections/AdmissionProcess";
import AdmissionRequirements from "@/components/sections/AdmissionRequirements";
import Eligibility from "@/components/sections/Eligibility";
import RequiredDocuments from "@/components/sections/RequiredDocuments";
import FeeStructure from "@/components/sections/FeeStructure";
import AdmissionDates from "@/components/sections/AdmissionDates";
import FAQ from "@/components/sections/FAQ";
import AdmissionCTA from "@/components/sections/AdmissionCTA";

export default function AdmissionsPage() {
  return (
    <>
      <AdmissionsHero />
      <WhyChooseSchool />
      <AdmissionProcess />
      <AdmissionRequirements />
      <Eligibility />
      <RequiredDocuments />
      <FeeStructure />
      <AdmissionDates />
      <FAQ />
      <AdmissionCTA />
    </>
  );
}
