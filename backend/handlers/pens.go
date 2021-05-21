package handlers

import (
	"backend/app"
	"backend/model"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func GetAllPens(c *gin.Context) {
	var pens []model.Pen
	app.DB.Find(&pens)
	c.JSON(http.StatusOK, gin.H{"data": pens})
}

func CreatePen(c *gin.Context) {
	var pen model.Pen
	err := c.BindJSON(&pen)
	if err != nil {
		log.Fatal(err)
	}
	newPen := model.Pen{Cost: pen.Cost, Count: pen.Count}
	app.DB.Create(&newPen)
	c.JSON(http.StatusOK, gin.H{ "success": true })
}

