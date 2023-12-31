public class Main {

    public static void main(String[] args) {
        String[] strings = {"16", "32", "48", "96", "144", "192"};
        for (String string : strings) {
            System.out.println("<link rel=\"icon\" type=\"image/png\" sizes=\"" + string + "x" + string + "\" href=\"icons/favicon-" + string + "x" + string + ".png\">");
        }
    }
}
