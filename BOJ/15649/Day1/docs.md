### 백준 N과 M (1)

### 접근 방식

1. 수열을 구하기

첫번째 방법으로는 다중 포문 방식을 생각했다. 하지만 M의 수가 가변적이라 다중 포문 방식을 구할 경우 구현 시 더 복잡해 질 것이라고 판단했다. 

따라서, 재귀 방식을 통해 문제를 해결할려고 했다. 코드를 구하는 방식이 어려워 코드를 참고했다. 

### 순열 구현 아이디어

순열을 구현하는 아이디어는 첫 번째 위치할 수를 골라 놓고 나머지를 구성하는 것이다. 이때, 중복되는 알고리즘은 재귀로 처리한다. 

Ex) 5개의 원소가 있는 [1,2,3,4,5] 배열에서 3개를 선택하는 순열을 구하는 경우

1. 첫번째 원소가 1인 경우
```js
const fixed = 1;
const rest = [2,3,4,5]
const permutationOfRest = getPermutation([2,3,4,5], 2)
```

[2,3,4,5]에서 첫 번째 원소로 2를 선택한 다음 2를 제외한 나머지 원소들 중 한개를 선택하면 된다. 

```js
const fixed = 2;
const rest = [3,4,5];
const permutationOfRest = getPermutation([3,4,5], 1);
```

마지막으로 [3,4,5]에서 한 개를 선택하면 되는데 [3,4,5]에서 한 개를 선택하는 방법은 정해져있다. 1개를 선택하는 경우엔 인수로 받은 배열을 해체해 반환해주면 된다. 

```js
[3,4,5] // if (selectNum === 1) return arr.map((element) => [element]);
```

이제 `getPermutation([3,4,5], 1);`의 반환갑을 알게 되었으니, 바로 윗 단계에서 선택한 원소 2를 각 요소 맨 앞에 넣어주면 반환값을 알 수 있게 됩니다. 

```js
// func([2,3,4,5], 2)
return [[2,3], [2,4], [2,5]];
```

이제 `getPermutation([2,3,4,5], 2);`의 반환값을 알게 되었으니, 그 윗 단계에서 선택한 원소 1을 각 요소 맨 앞에 넣어주면 최종적으로 첫 번째 원소가 1인 경우의 수, `getPermutation([1,2,3,4,5],3)`의 값을 구할 수 있게 된다. 

위의 과정을 총 5회 반복하면 된다. 

```js
function getPermutation(arr, selectNum) {
  if (selectNum === 1) return arr.map((element) => [element]);

  const result = [];

  arr.forEach((fixed, selectedIndex, array) => {
    const rest = array.filter((_, idx) => selectedIndex !== idx);
    const perm = getPermutation(rest, selectNum - 1);
    const combineList = perm.map((elementArr) => [fixed, ...elementArr])
    result.push(...combineList);
  });

  return result;
}
```