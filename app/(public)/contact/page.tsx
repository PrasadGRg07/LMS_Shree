import ContactHero from "@/components/sections/ContactHero";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import ContactMap from "@/components/sections/ContactMap";
import DepartmentContacts from "@/components/sections/DepartmentContacts";
import EmergencyContact from "@/components/sections/EmergencyContact";
export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <ContactInfo />
      <DepartmentContacts />

      <ContactForm />

      <ContactMap />

      <EmergencyContact />
    </>
  );
}
