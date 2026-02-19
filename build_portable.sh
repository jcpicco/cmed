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
cd cmed-web || exit 1
npm install
npm run build -- --configuration=production

# 2. Copy Angular Build to Spring Boot Static Folder (Backend)
echo "Copying Frontend to Backend..."
SOURCE="dist/cmed"
DEST="../cmed-app/app/src/main/resources/static"

if [ ! -d "$SOURCE" ]; then
    echo "Angular build output not found at $SOURCE. Did 'npm run build' succeed?"
    exit 1
fi

rm -rf "$DEST"
mkdir -p "$DEST"
cp -r "$SOURCE"/* "$DEST"

# 3. Build Spring Boot JAR
echo "Running Backend Tests..."
cd ../cmed-app/app || exit 1
./gradlew test || { echo "Tests failed! Aborting build."; exit 1; }

echo "Building Spring Boot JAR..."
./gradlew bootJar

# 4. Move JAR to Root
JAR_SOURCE="build/libs/cmed-app-1.0.0.jar"
JAR_DEST="../../cmed.jar"

if [ -f "$JAR_SOURCE" ]; then
    cp "$JAR_SOURCE" "$JAR_DEST"
    echo "Success! Portable JAR created at: $JAR_DEST"
    echo "Run with: java -jar cmed.jar"
else
    echo "Error: JAR file not found at $JAR_SOURCE"
    exit 1
fi
