import SocialsEditor from "@/components/pages/Dashboard/socials";
import Social from "@/components/ui/social";
import { getSocialsData } from "@/lib/db/db-helper";

type Props = {};

export default async function DashboardSocials(props: Props) {
  const socialsData = await getSocialsData();
  return (
    <>
      <SocialsEditor />
      <div className="grid auto-rows-min gap-2 text-center">
        <span className="text-xl">Socials</span>
        <Social socialsData={socialsData} varient="home" name="Github" />
        <Social socialsData={socialsData} varient="home" name="LinkedIn" />
        <Social socialsData={socialsData} varient="home" name="Twitter" />
        <Social socialsData={socialsData} varient="home" name="Resume" />
      </div>
    </>
  );
}
