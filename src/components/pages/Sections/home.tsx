import TextAnimation from "@/components/pages/text-animation";
import Socials from "@/components/ui/social";

import { ISocial } from "@/types";
type Props = {
  socialsData: ISocial[];
};

const FcHome = ({ socialsData }: Props) => {
  return (
    <section className="flex min-h-custom w-full scroll-mt-16 items-center justify-center">
      <div className="flex w-full items-center justify-center md:py-52">
        <div className="flex flex-col gap-4 xl:gap-8">
          <h1 className="text-3xl font-bold md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-6xl">
            I&apos;m a Web & Software <br />
            Developer from India.
          </h1>
          <div className="flex flex-col gap-4 xl:gap-8">
            <h1 className="text-base italic md:text-sm lg:text-base 2xl:text-xl">
              Creating, Web Apps with
            </h1>
            <span className="h-14 text-xl font-semibold md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-4xl">
              <TextAnimation />
            </span>
          </div>
        </div>
      </div>
      <div className="absolute right-4 hidden md:flex md:items-center">
        <div className="flex flex-col items-end gap-2 lg:gap-4">
          <Socials socialsData={socialsData} varient="home" name="Github" />
          <Socials socialsData={socialsData} varient="home" name="LinkedIn" />
          <Socials socialsData={socialsData} varient="home" name="Twitter" />
          <Socials socialsData={socialsData} varient="home" name="Resume" />
        </div>
      </div>
    </section>
  );
};

export default FcHome;
