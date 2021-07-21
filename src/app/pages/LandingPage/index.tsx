/**
 *
 * LandingPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header } from 'app/components/Header';
import { translations } from '../../../locales/i18n';

export function LandingPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(translations.landingPage.meta.title)}</title>
        <meta
          name="description"
          content={t(translations.landingPage.meta.description)}
        />
      </Helmet>
      <Header />
      <div className="container tw-max-w-screen-2xl tw-mx-auto tw-mt-20">
        <div className="tw-grid tw-grid-cols-2">
          <div>Welcome</div>

          <div>Arbitrage opportunity</div>
        </div>
        <div className="tw-my-20 tw-text-center">Promotions</div>
        <div className="tw-grid tw-grid-cols-2">
          <div>Lending Assets</div>

          <div>Top AMM POOLS</div>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-my-20">
          <div>Top Spot pairs</div>

          <div>Top Margin pairs</div>
        </div>
        <div className="tw-text-center">TVL</div>
      </div>
    </>
  );
}
