#!/bin/bash
# Script pour lancer le frontend en HTTPS via ngrok

FRONTEND_PORT=8081
NGROK_BIN=$(command -v ngrok)

if [ -z "$NGROK_BIN" ]; then
  echo "ngrok n'est pas installé. Téléchargez-le sur https://ngrok.com/download"
  exit 1
fi

# Démarre le frontend (via Docker Compose)
echo "Démarrage du frontend sur le port $FRONTEND_PORT..."
docker compose up -d frontend

# Lance le tunnel ngrok
echo "Ouverture du tunnel HTTPS via ngrok..."
$NGROK_BIN http $FRONTEND_PORT