#!/bin/bash

echo "gitautopush start..."
git add .
git commit -m 'test'
git push origin master
echo "gitautopush end..."

