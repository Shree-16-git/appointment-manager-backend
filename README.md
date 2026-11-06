# Appointment Manager (Backend)

REST API for the Appointment Manager app, built with Node.js, Express and MongoDB.

**Live API:** https://appointment-manager-backend-api.onrender.com/appointments
**Frontend repo:** [appointment-manager-frontend](https://github.com/Shree-16-git/appointment-manager-frontend)
**Live app:** https://appointment-manager-frontend-gamma.vercel.app/

## Tech
Node.js, Express, MongoDB, Mongoose, CORS, dotenv

## Endpoints
| Method | Route | Description |
|---|---|---|
| GET | /appointments | Get all appointments |
| POST | /appointments | Create an appointment (`title`, `date`) |
| DELETE | /appointments/:id | Delete an appointment |

## Run locally
1. `npm install`
2. Create a `.env` file with `MONGODB_URI=your_mongodb_connection_string`
3. `npm start`

> Note: hosted on Render's free tier, so the first request can take 30-60 seconds to wake up.