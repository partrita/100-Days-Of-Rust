## 화장실 칸막이

특정 화장실에는 한 줄로 된 **N** + 2개의 칸막이가 있습니다. 왼쪽과 오른쪽 끝의 칸막이는 화장실 경비원이 영구적으로 사용합니다. 나머지 **N**개의 칸막이는 사용자를 위한 것입니다.

누군가 화장실에 들어갈 때마다 다른 사람들과 가능한 한 멀리 떨어진 칸막이를 선택하려고 합니다. 혼란을 피하기 위해 그들은 결정론적 규칙을 따릅니다. 각 빈 칸막이 S에 대해 LS와 RS라는 두 값을 계산하는데, 각 값은 S와 각각 왼쪽 또는 오른쪽에 있는 가장 가까운 사용 중인 칸막이 사이의 빈 칸막이 수입니다. 그런 다음 가장 가까운 이웃이 가장 먼 칸막이 집합, 즉 min(LS, RS)가 최대인 S를 고려합니다. 이러한 칸막이가 하나만 있으면 그것을 선택합니다. 그렇지 않으면 max(LS, RS)가 최대인 칸막이 중에서 하나를 선택합니다. 여전히 여러 개의 동점 칸막이가 있으면 그중 가장 왼쪽에 있는 칸막이를 선택합니다.

**K**명의 사람들이 화장실에 들어갈 예정입니다. 각 사람은 다음 사람이 도착하기 전에 자신의 칸막이를 선택합니다. 아무도 떠나지 않습니다.

마지막 사람이 자신의 칸막이 S를 선택할 때 max(LS, RS)와 min(LS, RS)의 값은 어떻게 될까요?

### 입력

입력의 첫 번째 줄에는 테스트 케이스의 수 **T**가 주어집니다. **T**개의 줄이 이어집니다. 각 줄은 위에서 설명한 대로 두 개의 정수 **N**과 **K**로 테스트 케이스를 설명합니다.

### 출력

각 테스트 케이스에 대해 Case #x: y z 형식으로 한 줄을 출력합니다. 여기서 x는 테스트 케이스 번호(1부터 시작)이고, y는 max(LS, RS)이고, z는 마지막으로 화장실에 들어간 사람이 선택한 칸막이 S에 대해 계산된 min(LS, RS)입니다.

### 제한

1 ≤ **T** ≤ 100.
1 ≤ **K** ≤ **N**.
시간 제한: 테스트 세트당 30초.
메모리 제한: 1GB.

#### 테스트 세트

1 ≤ N ≤ 1018.

### 샘플

```
입력               출력

5                   
4 2                Case #1: 1 0
5 2                Case #2: 1 0
6 2                Case #3: 1 1
1000 1000          Case #4: 0 0
1000 1             Case #5: 500 499
```

샘플 케이스 #1에서 첫 번째 사람은 중간 두 칸막이 중 가장 왼쪽에 있는 칸막이를 차지하여 다음과 같은 구성을 남깁니다(O는 사용 중인 칸막이를 나타내고 .는 빈 칸막이를 나타냄): O.O..O. 그런 다음 두 번째이자 마지막 사람이 바로 오른쪽에 있는 칸막이를 차지하여 한쪽에는 빈 칸막이 1개, 다른 쪽에는 빈 칸막이가 없게 됩니다.

샘플 케이스 #2에서 첫 번째 사람은 중간 칸막이를 차지하여 O..O..O가 됩니다. 그런 다음 두 번째이자 마지막 사람이 가장 왼쪽에 있는 칸막이를 차지합니다.

샘플 케이스 #3에서 첫 번째 사람은 두 개의 중간 칸막이 중 가장 왼쪽에 있는 칸막이를 차지하여 O..O...O를 남깁니다. 그런 다음 두 번째 사람이 연속된 세 개의 빈 칸막이 중 중간 칸막이를 차지합니다.

샘플 케이스 #4에서는 칸막이 선택에 관계없이 결국 모든 칸막이가 사용됩니다.

샘플 케이스 #5에서 첫 번째이자 유일한 사람이 가장 왼쪽에 있는 중간 칸막이를 선택합니다.
