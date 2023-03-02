import { render, screen } from '@testing-library/react';
import App from '../App';


describe("TV Shows", () => {
  test("displays tv shows", async () => {
    jest.spyOn(global, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              name:
                "Show 1",
              image: {
                medium: "image_url"
              }
            },
            {
              id: 2,
              name:
                "Show 2",
              image: {
                medium: "image_url"
              }
            },
          ]),
      });
    });

    render(<App />);
    const firstPost = await screen.findByText(
      /Show 1/i
    );
    expect(firstPost).toBeDefined();
  })
})
