package Singleton;

public class Logger {
	private static Logger instance;
	private Logger() {};
	public static Logger getInstance() {
		if(instance==null) {
			instance =new Logger();
		}
		return instance;
	}
	public static void log(String msg) {
		System.out.println("Message: "+msg);
	}
}
