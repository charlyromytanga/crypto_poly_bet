#!/bin/bash
# Script d'installation

echo "Installation des dépendances..."
# Suppression des containers existants pour éviter les conflits
docker rm -f crypto-api crypto-oracle crypto-smart-contracts crypto-frontend 2>/dev/null

# À compléter pour chaque dossier