### 백준 별 뒤집기 - 10 (2447)

### 접근 방식

1. 시간복잡도 생각하기

- 1초라는 시간제한 존재, 즉 2천만번의 연산이 가능하다.

- 1 <= K < 8 의 범위 9 ~ 3 ^ 8 정도 길이의 문자열을 다뤄야 한다. 81 X 81 즉 최대 6561번의 연산만 필요함으로 재귀함수로 연산을 해도 문제없다고 판단하였다.

2. 재귀

- Math.floor(y / 3) % 3 === 1, Math.floor(x / 3) % 3 === 1일 경우 공백을 채운다.
- 이때, y, x가 3보다 작을 경우 나머지 칸수를 \*로 채운다. (재귀 stop)

### 어려웠던 점

- 아이디어가 떠오르지 않았음...

### 참고 자료

https://chunghyup.tistory.com/68
