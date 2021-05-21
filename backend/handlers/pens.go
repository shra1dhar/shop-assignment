package handlers

import (
	"backend/app"
	"backend/model"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetAllPens(c *gin.Context) {
	//pens := []model.Pen {
	//	{1, 3, 10},
	//	{2, 3, 2},
	//	{3, 1, 5},
	//}
	//c.JSON(http.StatusOK, gin.H{
	//	"data": pens,
	//})
	var pens []model.Pen
	app.DB.Find(&pens)
	c.JSON(http.StatusOK, gin.H{"data": pens})
}

func AddPen(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"success": true,
	})
}

