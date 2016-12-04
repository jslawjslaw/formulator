# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Forms

- `GET /api/forms`
  - Forms Index/Search
  - accepts `userId` query param to retrieve user generated forms
- `POST /api/forms`
- `GET /api/forms/:id`
- `PATCH /api/forms/:id`
- `DELETE /api/forms/:id`

#### Fields

- `GET /api/forms/:id/fields`
- `POST /api/forms/:id/fields`
- `GET /api/forms/:id/fields/:fieldId`
- `PATCH /api/forms/:id/fields/:fieldId`
- `DELETE /api/forms/:id/fields/:fieldId`
