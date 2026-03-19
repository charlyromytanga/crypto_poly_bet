#!/bin/bash
# Script de démarrage rapide

echo "Démarrage du projet crypto-voting..."
docker rm -f crypto-api crypto-oracle crypto-smart-contracts crypto-frontend 2>/dev/null
docker compose up -d --build
