# 불이 켜진 지 얼마나 되었나요?

방에 불이 있는데, 누군가 방에 있을 때만 켜집니다(동작 감지기라고 생각하세요). 입장 및 퇴장 시간 간격이 단일 정수로 주어지며, 불이 켜진 시간을 찾아야 합니다. 시간이 겹치는 경우 해당 간격에서 가장 작은 숫자와 가장 큰 숫자 사이의 시간을 찾아야 합니다.

## 입력 설명

각 줄에 크기가 2인 배열/벡터의 배열/벡터가 주어지며, 각각 누군가가 방에 들어오고 나간 시점을 알려줍니다. 각 줄은 방문자이고 각 블록은 방입니다. 예시:

```text
[[1,3],[2,3],[4,5]]
```

## 출력 설명

프로그램은 불이 켜져 있던 시간을 보고해야 합니다. 위 예시에서:

```text
3
```

## 예시

```text
lightOn([[2,4],[3,6],[1,3],[6,8]]) ➞ 7
lightOn([[6,8],[5,8],[8,9],[5,7],[4,7]]) ➞ 5
```