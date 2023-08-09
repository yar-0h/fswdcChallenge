#!/bin/sh

echo "installing server dependencies..."
(cd ./cBookServer && npm install)

echo "installing client dependencies..."
(cd ./cBookClient && npm install)
