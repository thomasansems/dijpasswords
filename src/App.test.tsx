import { render, fireEvent, screen } from '@testing-library/react';
import Add from './routes/Add';

/**
 * Basic test to check if the form is rendered
 * NOTE: This is not a complete test, it's just a starting point
 */

describe('Add', () => {
  it('should add a new password item when form is submitted', async () => {

    render(<Add />);

    // Fill out the form
    const titleInput = screen.getByPlaceholderText('Title');
    fireEvent.change(titleInput, { target: { value: 'Test title' } });

    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(passwordInput, { target: { value: 'Test password' } });

    const clientSelect = screen.getByLabelText('Client');
    fireEvent.change(clientSelect, { target: { value: 'Client 1' } });

    // Submit the form
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);

  });
});