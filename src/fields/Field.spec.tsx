/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { Field } from './Field';

jest.mock('../utils/useUniqueId');

describe('Field.Label', () => {
  it('applies unique ID to `htmlFor` attribute', () => {
    render(
      <Field>
        <Field.Label>Label</Field.Label>
      </Field>
    );

    expect(screen.getByText('Label')).toHaveAttribute('for', 'uniqueId');
  });
});

describe('Field.Input', () => {
  it('applies unique ID to `id` attribute', () => {
    render(
      <Field>
        <Field.Label>Input</Field.Label>
        <Field.Input />
      </Field>
    );

    expect(screen.getByLabelText('Input')).toHaveAttribute('id', 'uniqueId');
  });
});

describe('Field.Textarea', () => {
  it('applies unique ID to `id` attribute', () => {
    render(
      <Field>
        <Field.Label>Textarea</Field.Label>
        <Field.Textarea />
      </Field>
    );

    expect(screen.getByLabelText('Textarea')).toHaveAttribute('id', 'uniqueId');
  });
});
