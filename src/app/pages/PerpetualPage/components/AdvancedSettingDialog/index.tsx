import cn from 'classnames';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { FormGroup } from 'app/components/Form/FormGroup';
import { Slider } from 'app/components/Form/Slider';

import { translations } from '../../../../../locales/i18n';
import { toNumberFormat } from '../../../../../utils/display-text/format';
import { Dialog } from '../../../../containers/Dialog';
import { selectPerpetualPage } from '../../selectors';
import { actions } from '../../slice';

type IAdvancedSettingDialogProps = {
  isOpen?: boolean;
};

export const AdvancedSettingDialog: React.FC<IAdvancedSettingDialogProps> = ({
  isOpen,
}) => {
  const { t } = useTranslation();
  const { position, leverage } = useSelector(selectPerpetualPage);
  const dispatch = useDispatch();
  const [slippage, setSlippage] = useState(0.5);

  return (
    <>
      <Dialog
        isOpen={!!isOpen}
        onClose={() => dispatch(actions.closeTradingModal())}
      >
        <div className="tw-mw-340 tw-mx-auto">
          <div className="tw-mb-6 text-left">
            {t(translations.marginTradeForm.fields.advancedSettings)}
          </div>
          <div className="tw-text-sm tw-font-light tw-tracking-normal">
            <FormGroup
              className="tw-mt-8"
              label={t(translations.buySovPage.slippageDialog.tolerance)}
            >
              <Slider
                value={slippage}
                onChange={setSlippage}
                min={0.1}
                max={1}
                stepSize={0.05}
                labelRenderer={value => <>{value}%</>}
                labelValues={[0.1, 0.25, 0.5, 0.75, 1]}
              />
            </FormGroup>
            <LabelValuePair
              label={t(translations.perpetualPage.tradeDialog.minLiq)}
              value={<>{toNumberFormat(leverage)}x</>}
            />
          </div>
        </div>
      </Dialog>
    </>
  );
};

interface LabelValuePairProps {
  label: React.ReactNode;
  value: React.ReactNode;
  className?: string;
}

function LabelValuePair(props: LabelValuePairProps) {
  return (
    <div
      className={cn(
        'tw-flex tw-flex-row tw-justify-between tw-space-x-4 tw-mb-2',
        props.className,
      )}
    >
      <div className="tw-truncate">{props.label}</div>
      <div className="tw-truncate tw-text-right">{props.value}</div>
    </div>
  );
}
