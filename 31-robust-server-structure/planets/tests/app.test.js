const request = require('supertest');
const app = require('../src/app');

// get access to the data, so we can manipulate it for our tests
const planets = require('../data');


beforeEach(() => {
  planets.splice(0, planets.length);
});

describe('GET /planets', () => {
  it('sends back an empty array when there are no planets in the data set', async () => {
    // make a fake request
    const response = await request(app).get('/planets');
    // assert that the response was what we expected
    expect(response.body.data).toEqual([]);
    expect(response.statusCode).toEqual(200);
  })
  it('sends back planet data', async () => {
    // set up the planets array to contain only the data we want
    let fakePlanetsData = [
      {
        name: 'Krypton',
        distance: 56,
        velocity: 87,
        description: 'it is from Superman I think??',
        id: '48'
      }
    ];
    planets.push(...fakePlanetsData);
    // make a request and assert things about the response
    const response = await request(app).get('/planets');
    expect(response.body.data).toEqual(fakePlanetsData);
    expect(response.statusCode).toEqual(200);
    // expect(2 + 2).toEqual(4);
  })
})

describe('GET /planets/:id', () => {
  it('sends back a 404 when the requested planet is not in the data set', async () => {
    const response = await request(app).get('/planets/48');
    expect(response.statusCode).toEqual(404);
  });
  it('sends back planet data when the requested planet is in the data set', async () => {
    let fakePlanetsData = [
      {
        name: 'Krypton II',
        distance: 56,
        velocity: 87,
        description: 'it is from Superman I think??',
        id: '55'
      }
    ];
    planets.push(...fakePlanetsData);
    const response = await request(app).get('/planets/55');
    expect(response.statusCode).toEqual(200);
    expect(response.body.data).toEqual(fakePlanetsData[0]);
  })
});


