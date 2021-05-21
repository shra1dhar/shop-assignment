package main

import (
	"backend/app"
	"backend/handlers"
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
)

func main() {
	fmt.Println("Application Started")

	app.ConnectToDB()

	r := gin.Default()

	r.GET("/pens", handlers.GetAllPens)
	r.POST("pen", handlers.AddPen)

	log.Fatal(r.Run(":8090"))
}