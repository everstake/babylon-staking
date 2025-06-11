import { Avatar, AvatarGroup } from "@babylonlabs-io/core-ui";
import {
  useWalletConnect,
  useWidgetState,
} from "@babylonlabs-io/wallet-connector";
import { useCallback, useMemo, useRef, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PiWalletBold } from "react-icons/pi";
import { Tooltip } from "react-tooltip";

import { Button } from "@/app/CoreUI/components/Button";
import { Text } from "@/app/CoreUI/components/Text";
import { useBTCWallet } from "@/app/context/wallet/BTCWalletProvider";
import { useCosmosWallet } from "@/app/context/wallet/CosmosWalletProvider";
import { useHealthCheck } from "@/app/hooks/useHealthCheck";
import { useAppState } from "@/app/state";
import { useDelegationV2State } from "@/app/state/DelegationV2State";
import { getNetworkConfigBBN } from "@/config/network/bbn";

import { WalletDisconnectModal } from "../Modals/WalletDisconnectModal";

interface ConnectProps {
  loading?: boolean;
  onConnect: () => void;
}

const { networkFullName: bbnNetworkFullName } = getNetworkConfigBBN();

export const Connect: React.FC<ConnectProps> = ({
  loading = false,
  onConnect,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { includeOrdinals, excludeOrdinals, ordinalsExcluded } = useAppState();
  const { linkedDelegationsVisibility, displayLinkedDelegations } =
    useDelegationV2State();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Wallet states
  const {
    loading: btcLoading,
    address: btcAddress,
    connected: btcConnected,
  } = useBTCWallet();
  const {
    loading: bbnLoading,
    bech32Address,
    connected: bbnConnected,
  } = useCosmosWallet();
  const { disconnect } = useWalletConnect();

  // Widget states
  const { selectedWallets } = useWidgetState();

  const {
    isApiNormal,
    isGeoBlocked,
    apiMessage,
    isLoading: isHealthcheckLoading,
  } = useHealthCheck();
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);

  const isConnected = useMemo(
    () =>
      btcConnected && bbnConnected && !isGeoBlocked && !isHealthcheckLoading,
    [btcConnected, bbnConnected, isGeoBlocked, isHealthcheckLoading],
  );

  const isLoading =
    isConnected || !isApiNormal || loading || btcLoading || bbnLoading;

  const handleDisconnectClick = useCallback(() => {
    setShowDisconnectModal(true);
  }, []);

  const handleDisconnectCancel = useCallback(() => {
    setShowDisconnectModal(false);
  }, []);

  const handleDisconnectConfirm = useCallback(() => {
    setShowDisconnectModal(false);
    disconnect();
  }, [disconnect]);

  const renderApiNotAvailableTooltip = useMemo(() => {
    if (!isGeoBlocked && isApiNormal) return null;

    return (
      <>
        <span
          className="cursor-pointer text-xs"
          data-tooltip-id="tooltip-connect"
          data-tooltip-content={apiMessage}
          data-tooltip-place="bottom"
        >
          <AiOutlineInfoCircle />
        </span>
        <Tooltip id="tooltip-connect" className="tooltip-wrap" />
      </>
    );
  }, [isGeoBlocked, isApiNormal, apiMessage]);

  if (!isConnected) {
    return (
      <div className="flex items-center gap-2">
        <Button
          size="large"
          color="secondary"
          className="h-[2.5rem] min-h-[2.5rem] px-6 py-2 text-white text-base"
          onClick={onConnect}
          disabled={isLoading}
        >
          <PiWalletBold size={20} className="flex md:hidden" />
          <span className="hidden md:flex">Connect Wallets</span>
        </Button>

        {!isApiNormal && renderApiNotAvailableTooltip}
      </div>
    );
  }

  const walletContent = (
    <div className="flex items-center justify-center w-full p-2">
      <button
        className="flex items-center gap-2 text-secondary-main hover:text-secondary-dark transition-colors w-full justify-center py-2"
        onClick={handleDisconnectClick}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="fill-es-text-secondary md:hover:fill-es-accent size-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M215.469 332.802l29.863 29.864L352 256 245.332 149.333l-29.863 29.865 55.469 55.469H64v42.666h205.864l-54.395 55.469zM405.334 64H106.666C83.198 64 64 83.198 64 106.666V192h42.666v-85.333h298.668v298.668H106.666V320H64v85.334C64 428.802 83.198 448 106.666 448h298.668C428.802 448 448 428.802 448 405.334V106.666C448 83.198 428.802 64 405.334 64z"></path>
        </svg>
      </button>
    </div>
  );

  return (
    <>
      <div className="relative flex flex-row items-center gap-2">
        <div className="flex flex-row">
          <AvatarGroup max={2} variant="circular">
            <Avatar
              alt={selectedWallets["BTC"]?.name}
              url={selectedWallets["BTC"]?.icon}
              size="large"
              className="object-contain bg-accent-contrast box-content border-[3px] border-primary-main"
            />
            <Avatar
              alt={selectedWallets["BBN"]?.name}
              url={selectedWallets["BBN"]?.icon}
              size="large"
              className="object-contain bg-accent-contrast box-content border-[3px] border-primary-main"
            />
          </AvatarGroup>
        </div>
        <div className="md:flex flex-col min-w-[145px] text-secondary-contrast">
          <Text variant="body1">Wallet Connected</Text>
          <div className="flex flex-row text-sm gap-2">
            <Text variant="body1">{btcAddress.slice(0, 6)}</Text>
            <Text variant="body1">|</Text>
            <Text variant="body1">{bech32Address.slice(0, 6)}</Text>
          </div>
        </div>

        {walletContent}
      </div>
      <WalletDisconnectModal
        isOpen={showDisconnectModal}
        onClose={handleDisconnectCancel}
        onDisconnect={handleDisconnectConfirm}
        closeMenu={() => setIsMenuOpen(false)}
      />
    </>
  );
};
