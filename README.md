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

- `GET /petengoran/topic4/latest`
- `GET /petengoran/topic4/history`
- `GET /kalimantan/topic4/latest`
- `GET /kalimantan/topic4/history`
- `GET /dashboard/topic4/latest`
- `GET /dashboard/topic4/history`
- `GET /health`
- `GET /docs` (Swagger UI)
- `GET /docs.json` (OpenAPI JSON)

Catatan kompatibilitas:
- Endpoint lama `GET /petengoran/topic4`, `GET /kalimantan/topic4`, `GET /dashboard/topic4` tetap tersedia sebagai alias ke mode `history`.

Perilaku endpoint topic4:
- `latest`: ambil 1 data terbaru.
- `history`: ambil seluruh history data, urut terbaru ke terlama.

Troubleshooting jika muncul `relation does not exist`:
- Set nama tabel per sumber data di `.env`:
	- `TOPIC4_TABLE_PETENGORAN`
	- `TOPIC4_TABLE_KALIMANTAN`
	- `TOPIC4_TABLE_DASHBOARD`
- Jika tidak diisi, API akan fallback ke `TOPIC4_TABLE`.

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