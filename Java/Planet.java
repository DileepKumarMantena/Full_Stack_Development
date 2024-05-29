public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6),
    EARTH(5.972e+24, 6.371e6),
    MARS(6.419e+23, 3.3895e6),
    JUPITER(1.899e+27, 6.9911e7),
    SATURN(5.685e+26, 5.8232e7),
    URANUS(8.683e+25, 2.5362e7),
    NEPTUNE(1.024e+26, 2.4622e7);
    private final double mass; // in kilograms
    private final double radius; // in meters
    Planet(double mass, double radius) {
    this.mass = mass;
    this.radius = radius;
    }
    public double getMass() {
    return mass;
    }
    public double getRadius() {
    return radius;
    }
    
    public class EnumWithPropertiesExample {
        public static void main(String[] args) {
        Planet earth = Planet.EARTH;
        System.out.println("Earts mass:"  + earth.getMass() + "kg");
        System.out.println("Earths radius" + earth.getRadius() +" meters");
    }
    }
        }