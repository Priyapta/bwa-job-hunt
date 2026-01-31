import { Button } from "@/components/ui/button";
import Clients from "@/components/organisms/Clients";
import Hero from "@/components/organisms/Hero";
import Image from "next/image";

import Category from "@/components/organisms/Category/Category";
import BannerSignUp from "@/components/organisms/BannerSignUp";
import FeatureJobs from "@/components/organisms/FeatureJobs";
import LatestJob from "@/components/organisms/LatestJob";

export default function Home() {
  return (
    <>
      <div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
        <Image src="/images/pattern.png" alt="/images/pattern.png" fill />
      </div>
      <div className="px-32">
        <Hero />
        <Clients />
        <Category />
        <BannerSignUp />
        <FeatureJobs />
        <LatestJob />
      </div>
    </>
  );
}
