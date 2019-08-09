# jszhuyinServer

注音轉文字

利用 jszhuyin 套件所寫的 api server

# Usage
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"text":"ㄨㄛˇㄏㄠˇㄜˋ"}' \
  http://localhost:8666
```

response
```
{"text":"我好餓"}
```