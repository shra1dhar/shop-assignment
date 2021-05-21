package handlers

import (
	"backend/app"
	"backend/model"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"strconv"
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


func PurchasePens(c *gin.Context) {
	var pens []model.Pen
	amount, err := strconv.ParseFloat(c.Params.ByName("amount"), 64)

	if err != nil {
		c.JSON(http.StatusOK, gin.H{ "error": err })
		log.Fatal(err)
	}

	app.DB.Order("cost").Find(&pens)
	penList, cartList, changeLeft, _ := model.CalculateOrder(pens, amount)
	for _, pen := range penList {
		app.DB.Model(&pen).Select("count", "cost").Updates(model.Pen{Count: pen.Count, Cost: pen.Cost})
	}

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"amount": amount,
		"penList": cartList,
		"changeLeft": changeLeft,
	})
}

