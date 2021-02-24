package main

import (
	"log"
	"net/http"
)

func main(){
	//ディレクトリ指定
	fs:=http.FileServer(http.Dir("static"))
	http.Handle("/",fs)
	//ルーティング設定
	//↓上を簡単に書いたもの
	// http.Handle("/", http.FileServer(http.Dir("static")))

	log.Println("Listening...")
	http.ListenAndServe(":3000", nil)

}