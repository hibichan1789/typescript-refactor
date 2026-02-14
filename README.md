# typescriptのリファクタリング練習

## 環境構築のためのローカルでのライブラリインストール
npm init -y  
npm install -D typescript vite vitest  tsx
npx tsc --init  

## コンテナ起動方法と実行方法
docker compose build --no-cache  クリーンにインストールして不具合なくbuildできる  
docker compose up -d　裏でコンテナを起動する  
docker compose exec サービス名 sh   コンテナの中に入ってコマンドを打てるようになる   
npx tsx src/(typescriptのファイル名)   プログラムの実行  