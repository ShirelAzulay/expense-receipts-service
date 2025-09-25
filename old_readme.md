# Receipts Validation API

A system for managing employee receipts, including file upload, metadata storage, and both validation and business logic checks.

---

## 🎯 Project Purpose
The system allows employees to upload receipts (PDF or images) along with metadata (amount, date, expense type).  
The backend will:
1. Extract data from the uploaded receipt.
2. Compare the extracted data against the provided metadata.
3. Perform business plausibility checks (e.g., reject a receipt marked as “refreshments” if the document actually contains an “iPhone” purchase).
4. Return a detailed validation result.

---

## 🛠 Project Structure

- **`receipts-api.yaml`**  
  The API definition in OpenAPI 3.0 format.

- **`receipts-api.html`**  
  Interactive API documentation (Redoc) automatically generated from the YAML.  
  This file can be shared with clients or teammates and opened directly in any browser.

- **README.md**  
  This document, describing the project, its structure, and how to work with it.

---

## 📄 Specification
The API is defined using **OpenAPI 3.0**.

- Source: `receipts-api.yaml`
- Documentation: `receipts-api.html`

### Main Endpoints
- `POST /receipts` – Upload a receipt with metadata.
- `POST /receipts/{receipt_id}/validate` – Validate consistency between metadata and extracted data.
- `GET /receipts/{receipt_id}` – Retrieve detailed receipt information.
- `GET /receipts?user_id=xxx` – List all receipts uploaded by a specific user.

---

## ⚙️ Generating Documentation

Run the following commands **from the same directory where `receipts-api.yaml` is located**.

### Option 1 – Redoc CLI
```bash
# One-time installation
npm install -g redoc-cli

# Generate the HTML
redoc-cli bundle receipts-api.yaml -o receipts-api.html
