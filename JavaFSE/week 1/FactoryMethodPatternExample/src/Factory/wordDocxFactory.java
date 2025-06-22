package Factory;

public class wordDocxFactory extends DocumentFactory{
	public Document createDocument() {
		return new wordDocx();
	}
}
