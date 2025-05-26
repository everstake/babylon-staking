/**
 * Import polyfill for array.toSorted
 */
import "core-js/features/array/to-sorted";

import { Table, useWatch } from "@babylonlabs-io/core-ui";
import Image from "next/image";

import warningOctagon from "@/app/assets/warning-octagon.svg";
import {
  FinalityProvider,
  FinalityProviderState,
} from "@/app/types/finalityProviders";

import { providerMainnet } from "./provider.data.js";
import { finalityProviderColumns } from "./FinalityProviderColumns";
import { StatusView } from "./FinalityProviderTableStatusView";

interface FinalityProviderTable {
  onSelectRow?: (fpPK: string) => void;
}

export const FinalityProviderTable = ({
  onSelectRow,
}: FinalityProviderTable) => {
  const finalityProviders: FinalityProvider[] = [
    {
      ...providerMainnet,
      id: providerMainnet.btcPk,
      rank: 1,
      state: FinalityProviderState.ACTIVE,
    },
  ];
  const isRowSelectable = () => true;

  const selectedFP = useWatch({ name: "finalityProvider", defaultValue: "" });

  const noMatchesView = (
    <StatusView
      icon={
        <Image src={warningOctagon} alt="Warning" width={160} height={160} />
      }
      title="No Matches Found"
    />
  );

  if (!finalityProviders || finalityProviders.length === 0) {
    return noMatchesView;
  }

  return (
    <Table
      wrapperClassName="max-h-[28.5rem]"
      className="min-w-full"
      data={finalityProviders}
      columns={finalityProviderColumns}
      loading={false}
      hasMore={false}
      selectedRow={selectedFP}
      onRowSelect={(row) => {
        onSelectRow?.(row?.btcPk ?? "");
      }}
      isRowSelectable={isRowSelectable}
    />
  );
};
