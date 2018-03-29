import React from 'react';
import translate, { translateRaw } from 'translations';
import { Input } from 'components/ui';
import { TimeBountyFieldFactory } from './TimeBountyFieldFactory';

interface Props {
  isReadOnly?: boolean;
}

export const TimeBountyField: React.SFC<Props> = ({ isReadOnly }) => (
  <TimeBountyFieldFactory
    withProps={({ currentTimeBounty, isValid, onChange, readOnly }) => (
      <div className="input-group-wrapper">
        <label className="input-group">
          <div className="input-group-header">{translate('SCHEDULE_TIMEBOUNTY')}</div>
          <Input
            className={`input-group-input ${isValid ? '' : 'invalid'}`}
            type="text"
            value={currentTimeBounty.raw}
            placeholder={translateRaw('SCHEDULE_TIMEBOUNTY_PLACEHOLDER')}
            readOnly={!!(isReadOnly || readOnly)}
            spellCheck={false}
            onChange={onChange}
          />
        </label>
      </div>
    )}
  />
);