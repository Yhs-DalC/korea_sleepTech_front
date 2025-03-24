import java.util.Scanner;

public class code05 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int N = sc.nextInt();
    int[] numArray = new int[N];

    for (int i = 0; i < N; i++) {
      numArray[i] = sc.nextInt();
    }

    int K = sc.nextInt();

    int index = binarySearch(numArray, K);

    System.out.println(index);

    sc.close();
  }

  // # 이진 탐색 메소드(반환: K의 인덱스 값)
  public static int binarySearch(int[] arr, int K) {
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (arr[mid] == K) {
        return mid;
      } else if (arr[mid] < K) {
        left = mid + 1;
      } else {
        right = mid - 1;

        +
      }
    }
    return -1;
  }
}
// & 이진 탐색
// : '미리 정렬되어있는 숫자 목록(배열)'에서 원하는 숫자를 빠르게 찾는 방법

// ! 탐색 과정
// 1. 목록 가운데 있는 숫자를 찾음
// 2. 만약 해당 숫자와 일치하면 검색 완료
// 3. 가운데 숫자보다 찾는 수가 작으면, 찾는 숫자는 오른쪽(더 큰 수)에 위치
// 4. 가운데 숫자보다 찾는 수가 크면, 찾는 숫자는 왼쪽(더 작은 수)에 위치
// 5. 숫자를 찾을때까지 반복함
// 6. 목록에 없으면 -1출력