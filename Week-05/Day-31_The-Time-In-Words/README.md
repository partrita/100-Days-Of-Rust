# 말로 표현한 시간

아래와 같이 숫자로 표시된 시간을 말로 변환할 수 있습니다.

<p align="left">
  <img src="../../assets/The Time in Words.png" alt="말로 표현한 시간">
</p>

## 세부 정보

*minutes = 0*일 경우 o' clock을 사용합니다. *1 <= minutes <= 30*일 경우 past를 사용하고, *30 < minutes*일 경우 to를 사용합니다. o' clock에서 아포스트로피와 clock 사이의 공백에 유의하십시오.

설명된 형식으로 주어진 입력에 대해 시간을 말로 출력하는 **timeInWords** 함수를 작성하십시오.
이 함수에는 다음과 같은 매개변수가 있습니다.
- **h**: 시간을 나타내는 정수
- **m**: 분을 나타내는 정수

## 제약 조건
- *1 <= h <= 12*
- *0 <= m < 60*

### 예시
```text
timeInWords(5, 47) ➞ thirteen minutes to six (6시 13분 전)
timeInWords(3, 00) ➞ three o' clock (3시 정각)
timeInWords(7, 15) ➞ quarter past seven (7시 15분)
timeInWords(5, 30) ➞ half past five (5시 30분)
timeInWords(5, 01) ➞ one minute past five (5시 1분)
```
