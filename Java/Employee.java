public class Employee {
    // Private variables
    private String employeeId;
    private String name;

    // Constructor
    public Employee(String employeeId, String name) {
        this.employeeId = employeeId;
        this.name = name;
    }

    // Public getter for employeeId (read-only)
    public String getEmployeeId() {
        return employeeId;
    }

    // Public getter and setter for name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

public class encap {
    public static void main(String[] args) {
        Employee emp = new Employee("E123", "Alice");
        System.out.println("Employee ID: " + emp.getEmployeeId());
        System.out.println("Name: " + emp.getName());
        emp.setName("Alicia");
        System.out.println("Updated Name: " + emp.getName());
        Employee emp1 = new Employee("0001", "Deepak");
        System.out.println("Employee ID: " + emp1.getEmployeeId());
        System.out.println("Name: " + emp1.getName());
        emp1.setName("Alicia");
        System.out.println("Updated Name: " + emp1.getName());

    }
}
