import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Home from './Home';

const server = setupServer(
  rest.get('https://randomfox.ca/floof/', (req, res, ctx) => {
    return res(
      ctx.json({
        image: 'https://randomfox.ca/images/71.jpg',
        link: 'https://randomfox.ca/?i=71',
      })
    );
  }),
  rest.get('https://random.dog/woof.json', (req, res, ctx) => {
    return res(
      ctx.json({
        fileSizeBytes: 68111,
        url: 'https://random.dog/0f3c6ec3-1e6e-4b06-9a23-ed4292dca5eb.jpg',
      })
    );
  }),
  rest.get('https://aws.random.cat/meow', (req, res, ctx) => {
    return res(
      ctx.json({
        file: 'https://purr.objects-us-east-1.dream.io/i/h5d7a.jpg',
      })
    );
  }),
  rest.get('https://x-math.herokuapp.com/api/random', (req, res, ctx) => {
    return res(
      ctx.json({
        first: 90,
        second: 18,
        operation: '/',
        expression: '90 / 18',
        answer: 5,
      })
    );
  }),
  rest.get('https://forza-api.tk/', (req, res, ctx) => {
    return res(
      ctx.json({
        image: 'https://forza-api.tk/img/BMW_M4_COUPE_2.png',
      })
    );
  }),
  rest.get('http://www.boredapi.com/api/activity/', (req, res, ctx) => {
    return res(
      ctx.json({
        activity: 'Prepare a 72-hour kit',
        type: 'busywork',
        participants: 1,
        price: 0.5,
        link: 'https://www.ready.gov/kit',
        key: '4266522',
        accessibility: 0.5,
      })
    );
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test.skip('mock service worker is correctly intercepting API calls', async () => {
  render(<Home />);
  waitFor(() => {
    expect(screen.findByText(/intercepting the API/i)).toBeInTheDocument();
  });
});
