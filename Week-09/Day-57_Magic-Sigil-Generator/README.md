# 마법 인장 생성기

마법 인장은 삶에서 실현하고자 하는 소망을 나타내는 문자입니다. 인장을 만드는 방법은 여러 가지가 있지만 가장 일반적인 방법은 특정 소망(예: "나는 나를 사랑하는 멋진 친구들이 있다")을 적고 모든 모음을 제거하고 중복된 문자(마지막 문자는 유지)를 제거한 다음 남은 문자로부터 문자를 디자인하는 것입니다.

위 문장을 예로 들면 중복된 문자를 제거합니다.

```text
AUFRINDSWHLOVME
```
그런 다음 모든 모음을 제거하면 다음과 같이 남습니다.

```text
FRNDSWHLVM
```

문자열을 입력받아 모음과 중복된 문자를 제거하는 함수를 만듭니다. 반환되는 문자열에는 공백이 없어야 하며 대문자여야 합니다.

## 예시
```text
sigilize("i am healthy") ➞ "MLTHY"

sigilize("I FOUND MY SOULMATE") ➞ "FNDYSLMT"

sigilize("I have a job I enjoy and it pays well") ➞ "HVBJNDTPYSWL"
```

## 참고
- 중복된 문자의 경우 마지막 문자가 유지됩니다.