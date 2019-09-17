// Test away!
import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Controls from '../Controls/Controls';

test('cannot be closed or opened if it is locked', () => {
    const controls = render(<Controls locked={true} />);
    const toggleClosed = controls.getByTestId(/close-button/i);
    expect(toggleClosed).not.toBeEnabled();
  });
  