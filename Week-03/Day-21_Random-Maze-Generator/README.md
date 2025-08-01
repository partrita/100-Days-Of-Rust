## 무작위 미로 생성기

미로는 미리 정해진 셀 배열과 그 사이에 벽이 있는 상태에서 시작하여 생성할 수 있습니다. 이 미리 정해진 배열은 가능한 벽 위치를 나타내는 간선과 셀을 나타내는 노드가 있는 연결된 그래프로 간주할 수 있습니다. 그런 다음 미로 생성 알고리즘의 목적은 두 특정 노드 사이의 경로를 찾기 어려운 하위 그래프를 만드는 것으로 간주할 수 있습니다.

입력이 주어지면 무작위 미로를 생성합니다.

### 예시

**예시 1**

```text
DrawMaze(5,7)
```

**출력**

<p align="left">
  <img src="../../assets/maze.png" alt="미로">
</p>

**예시 2**

```text
DrawMaze(4,6)
```

**출력**

```text
+---+---+---+---+---+---+
|   |           |       |
+   +   +   +---+   +---+
|   |   |           |   |
+   +   +---+---+---+   +
|   |   |               |
+   +   +   +---+---+   +
|           |           |
+---+---+---+---+---+---+
```
