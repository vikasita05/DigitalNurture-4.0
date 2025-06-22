package Factory;

public class Main {
	public static void main(String args[]) {
        DocumentFactory wordFactory = new wordDocxFactory();//word doc creation
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();

        DocumentFactory pdfFactory = new pdfDocFactory();//pdf 
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();

        DocumentFactory excelFactory = new excelDocFactory();//excel
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
	}
}
