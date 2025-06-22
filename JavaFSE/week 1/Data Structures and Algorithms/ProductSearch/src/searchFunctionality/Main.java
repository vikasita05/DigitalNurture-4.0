package searchFunctionality;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Jeans", "Outfits"),
            new Product(2, "Camera", "Electronics"),
            new Product(3, "Shoes", "Fashion"),
            new Product(4, "Watch", "Accessories"),
            new Product(5, "Sneakers", "Footware")
        };

        //Linear Search
        Product result1 = LinearSearch.search(products, "Camera");
        System.out.println("Linear Search: " + (result1 != null ? result1 : "Not Found"));

        //Binary Search
        BinarySearch.sortByName(products);
        Product result2 = BinarySearch.search(products, "dress");
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}
