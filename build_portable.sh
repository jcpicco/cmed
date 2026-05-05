#!/bin/bash
# Build Portable Application (Linux/macOS)

# Store original location
ORIGINAL_DIR=$(pwd)

# Function to restore original location on exit
cleanup() {
    cd "$ORIGINAL_DIR"
}
trap cleanup EXIT

# 1. Build Angular Frontend
echo "Building Angular Frontend..."
cd medcenter-manager-web || exit 1
npm install
npm run build -- --configuration=production

# 2. Copy Angular Build to Spring Boot Static Folder (Backend)
echo "Copying Frontend to Backend..."
SOURCE="dist/medcenter-manager"
DEST="../medcenter-manager-app/src/main/resources/static"

if [ ! -d "$SOURCE" ]; then
    echo "Angular build output not found at $SOURCE. Did 'npm run build' succeed?"
    exit 1
fi

rm -rf "$DEST"
mkdir -p "$DEST"
cp -r "$SOURCE"/* "$DEST"

# 3. Build Spring Boot JAR
echo "Running Backend Tests..."
cd ../medcenter-manager-app || exit 1
./gradlew test || { echo "Tests failed! Aborting build."; exit 1; }

echo "Building Spring Boot JAR..."
./gradlew bootJar

# 4. Move JAR to Root
JAR_SOURCE="build/libs/medcenter-manager-app-1.4.0.jar"
JAR_DEST="../medcenter-manager.jar"

if [ -f "$JAR_SOURCE" ]; then
    cp "$JAR_SOURCE" "$JAR_DEST"
    echo "Success! Portable JAR created at: $JAR_DEST"
    echo "Run with: java -jar medcenter-manager.jar"
else
    echo "Error: JAR file not found at $JAR_SOURCE"
    exit 1
fi
