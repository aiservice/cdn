#!/bin/bash

echo "====git auto push start..."
git add .
git commit -m 'test'
git push origin master
echo "====git auto push end..."

