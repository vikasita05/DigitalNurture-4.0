package Factory;

public class pdfDocFactory extends DocumentFactory{
	public Document createDocument() {
		return new pdfDoc();
	}
}
