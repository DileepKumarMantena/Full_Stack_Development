public class Generics<T> {
    private T value;
    public Generics(T value) {
    this.value = value;
    }
    public T getValue() {
    return value;
    }
    public void setValue(T value) {
    this.value = value;
    }
    public static void main(String[] args) {
    Generics<Integer> integerBox = new Generics<>(10);
    Generics<String> stringBox = new Generics<>("Hello, Generics");
    System.out.println("Integer Value: " + integerBox.getValue());
    System.out.println("String Value: " + stringBox.getValue());
    }
    }