package main

import (
    "database/sql"
    "fmt"
    "log"
    "net/http"
    _ "github.com/go-sql-driver/mysql"
)

func main() {
    db, err := sql.Open("mysql", "user:password@tcp(localhost:3306)/finance_db")
    if err != nil {
        log.Fatal(err)
    }
    defer db.Close()

    http.HandleFunc("/transactions", func(w http.ResponseWriter, r *http.Request) {
        rows, err := db.Query("SELECT * FROM transactions")
        if err != nil {
            http.Error(w, "Database error", http.StatusInternalServerError)
            return
        }
        defer rows.Close()

        for rows.Next() {
            var id int
            var amount float64
            var category string
            rows.Scan(&id, &amount, &category)
            fmt.Fprintf(w, "Transaction: %d, Amount: %f, Category: %s\n", id, amount, category)
        }
    })

    log.Println("Server running on port 8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
