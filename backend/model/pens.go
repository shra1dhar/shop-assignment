package model

type Pen struct {
	ID uint `json:"id" gorm:"primaryKey;autoIncrement"`
	Count int `json:"count"`
	Cost float64 `json:"cost"`
}

