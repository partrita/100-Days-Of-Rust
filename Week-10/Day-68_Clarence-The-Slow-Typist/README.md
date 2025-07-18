# 느린 타이피스트 클래런스

클래런스는 인터넷 서비스 제공업체에서 일하는 데이터 입력 사무원입니다. 그의 일은 ISP 고객의 모든 IP 주소를 데이터베이스에 수동으로 입력하는 것입니다. 그는 다음과 같은 레이아웃의 키패드를 사용하여 이 작업을 수행합니다.

```text
1	2	3
4	5	6
7	8	9
.	0	
```
가로 또는 세로로 인접한 키의 중심 사이의 거리는 정확히 1cm입니다. 예를 들어, 3과 9의 중심 사이의 거리는 2cm입니다. 3과 5의 중심 사이의 거리는 sqrt 2cm입니다. 피타고라스 정리는 임의의 두 키 사이의 거리를 계산하는 데 충분합니다.

클래런스는 ISP에서 일하는 사람에게 기대할 수 있듯이 매우 느리고 비효율적인 타이핑 시스템을 사용합니다. 그는 손가락 하나를 사용하여 키를 검색한 다음 손가락을 키로 옮기고 키를 누른 다음 숫자의 모든 자릿수에 대해 반복합니다. 이 스타일은 독수리가 사냥감을 덮치기 전에 올바른 키를 찾아 키보드 위를 탐색하는 것처럼 손가락이 키보드 위를 탐색하기 때문에 "독수리 검색 시스템"으로 알려져 있을 수 있습니다.

예를 들어, 클래런스가 숫자 7851을 입력하는 방법은 다음과 같습니다.

    그는 7에서 손가락을 시작하여 키를 누릅니다.

    그는 손가락을 오른쪽으로 1cm 움직여 8로 이동하고 키를 누릅니다.

    그는 손가락을 위로 1cm 움직여 5로 이동하고 키를 누릅니다.

    그는 손가락을 대각선 위 왼쪽으로 sqrt 2cm 움직여 1로 이동하고 키를 누릅니다.

따라서 클래런스가 7851을 입력하기 위해 손가락을 움직인 총 거리는 1 + 1 + sqrt 2이며 약 3.41cm입니다.

## 목표

여러분의 작업은 클래런스가 임의의 IP 주소를 입력하기 위해 손가락을 움직여야 하는 거리를 계산하는 프로그램을 작성하는 것입니다.

## 입력

입력은 다음과 같은 형식의 문자열입니다.

**().().().()**

여기서 각 ()는 0-999 범위의 정수입니다. 이것은 클래런스가 입력해야 하는 IP 주소를 나타냅니다. 예시 입력은 다음과 같습니다.

**219.45.143.143**

**0.42.42.42** 또는 **999.999.999.999**와 같은 입력도 유효하지 않은 IP 주소임에도 불구하고 여전히 유효한 입력이라는 점을 지적하고 싶습니다. **따라서 프로그램에 IP 주소 확인 코드를 포함할 필요가 없습니다**.

## 출력

클래런스가 지정된 IP 주소를 입력하기 위해 손가락을 움직여야 하는 거리를 출력합니다.
