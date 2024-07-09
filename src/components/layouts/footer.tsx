import Social from "@/components/ui/social";

import { ISocial } from "@/types";
type Props = {
  socialsData: ISocial[];
};

const Footer = ({ socialsData }: Props) => {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-background shadow-md shadow-violet-600 drop-shadow">
      <div className="flex w-full flex-row-reverse p-4 md:w-9/12">
        <div className="grid w-min grid-flow-row gap-2 text-right">
          <span className="text-lg font-medium">Socials</span>
          <Social socialsData={socialsData} varient="contact" name="Github" />
          <Social socialsData={socialsData} varient="contact" name="LinkedIn" />
          <Social socialsData={socialsData} varient="contact" name="Twitter" />
          <Social socialsData={socialsData} varient="contact" name="Resume" />
        </div>
      </div>
      <div className="text-center text-base font-medium md:text-base">
        <span>©{date} Rahul Gajbhiye</span>
      </div>
    </footer>
  );
};

export default Footer;
