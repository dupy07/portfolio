import { User, Mail, BookOpen, Phone, Calendar, MapPinned } from "lucide-react";

export const Navlinks = [
  { name: "Home", href: "/", key: "Home" },
  { name: "My Projects", href: "/My-Projects", key: "My-Projects" },
  { name: "About", href: "/About", key: "About" },
  { name: "Contact", href: "/Contact", key: "Contact" },
];

interface ContactDetail {
  key: string;
  text: string;
  icon:
    | typeof User
    | typeof Mail
    | typeof BookOpen
    | typeof Phone
    | typeof Calendar
    | typeof MapPinned;
}

export const ContactDetails: ContactDetail[] = [
  {
    icon: User,
    text: "Piyush Shrestha",
    key: "name",
  },
  {
    icon: Mail,
    text: "piyush.xtha5@gmail.com",
    key: "email",
  },
  {
    icon: BookOpen,
    text: "Bachelor on Computer Application",
    key: "education",
  },
  {
    icon: Phone,
    text: "+977 9803376882",
    key: "phone",
  },
  {
    icon: Calendar,
    text: "Born on 11 Feb, 2002",
    key: "dob",
  },
  {
    icon: MapPinned,
    text: "Jorpati, Kathmandu",
    key: "address",
  },
];
