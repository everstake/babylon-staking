import { IoEye } from "react-icons/io5";

import { Heading } from "@/app/CoreUI/components/Heading/Heading";
import { getNetworkConfigBBN } from "@/config/network/bbn";

const { networkFullName: bbnNetworkFullName } = getNetworkConfigBBN();

export const NoDelegations = () => (
  <div className="flex flex-col pb-16 pt-6 text-accent-primary gap-4 text-center items-center justify-center">
    <div className="h-20 w-20 flex items-center justify-center">
      <IoEye className="text-5xl text-primary-light" />
    </div>
    <Heading variant="h4">No {bbnNetworkFullName} Stakes</Heading>
    <p className="text-base">
      This is where your registered stakes will be displayed.
    </p>
  </div>
);
