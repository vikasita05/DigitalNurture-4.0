package searchFunctionality;

public class LinearSearch {
	public static Product search(Product[] products,String target) {
		for(int i=0;i<products.length;i++) {
			if(products[i].productName.equalsIgnoreCase(target)) {
				return products[i];
			}
		}
		return null;
	}
}
