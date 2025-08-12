#!/bin/bash

set -e

REQ_FILE="requirements.txt"
VENV_DIR="venv"
PYPI_URL="https://pypi.org/simple"
FALLBACK_URL="https://pypi.tuna.tsinghua.edu.cn/simple"  # Mirror USTC/清华大学

echo "🔍 Verificando conexión a PyPI..."
if curl -s --head "$PYPI_URL" | grep "200 OK" > /dev/null; then
    echo "✅ Acceso a PyPI OK"
    USE_MIRROR=0
else
    echo "⚠️  No se pudo acceder a PyPI. Usaremos un mirror alternativo."
    USE_MIRROR=1
fi

echo "🐍 Creando entorno virtual: $VENV_DIR"
python3 -m venv "$VENV_DIR"
source "$VENV_DIR/bin/activate"

echo "⬆️  Actualizando pip, setuptools y wheel..."
pip install --upgrade pip setuptools wheel

echo "📦 Instalando dependencias desde $REQ_FILE..."

if [ "$USE_MIRROR" -eq 0 ]; then
    pip install -r "$REQ_FILE"
else
    pip install -r "$REQ_FILE" -i "$FALLBACK_URL"
fi

echo "✅ Entorno configurado correctamente."

