# 소행성 충돌

한 줄에 있는 소행성을 나타내는 정수 배열 **asteroids**가 주어집니다.

각 소행성에 대해 절댓값은 크기를 나타내고 부호는 방향을 나타냅니다(양수는 오른쪽, 음수는 왼쪽). 각 소행성은 같은 속도로 움직입니다.

모든 충돌 후 **asteroids**의 상태를 확인하십시오. 두 **asteroids**가 만나면 작은 것이 폭발합니다. 둘 다 크기가 같으면 둘 다 폭발합니다. 같은 방향으로 움직이는 두 소행성은 절대 만나지 않습니다.

## 예시
```text
입력: asteroids = [5,10,-5]
출력: [5,10]
설명: 10과 -5가 충돌하여 10이 됩니다. 5와 10은 절대 충돌하지 않습니다.

입력: asteroids = [8,-8]
출력: []
설명: 8과 -8이 충돌하여 서로 폭발합니다.

입력: asteroids = [10,2,-5]
출력: [10]
설명: 2와 -5가 충돌하여 -5가 됩니다. 10과 -5가 충돌하여 10이 됩니다.

입력: asteroids = [-2,-1,1,2]
출력: [-2,-1,1,2]
설명: -2와 -1은 왼쪽으로 움직이고 1과 2는 오른쪽으로 움직입니다. 같은 방향으로 움직이는 소행성은 절대 만나지 않으므로 어떤 소행성도 서로 만나지 않습니다.
```

## 제약 조건
- 1 <= asteroids <= 104
- -1000 <= asteroids[i] <= 1000
- asteroids[i] != 0
