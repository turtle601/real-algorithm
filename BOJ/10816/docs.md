### 백준 숫자 카드 2 문제 (10816)

### 접근 방식

1. 완전 탐색 O(N^2)

- M의 카드 중 N개의 카드가 몇 개 있는지 푸는 문제, 이중 포문으로 쉽게 풀 수 있다. (X)

2. 시간 복잡도를 고려하자

- N <= 50,000, M, <= 50,000
- 이중 포문을 돌릴 경우 최대 2,500,000,000연산을 수행, 하지만 1초라는 시간제한이 존재 (X) - 1초는 최대 2천만번(200,000,000)만 수행 가능
- O(NlogN) 연산을 고려하자 -> 이진 탐색을 사용하자. / Map 자료구조를 사용하는 방법도 존재

3. 이진 탐색

1) 구글링을 통해서 사용한 첫번째 이진 탐색 방법

```javascript
function binarySearch(list, target, visited) {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (list[mid] === target) {
      return mid;
    }

    if (list[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
```

-> 해당 방법은 target 숫자가 여러 개일 경우 몇 번째 숫자를 찍었는지 모른다.

2. 첫번째 요소와 마지막 요소를 찾는 방법을 고려

```javascript
// 첫번째 요소 탐색
function binarySearchForLower(list, target) {
  let start = 0;
  let end = list.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (list[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

// 제일 타겟의 마지막 요소 다음 값을 탐색
function binarySearchForUpper(list, target) {
  let start = 0;
  let end = list.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (list[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}
```

### 참고 자료

- https://kingseungil.tistory.com/169
