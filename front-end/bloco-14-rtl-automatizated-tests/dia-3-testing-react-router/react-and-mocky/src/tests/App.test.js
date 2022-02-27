import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import responseAPI from './mocks';
import App from '../App';

describe('Test Rick & Morty API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    global.fetch = jest.fn(async () => ({
      json: async () => responseAPI,
    }));

    render(<App />);
  });

  test('Verifica se aparece o card com titulo de "Rick Sanchez"', async () => {
    const headingRickSanchez = await screen.findByRole('heading', {
      name: /Rick Sanchez/,
    });

    expect(headingRickSanchez).toBeInTheDocument();
  });

  test('Verifica se existem o input de texto e o botão "Buscar"', async () => {
    const input = await screen.findByRole('textbox');
    const button = await screen.findByRole('button', {
      name: /Buscar/,
    });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('Verifica se ao buscar por "Smith" aparecem 4 cards', async () => {
    const input = await screen.findByRole('textbox');
    const button = await screen.findByRole('button', {
      name: /Buscar/,
    });

    userEvent.type(input, 'Smith');
    userEvent.click(button);

    const cards = await screen.findAllByRole('heading', { name: /smith/i });
    const FOUR = 4;

    expect(cards).toHaveLength(FOUR);
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
