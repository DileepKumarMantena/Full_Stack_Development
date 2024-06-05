import java.util.ArrayList;
import java.util.List;
public class Lambda {
public static void main(String[] args) {
List<String>languages = new ArrayList<>();
languages.add("Java");
languages.add("Python");
languages.add("C++");
// Lambda expression to print each element of the list
languages.forEach(language -> System.out.println(language));
}
}