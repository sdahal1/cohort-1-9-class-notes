import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "../App";

const shows = [
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
];

const akas = [
  {
    "name": "Ржавые копы",
    "country": {
      "name": "Russian Federation",
      "code": "RU",
      "timezone": "Asia/Kamchatka"
    }
  }
];

describe("AKAs", () => {
  afterEach(() => jest.resetAllMocks());

  test("displays akas for a show after that show's title has been clicked", async () => {
    const mockFetch = jest
      .spyOn(global, "fetch")
      .mockImplementation((url) => {
        return Promise.resolve({
          json: () => {
            if (url.endsWith("?page=1")) {
              return Promise.resolve(shows);
            }

            if (url.endsWith("akas")) {
              return Promise.resolve(akas);
            }

            return Promise.resolve([]);
          },
        });
      });

    render(<App />);
    const firstShow = await screen.findByText(
      /Show 1/i
    );


    firstShow.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    const firstShowAkas = await screen.findByText(
      /Ржавые копы/i
    );
    expect(firstShowAkas).toBeDefined();
    expect(mockFetch).toHaveBeenNthCalledWith(
      2,
      "https://api.tvmaze.com/shows/1/akas"
    );
  });
});
