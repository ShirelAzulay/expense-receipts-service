# Receipts Validation API

Backend service for uploading receipts, storing basic metadata, and preparing the foundation for OCR and rule-based validation in upcoming milestones.

This version (Milestone 1) includes a complete NestJS project structure with mock endpoints, full Swagger (OpenAPI 3) documentation, and a clean modular architecture following NestJS best practices.

---

## Features (Milestone 1)

- Upload receipts using multipart/form-data
- Store metadata in memory (no database yet)
- Retrieve list of uploaded receipts
- Retrieve a specific receipt by ID
- Mock validation endpoints (status: "not_implemented")
- Auto-generated Swagger from code decorators
- Modular project structure:
    - Controllers
    - Services
    - DTOs
    - Feature module (receipts)
- Ready for extension with OCR and a Rule Engine in Milestones 2–3

---

## Project Structure

```
src/
  app.controller.ts
  app.module.ts
  app.service.ts
  main.ts

  receipts/
    controllers/
      receipts.controller.ts
      receipts.controller.spec.ts

    services/
      receipts.service.ts
      receipts.service.spec.ts

    dto/
      create-receipt.dto.ts
      receipt-details.dto.ts
      receipt-summary.dto.ts
      validation-result.dto.ts

    receipts.module.ts

swagger/
  receipts-api.json
  receipts-api.html
```

---

## Getting Started

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run start:dev
```

Default URL:
```
http://localhost:3000
```

### Swagger UI
```
http://localhost:3000/api
```

### Raw OpenAPI JSON
```
http://localhost:3000/api-json
```

---

## Generating Swagger Files

Swagger is generated from the code using NestJS decorators.

### Generate Swagger JSON
```bash
curl http://localhost:3000/api-json > swagger/receipts-api.json
```

### Generate Swagger HTML (Redoc)
Install Redoc CLI:
```bash
npm install -g redoc-cli
```

Generate:
```bash
redoc-cli bundle swagger/receipts-api.json -o swagger/receipts-api.html
```

---

## Docker (Optional)

### Build image
```bash
docker build -t receipts-api .
```

### Run container
```bash
docker run -p 3000:3000 receipts-api
```

---

## Environment Variables (Milestone 1)

No environment variables are required for Milestone 1.

Future milestones will introduce configuration for OCR, rule engine, storage, and integrations.

---

## Technology Stack

- NestJS (TypeScript)
- Express (Nest Platform)
- Multer (file uploads)
- Swagger (OpenAPI 3)
- Redoc
- Jest (unit tests)

---

## Running Tests

```bash
npm run test
```

Tests included:
- AppController
- ReceiptsController
- ReceiptsService

---

## Milestone Progress

| Milestone | Description | Status |
|----------|-------------|--------|
| 1 | API skeleton, mock logic, Swagger | Completed |
| 2 | OCR integration | Pending |
| 3 | Rule Engine + validations | Pending |
| 4 | TIKTAK integration | Pending |

---

## Notes

- Receipt files are not persisted in this milestone.
- All data is in-memory and resets on restart.
- Validation endpoints return:
```json
{ "status": "not_implemented" }
```
- This milestone is intended for architecture validation, integration, and demonstration purposes.
