package app

import (
	"backend/model"
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"log"
	"os"
)

var DB *gorm.DB

func ConnectToDB() {
	// Loading environment variables
	dialect := os.Getenv("DIALECT")
	host := os.Getenv("HOST")
	dbPort := os.Getenv("DBPORT")
	user := os.Getenv("USER")
	dbName := os.Getenv("NAME")
	//password := os.Getenv("PASSWORD")

	dbURI := fmt.Sprintf("host=%s user=%s sslmode=disable dbname=%s port=%s", host, user, dbName, dbPort)

	// Opening connection to database
	db, err := gorm.Open(dialect, dbURI)

	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Successfully connected to database")
	}

	// SetMaxOpenConns sets the maximum number of open connections to the database.
	db.DB().SetMaxOpenConns(100)
	DB = db
	//defer db.Close()

	// Make migrations to the database if not already created
	db.AutoMigrate(&model.Pen{})
}
