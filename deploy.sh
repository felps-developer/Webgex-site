#!/usr/bin/env bash
set -euo pipefail

BUCKET="gs://webgex-site"
PROJECT="webgex"

echo "=== Build estático ==="
npm run build

echo "=== Upload para GCS ==="
gsutil -m rsync -R -d out/ "$BUCKET"

echo "=== Configurar webpage como index.html ==="
gsutil -m web set -m index.html -e 404.html "$BUCKET" 2>/dev/null || true

echo "=== Cache metadata (1h, exceto imagens/fontes) ==="
gsutil -m setmeta -h "Cache-Control:public,max-age=3600" "$BUCKET/**/*.html" "$BUCKET/**/*.css" "$BUCKET/**/*.js" 2>/dev/null || true
gsutil -m setmeta -h "Cache-Control:public,max-age=31536000,immutable" "$BUCKET/**/*.jpg" "$BUCKET/**/*.png" "$BUCKET/**/*.svg" "$BUCKET/**/*.woff2" 2>/dev/null || true

echo "=== Deploy concluído ==="
echo "https://console.cloud.google.com/storage/browser/$BUCKET?project=$PROJECT"
