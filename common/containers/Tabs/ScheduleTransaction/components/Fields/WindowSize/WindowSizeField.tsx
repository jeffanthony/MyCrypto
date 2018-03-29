import React from 'react';
import translate, { translateRaw } from 'translations';
import { Input } from 'components/ui';
import { WindowSizeFieldFactory } from './WindowSizeFieldFactory';

interface Props {
  isReadOnly?: boolean;
}

export const WindowSizeField: React.SFC<Props> = ({ isReadOnly }) => (
  <WindowSizeFieldFactory
    withProps={({ currentWindowSize, isValid, onChange, readOnly }) => (
      <div className="input-group-wrapper">
        <label className="input-group">
          <div className="input-group-header">{translate('SCHEDULE_WINDOW_SIZE_BLOCKS')}</div>
          <Input
            className={`input-group-input ${isValid ? '' : 'invalid'}`}
            type="text"
            value={currentWindowSize.raw}
            placeholder={translateRaw('SCHEDULE_WINDOW_SIZE_BLOCKS_PLACEHOLDER')}
            readOnly={!!(isReadOnly || readOnly)}
            spellCheck={false}
            onChange={onChange}
          />
        </label>
      </div>
    )}
  />
);