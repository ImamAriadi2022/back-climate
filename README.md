# back-climate

Backend Express untuk endpoint climate sesuai kontrak OpenAPI.

## Menjalankan Project

1. Install dependency

```bash
npm install
```

2. Buat file `.env` dari `.env.example`

3. Jalankan server

```bash
npm run dev
```

## Endpoint

- `GET /petengoran/topic4`
- `GET /kalimantan/topic4`
- `GET /dashboard/topic4`
- `GET /health`
- `GET /docs` (Swagger UI)
- `GET /docs.json` (OpenAPI JSON)

Semua endpoint topic4 mendukung query:

- `limit` (default `100`, max `500`)
- `offset` (default `0`)

Format response endpoint topic4:

```json
{
	"result": []
}
```

Format error:

```json
{
	"message": "Internal Server Error"
}
```