# CMED App

Medical Management Application (Clinical Medical Management).

## 📚 Documentation

- [API Reference](cmed-app/api.md): Documentation for REST endpoints, DTOs, and validations.
- [File System](cmed-app/FILES.md): Documentation on attachment management, storage, and architecture.

## 🚀 Version
1.0.0

## 📦 Portable Version (All-in-One)

This version allows running the application (Backend + Frontend + Database) in a single JAR file, without needing to install Docker or PostgreSQL.

### Prerequisites
- **Java 21** (JDK) installed.
- **Node.js** and **NPM** installed.
- **Angular CLI** (`npm install -g @angular/cli`).

### Build Instructions

To generate the portable file `cmed-app-portable.jar`:

**On Windows:**
```powershell
.\build_portable.ps1
```

**On Linux / macOS:**
```bash
chmod +x build_portable.sh
./build_portable.sh
```

The script will handle:
1. Compiling the Angular frontend in production mode.
2. Copying static files to the Spring Boot backend.
3. Compiling the backend packaging everything together.
4. Generating the `cmed-app-portable.jar` file in the project root.

### How to Run

Once the JAR is generated, you can run it easily:

**On Windows:**
Double click on `run_portable.bat` or run:
```cmd
run_portable.bat
```

**On Linux / macOS:**
```bash
chmod +x run_portable.sh
./run_portable.sh
```

The application will be available at: [http://localhost:8080](http://localhost:8080)

### Data and Storage
In this portable version, data is saved in the user's folder:
- **Windows**: `C:\Users\<User>\cmed-files`
- **Linux/Mac**: `/home/<user>/cmed-files`

- **Database**: Embedded H2 is used (local file in `cmed-files/cmed_db`).
- **Files**: Attachments are saved in `cmed-files`.

To reset the application, simply delete the `cmed-files` folder from your user directory.
