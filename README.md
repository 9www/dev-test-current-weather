# dev-test-current-weather

A simple full-stack weather web project built with React and ExpressJS.

The backend integrates with the Hong Kong Observatory Open Data API, and the frontend displays the current weather, weather icon, and current temperature.

## Tech Stack

**Frontend**
- React
- Vite
- Axios
- Sass
- i18next

**Backend**
- Node.js
- ExpressJS
- Axios
- dotenv
- CORS

## Features

- Display current weather and temperature
- Display weather icon from HKO
- English / Traditional Chinese language switch
- Skeleton loading state
- Frontend calls one backend API only

## API Used

Hong Kong Observatory Open Data API:

```txt
https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en
https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc
```

## How to Run

### Backend

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

Backend runs on:

```txt
http://localhost:5001
```

API endpoint:

```txt
http://localhost:5001/api/weather
```

### Frontend

Open another terminal:

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

## Environment Variables

### Backend

```env
PORT=5001
HKO_API_BASE_URL=https://data.weather.gov.hk/weatherAPI/opendata
```

### Frontend

```env
VITE_API_BASE_URL=http://localhost:5001
```

## Notes

The backend calls the HKO API in both English and Traditional Chinese, then returns a simplified response to the frontend.

The frontend only calls the backend once. When switching language, it uses i18next for UI text and selects either `data.en` or `data.tc` from the existing response.

## What I Like About the Code

- Frontend and backend are clearly separated.
- The backend handles the external government API integration.
- The frontend only needs to call one API.
- The folder structure is clear, which makes the code easier to maintain and extend.
- The code is split into routes, controllers, services, components, pages, and utilities.
- The UI has a skeleton loading state.

## What I Would Improve

- Currently, it only displays one location: Hong Kong Observatory.
- Error handling is still simple.
- There is no CI/CD setup yet.
- If the project grows, I would add location selection, tests, and possibly TypeScript.