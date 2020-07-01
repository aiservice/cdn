#!/bin/bash
# 上面中的 #! 是一种约定标记, 它可以告诉系统这个脚本需要什么样的解释器来执行;

echo "gitautopush start..."
git add .
git commit -m 'test'
git push origin master
echo "gitautopush end..."

