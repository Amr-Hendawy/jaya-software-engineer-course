package main

import "fmt"

func circleArea(r float64) float64 {
	const PI = 3.14
	area := PI * r * r
	return area
}

func main() {
	fmt.Println(circleArea(5))
	fmt.Println(circleArea(10))
	fmt.Println(circleArea(15))
}