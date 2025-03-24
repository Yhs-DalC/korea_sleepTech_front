import java.util.Scanner;

public class code02 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num = sc.nextInt();

    // sc.nextLine();
    int[] nums = new int[num];
    // String input = sc.nextLine();

    // String[] inputSplit = input.split(" ");
    for (int i = 0; i < num; i++) {
      nums[i] = sc.nextInt();
    }
    // int max = 0;
    int max = Integer.MIN_VALUE;
    // : 정수형 int가 저장할 수 있는 최솟값을 반환
    // for (int i = 0; i < num; i++) {
    // if (max < Integer.parseInt(inputSplit[i])) {
    // max = Integer.parseInt(inputSplit[i]);
    // }
    // }
    for (int i = 0; i < num; i++) {
      if (max < nums[i]) {
        max = nums[i];
      }
    }
    System.out.println(max);
    sc.close();
  }
}
