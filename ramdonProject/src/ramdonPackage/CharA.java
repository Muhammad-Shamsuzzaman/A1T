package ramdonPackage;
// Howo to print a first & last letter of a string
public class CharA {

	public static void main(String[] args) {
		
		String name = "Hamilton";
		char first = name.charAt(0);
		
		System.out.println(first);
		
		char last = name.charAt(name.length()-1);
		
		System.out.println(last);

	}

}
