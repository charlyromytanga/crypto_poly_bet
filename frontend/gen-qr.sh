#!/bin/bash
# Génère un QR code pour l'URL HTTPS ngrok

URL="$1"
if [ -z "$URL" ]; then
  echo "Usage: $0 <URL_ngrok>"
  exit 1
fi

QR_BIN=$(command -v qrencode)
if [ -z "$QR_BIN" ]; then
  echo "qrencode n'est pas installé. Installez-le avec 'sudo apt install qrencode'"
  exit 1
fi

$QR_BIN -o qr-ngrok.png "$URL"
echo "QR code généré : qr-ngrok.png"