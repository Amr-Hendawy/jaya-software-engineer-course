
public class CircleArea {

    public static double circleArea(double r) {
        final double PI = Math.PI;
        double area = PI * r * r;
        return area;
    }

    public static void main(String[] args) {
        System.out.println(circleArea(5));
        System.out.println(circleArea(10));
        System.out.print(circleArea(15));
    }
}
