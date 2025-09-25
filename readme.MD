# Receipts Validation API

A backend service for managing employee receipts.  
Employees can upload receipts (PDF or image) along with metadata (amount, date, event).  
The system validates that the metadata matches the actual content of the receipt and applies business plausibility checks.

---

## 🎯 Project Purpose

The service provides:
1. **File Upload** – Employees upload receipts (PDF or image).
2. **Metadata Storage** – Amount, date, event type provided by the user.
3. **Validation** – Compare provided metadata with extracted data from the receipt.
4. **Business Rules** – Reject suspicious cases (e.g., “refreshments” but receipt contains “iPhone”).
5. **API Responses** – Return clear validation results.

---

## 🛠 Project Structure

```
expense-receipts-service/
 ├── src/                   # NestJS source code
 │    ├── receipts/         # Receipts module (controller, service, DTOs)
 │    ├── app.module.ts     # Root module
 │    └── main.ts           # Application entry point
 ├── swagger/               # Legacy OpenAPI + HTML docs
 │    ├── receipts-api.yaml
 │    └── receipts-api.html
 ├── package.json           # Dependencies and scripts
 ├── tsconfig.json          # TypeScript config
 └── README.md              # This file
```

---

## ⚙️ Setup and Run

### Install dependencies
```bash
npm install
```

### Run the server
```bash
# Development
npm run start:dev

# Production
npm run start:prod
```

The server will be available at:  
👉 http://localhost:3000

---

## 📄 API Documentation

### Swagger (recommended)
After starting the server, open:

http://localhost:3000/api

### Legacy Redoc (optional)
```bash
npm install -g redoc-cli
redoc-cli bundle swagger/receipts-api.yaml -o swagger/receipts-api.html
```

---

## 🚏 Main Endpoints

- `POST /receipts` – Upload a receipt with metadata.
- `POST /receipts/{id}/validate` – Validate consistency between metadata and extracted data.
- `GET /receipts/{id}` – Retrieve a specific receipt.
- `GET /receipts` – List all receipts.

---

## 🧾 Example Metadata

```json
{
  "amount": 100,
  "date": "2025-09-25",
  "event": "Team lunch"
}
```

---

## 📌 Usage Examples

### Upload a receipt (curl)
```bash
curl -X POST http://localhost:3000/receipts   -F "file=@/path/to/receipt.pdf"   -F 'metadata={"amount":100,"date":"2025-09-25","event":"Team lunch"}'
```

### Validate a receipt
```bash
curl -X POST http://localhost:3000/receipts/1/validate   -H "Content-Type: application/json"   -d '{"amount":100,"date":"2025-09-25","event":"Team lunch"}'
```

### Get all receipts
```bash
curl http://localhost:3000/receipts
```

---

## 🧪 Testing

```bash
# Unit tests
npm run test

# End-to-end tests
npm run test:e2e

# Coverage
npm run test:cov
```

---

## 🚀 Deployment

For production it is recommended to use **pm2**:

```bash
npm install -g pm2
pm2 start dist/main.js --name receipts-api
pm2 save
pm2 startup
```

To check logs:
```bash
pm2 logs receipts-api
```

---

## 👩‍💻 Development Workflow

### Generate a new module
```bash
nest generate module <name>
nest generate controller <name>
nest generate service <name>
```

### Update code after pulling from GitHub
```bash
git pull origin main
npm install
npm run build
pm2 restart receipts-api
```

---

## 📜 License

This project is MIT licensed.
