import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFactory } from "react-icons/md";
function DetailCompantPage() {
  return (
    <div className="">
      <div className="bg-slate-100 px-32 pt-16 pb-14 ">
        <div className="inline-flex gap-3 text-sm text-muted-foreground">
          <Link href="/" className="hover:underline hover:text-black">
            Home{" "}
          </Link>{" "}
          /
          <Link
            href="/find-companies"
            className="hover:underline hover:text-black"
          >
            Companies{" "}
          </Link>{" "}
          /
          <Link
            href="/detail/company/1"
            className="hover:underline hover:text-black"
          >
            Twitter{" "}
          </Link>{" "}
          /
        </div>
        <div>
          <div className="mt-10 inline-flex gap-6 items-start">
            <Image
              src="/images/company2.png"
              alt="/images/company2.png"
              width={150}
              height={150}
            />
            <div>
              <div className="inline-flex gap-4 items-center">
                <span className="text-4xl font-semibold">Twitter</span>
                <Badge>10 Jobs</Badge>
              </div>
              <div className="mt-2">
                <Link href="/" className="font-semibold text-primary">
                  https://twitter.com
                </Link>
              </div>
              <div className="inline-flex items-center gap-10 mt-6">
                <div className="inline-flex items-center gap-3">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <AiOutlineFire className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Founded</div>
                    <div className="font-semibold">January, 06 2026</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-3">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <IoPeopleOutline className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Employee</div>
                    <div className="font-semibold">151-250</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-3">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <AiOutlineFire className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Location</div>
                    <div className="font-semibold">Indonesia</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-3">
                  <div>
                    <div className="bg-white p-3 rounded-full">
                      <MdOutlineFactory className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Industry</div>
                    <div className="font-semibold">Advertising</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 py-16 flex flex-row items-start gap-10">
        <div className="w-3/4">
          <div className="text-3xl font-semibold mb-3">Company Profile</div>
          <div className="text-muted-foreground">LoremIpsum</div>
        </div>
        <div className="w-1/4"></div>
      </div>
    </div>
  );
}

export default DetailCompantPage;
