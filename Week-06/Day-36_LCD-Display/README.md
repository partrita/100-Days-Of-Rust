# LCD 디스플레이

친구가 새 컴퓨터를 샀습니다. 이전에는 그가 사용했던 가장 강력한 기계는 주머니 계산기였습니다. 그는 새 컴퓨터 화면보다 계산기의 LCD 디스플레이를 더 좋아했기 때문에 약간 실망했습니다! 그를 기쁘게 하기 위해 LCD 디스플레이 스타일로 숫자를 인쇄하는 프로그램을 작성하십시오.

## 목표
LCD 디스플레이 표현을 문자열로 반환하는 **toLCD** 함수를 작성하십시오.

이 함수에는 다음과 같은 입력 매개변수가 있습니다.
- **n**: LCD 디스플레이로 변환할 정수
- **s**: 기호 수로서의 크기

이 함수는 다음을 반환합니다.
-  LCD 디스플레이 표현을 문자열로 반환합니다.

가로 세그먼트에는 s개의 "–" 기호를 사용하고 세로 세그먼트에는 s개의 "|" 기호를 사용하여 입력에 지정된 숫자를 LCD 디스플레이 스타일로 인쇄합니다. 각 숫자는 정확히 s + 2개의 열과 2s + 3개의 행을 차지합니다.

마지막 숫자를 포함하여 숫자가 차지하는 모든 공백을 공백으로 채우십시오. 두 숫자 사이에는 정확히 하나의 공백 열이 있어야 합니다.

### 입력 예시 (n=12345, s=2) 및 (n=67890, s=3):
<p align="left">
  <img src="../../assets/lcd.png" alt="LCD">
</p>
