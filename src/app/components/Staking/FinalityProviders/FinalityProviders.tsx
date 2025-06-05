import { HiddenField, useFormContext } from "@babylonlabs-io/core-ui";
import { useEffect } from "react";

import { useFinalityProviderState } from "@/app/state/FinalityProviderState";

const DEFAULT_EVERSTAKE_PROVIDER = {
  description: {
    moniker: "Everstake",
    identity: "",
    website: "https://everstake.one",
    securityContact: "account-babylon@everstake.one",
    details:
      "Everstake is a staking-as-a-service company. We help institutional investors and regular token holders to profit off their crypto assets. Choose the most promising projects, delegate with Everstake, and make a stable passive income.",
  },
  id: "bf68df67066633cba986c13a14a1edc34171884533ccb27f3ed26c8c93da1e83",
  rank: 14,
  state: "FINALITY_PROVIDER_STATUS_ACTIVE",
  commission: "0.050000000000000000",
  btcPk: "bf68df67066633cba986c13a14a1edc34171884533ccb27f3ed26c8c93da1e83",
  activeTVLSat: 512942660,
  activeDelegations: 874,
};

export const FinalityProviders = () => {
  const { setValue } = useFormContext();
  const { finalityProviders } = useFinalityProviderState();

  useEffect(() => {
    // Find and select Everstake provider
    const everstakeProvider =
      finalityProviders.find((fp) => fp.description?.moniker === "Everstake") ||
      DEFAULT_EVERSTAKE_PROVIDER;

    setValue("finalityProvider", everstakeProvider.btcPk, {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    });
  }, [finalityProviders, setValue]);

  return <HiddenField name="finalityProvider" defaultValue="" />;
};
