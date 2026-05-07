# Build Portable Application (Windows)
$OriginalLocation = Get-Location

try {
    # 1. Build Angular Frontend
    Write-Host "Building Angular Frontend..."
    Set-Location "web"
    # Use npm to run the build script defined in package.json (handles ng and node options)
    npm install
    npm run build -- --configuration=production

    # 2. Copy Angular Build to Spring Boot Static Folder (Backend)
    Write-Host "Copying Frontend to Backend..."
    $SourcePath = "dist/medcenter-manager"
    $DestPath = "../app/src/main/resources/static"

    if (-not (Test-Path $SourcePath)) {
        Write-Error "Angular build output not found at $SourcePath. Did 'npm run build' succeed?"
        exit 1
    }

    if (Test-Path $DestPath) {
        Remove-Item $DestPath -Recurse -Force
    }
    New-Item -ItemType Directory -Force -Path $DestPath | Out-Null
    Copy-Item "$SourcePath\*" $DestPath -Recurse -Force

    # 3. Build Spring Boot JAR
    Set-Location "../app"

    # Run Tests
    Write-Host "Running Backend Tests..."
    ./gradlew.bat test
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Tests failed! Aborting build."
        exit 1
    }

    Write-Host "Building Spring Boot JAR..."
    # Use cmd /c to ensure gradlew runs correctly in PowerShell context if needed, or just ./gradlew
    ./gradlew.bat bootJar

    # 4. Move JAR to Root
    $JarSource = "build/libs/medcenter-manager-app-1.4.0.jar"
    $JarDest = "../medcenter-manager.jar"

    if (Test-Path $JarSource) {
        Copy-Item $JarSource $JarDest -Force
        Write-Host "Success! Portable JAR created at: $JarDest"
        Write-Host "Run with: java -jar medcenter-manager.jar"
    } else {
        Write-Error "JAR not found at $JarSource"
    }
} finally {
    Set-Location $OriginalLocation
}
