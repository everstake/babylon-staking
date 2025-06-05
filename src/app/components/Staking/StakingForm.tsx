import { Form } from "@babylonlabs-io/core-ui";

import { Card } from "@/app/CoreUI/components/Card/Card";
import { Section } from "@/app/components/Section/Section";
import { useStakingService } from "@/app/hooks/services/useStakingService";
import { useStakingState } from "@/app/state/StakingState";
import { DelegationForm } from "@/components/staking/StakingForm";
import { StakingModal } from "@/components/staking/StakingModal";
import { getNetworkConfigBTC } from "@/config/network/btc";

const { networkName } = getNetworkConfigBTC();

export function StakingForm() {
  const {
    loading,
    validationSchema,
    stakingInfo,
    hasError,
    blocked,
    disabled,
    errorMessage,
  } = useStakingState();
  const { displayPreview } = useStakingService();

  return (
    <Section title={`${networkName} Staking`}>
      <Form
        schema={validationSchema}
        mode="onChange"
        reValidateMode="onChange"
        onSubmit={displayPreview}
      >
        <div className="flex flex-col gap-6 lg:flex-row">
          <Card className="flex w-full">
            <DelegationForm
              loading={loading}
              blocked={blocked}
              disabled={disabled}
              hasError={hasError}
              error={errorMessage}
              stakingInfo={stakingInfo}
            />
          </Card>
        </div>

        <StakingModal />
      </Form>
    </Section>
  );
}
