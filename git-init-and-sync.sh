#!/bin/bash
# Script to initialize git and connect to GitHub repository

# Initialize git
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Chrome extension folder structure"

# Add GitHub remote
git remote add origin https://github.com/kquevillon/allergy-sherpa.git

# Push to GitHub
git push -u origin main

echo "Repository has been initialized and connected to GitHub!"
echo "You may need to authenticate with GitHub credentials during the push."
