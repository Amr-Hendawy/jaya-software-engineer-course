#include <iostream>
using namespace std;

double circleArea(double r){
    const double PI = 3.14;
    double area = PI * r * r;
    return area;
}

int main() {
    cout << circleArea(5) << endl;
    cout << circleArea(10) << endl;
    cout << circleArea(20) << endl;
    return 0;
}