# 색깔 미로

오늘은 다채롭고 놀라운 것을 할 것입니다. 네, 바로 색깔 미로입니다 :D (지금 저에게 반대표를 던지셔도 됩니다. 그럴 만한 가치가 있었어요).

색깔 순서를 따라 색깔을 통과합니다. 예를 들어 이 미로는 '주황색 -> 초록색' 순서로 풀 수 있습니다.

<p align="center">
  <img src="../../assets/maze_color_1.png" alt="색깔 미로">
</p>

그러면 다음과 같은 결과가 나올 것입니다 (그림판 실력):

<p align="center">
  <img src="../../assets/maze_color_2.png" alt="색깔 미로 해결책">
</p>

미로의 경우 항상 맨 아래, 시작 색깔의 한 지점을 선택하고 첫 번째 줄로 이동하려고 합니다. 첫 번째 줄에 도달하면 미로에서 빠져나온 것입니다. 순서가 완전할 필요는 없습니다.

가로 및 세로로 이동할 수 있지만 대각선으로는 이동할 수 없습니다. 동일한 노드에서 두 번 이상 이동하는 것도 허용됩니다.

## 목표

**두 개의 입력 매개변수**를 사용하는 함수를 작성하십시오.
- 따라야 할 색깔 순서를 문자 배열/벡터로
- 미로를 문자 배열/벡터로

## 출력
미로의 경로를 좌표 x, y로 나타냅니다.

## 예시
```text
색깔 순서: R W

미로:
[
  R  O  G
  W  R  W
  G  O  R
  O  R  W
]

해결책:
(1, 3)
(2, 3)
(2, 2)
(2, 1)
(1, 1)
(0, 1)
(0, 0)

--------------------------------------------------------------------------------

색깔 순서: R W

미로:
[
  R  O  G
  W  R  W
  G  O  O
  O  R  W
]

해결책: 해결책 없음!
--------------------------------------------------------------------------------

색깔 순서: O G

미로:
[
  C  O  R  O  Y
  O  R  V  G  R
  G  O  G  O  G
  Y  G  B  Y  G
  R  O  R  B  R
]

해결책:
(1, 4)
(1, 3)
(1, 2)
(2, 2)
(3, 2)
(3, 1)
(3, 0)

--------------------------------------------------------------------------------

색깔 순서: O G

미로:
[
  B  O  R  O  Y
  O  R  B  G  R
  B  O  G  O  Y
  Y  G  B  Y  G
  R  O  R  B  R
]

해결책:
(1, 4)
(1, 3)
(1, 2)
(2, 2)
(3, 2)
(3, 1)
(3, 0)

--------------------------------------------------------------------------------

색깔 순서: O G

미로:
[
  G  O  R  O  Y
  O  R  B  C  R
  G  O  G  O  G
  Y  G  B  Y  G
  R  O  R  B  R
]

해결책:
(1, 4)
(1, 3)
(1, 2)
(0, 2)
(0, 1)
(0, 0)

--------------------------------------------------------------------------------

색깔 순서: R O Y P O

미로:
[
  R  R  B  R  R  R  B  P  Y  G  P  B  B  B  G  P  B  P  P  R
  B  G  Y  P  R  P  Y  Y  O  R  Y  P  P  Y  Y  R  R  R  P  P
  B  P  G  R  O  P  Y  G  R  Y  Y  G  P  O  R  Y  P  B  O  O
  R  B  B  O  R  P  Y  O  O  Y  R  P  B  R  G  R  B  G  P  G
  R  P  Y  G  G  G  P  Y  P  Y  O  G  B  O  R  Y  P  B  Y  O
  O  R  B  G  B  Y  B  P  G  R  P  Y  R  O  G  Y  G  Y  R  P
  B  G  O  O  O  G  B  B  R  O  Y  Y  Y  Y  P  B  Y  Y  G  G
  P  P  G  B  O  P  Y  G  B  R  O  G  B  G  R  O  Y  R  B  R
  Y  Y  P  P  R  B  Y  B  P  O  O  G  P  Y  R  P  P  Y  R  Y
  P  O  O  B  B  B  G  O  Y  G  O  P  B  G  Y  R  R  Y  R  B
  P  P  Y  R  B  O  O  R  O  R  Y  B  G  B  G  O  O  P  B  Y
  B  B  R  G  Y  G  P  Y  G  P  R  R  P  Y  G  O  O  Y  R  R
  O  G  R  Y  B  P  Y  O  P  B  R  Y  B  G  P  G  O  O  B  P
  R  Y  G  P  G  G  O  R  Y  O  O  G  R  G  P  P  Y  P  B  G
  P  Y  P  R  O  O  R  O  Y  R  P  O  R  Y  P  Y  B  B  Y  R
  O  Y  P  G  R  P  R  G  P  O  B  B  R  B  O  B  Y  Y  B  P
  B  Y  Y  P  O  Y  O  Y  O  R  B  R  G  G  Y  G  R  G  Y  G
  Y  B  Y  Y  G  B  R  R  O  B  O  P  P  O  B  O  R  R  R  P
  P  O  O  O  P  Y  G  G  Y  P  O  G  P  O  B  G  P  R  P  B
  R  B  B  R  R  R  R  B  B  B  Y  O  B  G  P  G  G  O  O  Y
]

해결책:
(3, 19)
(3, 18)
(3, 17)
(3, 16)
(4, 16)
(4, 15)
(4, 16)
(5, 16)
(5, 15)
(5, 14)
(6, 14)
(6, 13)
(6, 12)
(6, 11)
(6, 10)
(7, 10)
(7, 9)
(8, 9)
(8, 8)
(9, 8)
(9, 7)
(9, 6)
(10, 6)
(10, 5)
(10, 4)
(10, 3)
(10, 4)
(9, 4)
(8, 4)
(8, 3)
(8, 2)
(8, 1)
(8, 0)
```
