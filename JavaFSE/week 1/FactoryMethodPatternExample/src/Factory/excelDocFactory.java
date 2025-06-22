package Factory;

public class excelDocFactory extends DocumentFactory{
	public Document createDocument() {
		return new excelDoc();
	} 
}
