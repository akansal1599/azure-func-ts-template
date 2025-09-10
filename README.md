# Azure Functions TypeScript Template

A modern **starter template** for building and deploying [Azure Functions](https://learn.microsoft.com/azure/azure-functions/) with **TypeScript (ESM)**.  
Preconfigured with testing, linting, formatting, and a clean folder structure to help you start quickly and follow best practices.

## ✨ Features

- ⚡ **TypeScript (ESM)** — already set up with `tsconfig.json`
- 🧩 **Handler + Registration pattern** — clean separation for testability and organization
- 🧪 **Jest** — unit testing included
- 📝 **ESLint + Prettier** — consistent code quality and formatting
- 🐶 **Husky + lint-staged** — pre-commit hooks for linting & formatting staged files
- 🔍 **Health endpoint** — simple `/api/Health` function to confirm deployments
- 🚫 **Ignore files configured** (`.funcignore`, `.gitignore`) to avoid deploying dev-only files

## 📂 Folder Structure
```text
<project_root>/
 ├─ src/
 │   ├─ functions/
 │   │   ├─ Health.handler.ts         # Business logic
 │   │   ├─ Health.http.register.ts   # Trigger binding
 │   └─ index.ts                      # Imports all registrations
 ├─ test/                             # Jest unit tests
 ├─ dist/                             # Compiled output (not committed)
 ├─ .funcignore                       # Files excluded from Azure deployment
 ├─ host.json                         # Function host settings
 ├─ package.json
 └─ tsconfig.json
```
## 🚀 Getting Started

### 1. Clone and install
```bash
git clone https://github.com/akansal1599/azure-func-ts-template.git my-func
cd my-func

npm ci
```

### 2. Run locally
```bash
npm run build
func start
```
> Default health endpoint: `http://localhost:7071/api/Health`

### 3. Run tests
```bash
npm test
```

## ➕ Adding a New Function
```bash
func new --template "HTTP trigger" --name MyFunc --language TypeScript --output src/functions
```
Split the generated file into:
- `MyFunc.handler.ts` — core logic
- `MyFunc.http.register.ts` — trigger binding

Then import the registration in `src/index.ts`.

## 🚢 Deployment

Deploy with Azure Functions Core Tools
```bash
npm run build
func azure functionapp publish <APP_NAME>
```
**Notes:** `.funcignore` ensures only compiled code and required dependencies are deployed.

## 🔄 CI/CD (Optional)

A GitHub Actions workflow (`.github/workflows/ci.yml`) can be added to run:
- npm run lint
- npm test
- npm run build

And optionally, deploy to Azure using a publish profile.
