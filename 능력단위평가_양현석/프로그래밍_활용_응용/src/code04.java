import java.util.Scanner;

public class code04 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int N = sc.nextInt();
    int[] numArray = new int[N];
    int temp = 0;

    for (int i = 0; i < N; i++) {
      numArray[i] = sc.nextInt();
    }
    // ? 버블 정렬 알고리즘
    for (int i = 0; i < N - 1; i++) {
      for (int j = 1; j < N - i; j++) {
        if (numArray[j - 1] > numArray[j]) {
          temp = numArray[j];
          numArray[j] = numArray[j - 1];
          numArray[j - 1] = temp;
        }
      }
    }
    for (int num : numArray) {
      System.out.print(num + " ");
    }
    sc.close();
  }
}
// & 알고리즘1: 버블 정렬
// ! 개념
// : 인접한 두 원소를 비교하여 크기가 순서에 맞지 않으면 서로 교환하는 방식으로 정렬하는 알고리즘
// - 앞의 숫자가 더 크면 서로 자리를 바꿈
// - 가장 큰 수가 맨 뒤로 이동 + 다시 처음부터 반복하여 남은 숫자들도 순서대로 정리

// ! 버블 정렬인 이유
// : 물 속의 거품이 큰 순서의 차례로 위로 올라가듯, 큰 숫자가 뒤쪽으로 떠오르는 형태를 반영