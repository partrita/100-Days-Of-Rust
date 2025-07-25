# WERTYU

일반적인 입력 오류는 키보드에서 손을 올바른 위치보다 한 줄 오른쪽에 놓는 것입니다. 그러면 "Q"는 "W"로, "J"는 "K"로 입력되는 식입니다.

<p align="left">
  <img src="../../assets/keyboard.png" alt="키보드">
</p>

여러분의 임무는 이런 식으로 입력된 메시지를 해독하는 것입니다.

## 세부 정보

주어진 입력에 대해 올바른 문자열을 출력하는 **keyboardMistakeFix** 함수를 작성하십시오.
이 함수에는 다음과 같은 매개변수가 있습니다.
- **input**: 숫자, 공백, 대문자("Q", "A", "Z" 제외) 또는 위에 표시된 구두점(역따옴표(') 제외)을 포함할 수 있습니다.

반환 값:
- 각 문자 또는 구두점을 위에 표시된 QWERTY 키보드에서 바로 왼쪽에 있는 것으로 바꿔야 합니다. 입력의 공백은 출력에 그대로 반영되어야 합니다.

## 제약 조건
- 단어로 표시된 키[Tab, BackSp, Control 등]는 입력에 표시되지 않습니다.


### 예시
```text
keyboardMistakeFix("O S, GOMR YPFSU/") ➞ "I AM FINE TODAY."
```
