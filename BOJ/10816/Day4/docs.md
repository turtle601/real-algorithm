### 백준 숫자 카드 2 문제 (10816)

### 풀이 방법 - 이진 탐색 재귀

재귀로 풀 경우 최종적으로 If문에 도달한 값을 사용하기 위해서는 return 값을 해주어야 한다.

1. 잘못된 예시

```javascript
function binaryLowerSearch(numbers, target, start = 0, end = numbers.length) {
  let mid = Math.floor((start + end) / 2);

  if (start >= end) {
    return end;
  }

  // 그 이유는 재귀를 돌았을 때 최종 값 리턴 값이 undefined이기 때문
  if (numbers[mid] >= target) binaryLowerSearch(numbers, target, start, mid);
  else binaryLowerSearch(numbers, target, mid + 1, end);
}
```

2. 옳은 예시

```javascript
function binaryLowerSearch(numbers, target, start = 0, end = numbers.length) {
  let mid = Math.floor((start + end) / 2);

  if (start >= end) {
    return end;
  }

  if (numbers[mid] >= target)
    return binaryLowerSearch(numbers, target, start, mid);
  else return binaryLowerSearch(numbers, target, mid + 1, end);
}
```
