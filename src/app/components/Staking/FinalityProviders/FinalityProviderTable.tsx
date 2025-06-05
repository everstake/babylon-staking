/**
 * Import polyfill for array.toSorted
 */
import "core-js/features/array/to-sorted";

import { Loader, useWatch } from "@babylonlabs-io/core-ui";
import Image from "next/image";

import { Table } from "@/app/CoreUI/components/Table/Table";
import warningOctagon from "@/app/assets/warning-octagon.svg";
import warningTriangle from "@/app/assets/warning-triangle.svg";
import { useFinalityProviderState } from "@/app/state/FinalityProviderState";

import { finalityProviderColumns } from "./FinalityProviderColumns";
import { StatusView } from "./FinalityProviderTableStatusView";

interface FinalityProviderTable {
  onSelectRow?: (fpPK: string) => void;
}

export const FinalityProviderTable = ({
  onSelectRow,
}: FinalityProviderTable) => {
  const {
    isFetching,
    finalityProviders,
    hasError,
    fetchNextPage,
    isRowSelectable,
  } = useFinalityProviderState();

  const selectedFP = useWatch({ name: "finalityProvider", defaultValue: "" });

  const errorView = (
    <StatusView
      icon={
        <Image src={warningTriangle} alt="Warning" width={88} height={88} />
      }
      title="Failed to Load"
      description={
        <>
          The finality provider list failed to load. Please check <br />
          your internet connection or try again later.
        </>
      }
    />
  );

  const loadingView = (
    <StatusView
      icon={<Loader className="text-primary-light" />}
      title="Loading Finality Providers"
    />
  );

  const noMatchesView = (
    <StatusView
      icon={
        <Image src={warningOctagon} alt="Warning" width={160} height={160} />
      }
      title="No Matches Found"
    />
  );

  if (hasError) {
    return errorView;
  }

  if (isFetching && (!finalityProviders || finalityProviders.length === 0)) {
    return loadingView;
  }

  if (!isFetching && (!finalityProviders || finalityProviders.length === 0)) {
    return noMatchesView;
  }

  const everstakeProvider = finalityProviders.find(
    (fp) => fp.description?.moniker === "Everstake",
  );

  if (!everstakeProvider) {
    return noMatchesView;
  }

  return (
    <Table
      wrapperClassName="max-h-[28.5rem]"
      className="min-w-full"
      data={[everstakeProvider]}
      columns={finalityProviderColumns}
      loading={isFetching}
      hasMore={false}
      onLoadMore={fetchNextPage}
      selectedRow={selectedFP}
      onRowSelect={(row) => {
        onSelectRow?.(row?.btcPk ?? "");
      }}
      isRowSelectable={isRowSelectable}
    />
  );
};
