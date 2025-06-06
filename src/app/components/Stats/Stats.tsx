import { memo } from "react";

import { List } from "@/app/CoreUI/components/List/List";
import { Section } from "@/app/components/Section/Section";
import { usePrice } from "@/app/hooks/client/api/usePrices";
import { useSystemStats } from "@/app/hooks/client/api/useSystemStats";
import { getNetworkConfigBTC } from "@/config/network/btc";
import { satoshiToBtc } from "@/utils/btc";
import { formatBTCTvl } from "@/utils/formatBTCTvl";
import "./Stats.css";

import { StatItem } from "./StatItem";

const { coinSymbol } = getNetworkConfigBTC();

const formatter = Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 2,
});

export const Stats = memo(() => {
  const {
    data: {
      total_active_tvl: totalActiveTVL = 0,
      active_tvl: activeTVL = 0,
      total_finality_providers: totalFPs = 0,
      active_finality_providers: activeFPs = 0,
      btc_staking_apr: stakingAPR,
    } = {},
    isLoading,
  } = useSystemStats();
  const usdRate = usePrice(coinSymbol);

  return (
    <Section
      title="Babylon Bitcoin Staking Stats"
      titleClassName="text-accent-contrast"
    >
      <List orientation="adaptive" className="stats-bg">
        <StatItem
          loading={isLoading}
          title={`Total ${coinSymbol} TVL`}
          value={formatBTCTvl(
            satoshiToBtc(totalActiveTVL),
            coinSymbol,
            usdRate,
          )}
          tooltip="Total number of Bitcoins staked in the protocol"
        />

        <StatItem
          loading={isLoading}
          title={`Registered ${coinSymbol} TVL`}
          value={formatBTCTvl(satoshiToBtc(activeTVL), coinSymbol, usdRate)}
          tooltip={
            <>
              Total number of Bitcoins staked to secure Babylon Genesis. Follow
              this{" "}
              <a
                href="https://babylonlabs.io/blog/phase-2-btc-staking-participation-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary underline"
              >
                guide
              </a>{" "}
              on how to transition a Phase-1 stake or register a new one
            </>
          }
        />

        <StatItem
          hidden={!stakingAPR}
          loading={isLoading}
          title={`${coinSymbol} Staking APR`}
          value={`${formatter.format(stakingAPR ? stakingAPR * 100 : 0)}%`}
          tooltip="Annual Percentage Reward (APR) is a dynamic estimate of the annualized staking reward rate based on current network conditions, and it refers to staking rewards rather than traditional lending interest. Rewards are distributed in BABY tokens but shown as a Bitcoin-equivalent rate relative to the Bitcoin initially staked. APR is calculated using U.S. dollar values for Bitcoin and BABY from independent, reputable sources. The APR shown is an approximate figure that can fluctuate, and the displayed value may not always be completely accurate. Actual rewards are not guaranteed and may vary over time. Staking carries exposure to slashing and other risks"
        />
      </List>
    </Section>
  );
});

Stats.displayName = "Stats";
