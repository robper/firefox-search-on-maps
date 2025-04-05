#!/bin/bash

# Create a temporary directory
mkdir -p temp_extension

# Copy all necessary files
cp manifest.json temp_extension/
cp background.js temp_extension/
cp -r icons temp_extension/

# Create the ZIP file
cd temp_extension
zip -r ../search-on-maps.xpi *

# Clean up
cd ..
rm -rf temp_extension

echo "Extension packaged successfully as search-on-maps.xpi" 