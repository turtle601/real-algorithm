### 백준 뒤집기 문제 (1439)

### 접근 방식

1. 시간복잡도 생각하기

- 2초라는 시간제한 존재, 즉 4천만번의 연산이 가능하다.

- 주어진 문자열의 길이는 100만(1,000,000)보다 작다. -> O(N^2)연산은 X

2. 정규식 접근

- 0 과 1의 블록의 개수 중 더 적을 것을 선택하는 로직을 작성하면 끝이다.

- 자바스크립트의 정규식을 활용하여 1인것과 아닌 것을 구분하여 계산하였다.

### 새로 알게 된 점

- `문자열.split(정규식을 할 경우)` 정규식에 해당하지 않는 문자열의 경우 ''로 찍힘

- 혼자 풀기 성공!!