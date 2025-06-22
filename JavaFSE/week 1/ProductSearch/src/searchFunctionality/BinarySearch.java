package searchFunctionality;
import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {
	//sorting
	public static void sortByName(Product[] products) {
		Arrays.sort(products,Comparator.comparing(p->p.productName.toLowerCase()));
	}
	
	//binary search
	public static Product search(Product[] products, String target) {
		int left=0;
		int right=products.length-1;
		while(left<=right) {
			int mid=(left+right)/2;
			int cmp=products[mid].productName.compareToIgnoreCase(target);
			if(cmp==0)
				return products[mid];
			else if (cmp<0)
				left=mid+1;
			else
				right=mid-1;
		}
		return null;
	}
}
