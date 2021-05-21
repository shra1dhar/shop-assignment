package model

import (
	"math"
)

type Pen struct {
	ID uint `json:"id" gorm:"primaryKey;autoIncrement"`
	Count int `json:"count"`
	Cost float64 `json:"cost"`
}

func CalculateOrder(arrayPens []Pen, totalCost float64) ([]Pen, []Pen, float64, int) {
	var finalPensPurchased int = 0
	var tempTotalCost float64 = totalCost
	var editedPensArray = make([]Pen, 0)
	var cartList = make([]Pen, 0)
	totalPens := len(arrayPens)

	for i := 0; i < totalPens; i++ {
		var pensBought int
		pensBought = (int)(tempTotalCost / arrayPens[i].Cost)

		if arrayPens[i].Count <= 0 {
			continue
		}

		// break if pens cannot be purchased
		if pensBought == 0 {
			break
		}

		// buy only the available number of pens
		if pensBought > arrayPens[i].Count {
			pensBought = arrayPens[i].Count
		}

		// if pens can be bought, update the array of pens with the outstanding values.
		if pensBought > 0 {
			// deduct the amount spent from the temp total amount
			costPrice := (float64)(pensBought) * (arrayPens[i].Cost)
			tempTotalCost -= costPrice

			finalPensPurchased += pensBought
			arrayPens[i].Count -= pensBought
			editedPensArray = append(editedPensArray, Pen{ID: arrayPens[i].ID, Count: arrayPens[i].Count, Cost: arrayPens[i].Cost})
			cartList = append(cartList, Pen{ID: arrayPens[i].ID, Count: pensBought, Cost: arrayPens[i].Cost})
		}
	}

	// return the edited array of pens, actual edit array of the buyer, change left, total number of pens purchased.
	return editedPensArray, cartList, math.Floor(tempTotalCost*100)/100, finalPensPurchased
}