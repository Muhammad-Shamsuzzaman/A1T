package HomeWorkMar1;

public class HomeWorkC {

	public static void main(String[] args) throws InterruptedException {
		
	for(int x =10; x<=19; x++) {
			
			Thread.sleep(200);
			
			System.out.println(x);
		}
		
		for (int x =100; x>=10; x-=2) {
			
			Thread.sleep(300);
			System.out.println(x);
		}
		
		int x = 100;
		
		while (x>10) {
			
			System.out.println(x);
			x++;
		}
	}
}