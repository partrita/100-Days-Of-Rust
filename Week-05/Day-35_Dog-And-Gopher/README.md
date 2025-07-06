# 개와 땅다람쥐

넓은 들판에 개와 땅다람쥐가 있습니다.

개는 땅다람쥐를 잡아먹고 싶어하고, 땅다람쥐는 들판 표면에 파인 여러 개의 땅다람쥐 굴 중 하나를 통해 안전한 곳으로 도망가고 싶어합니다.

개도 땅다람쥐도 수학 전공자는 아니지만, 둘 다 완전히 어리석지는 않습니다.

땅다람쥐는 특정 땅다람쥐 굴을 결정하고 고정된 속도로 직선으로 그 굴을 향해 달려갑니다. 몸짓 언어를 매우 잘 읽는 개는 땅다람쥐가 어떤 굴을 선택했는지 예측합니다.

개는 땅다람쥐 속도의 두 배로 굴을 향해 달려갑니다. 개가 굴에 먼저 도착하면 땅다람쥐는 잡아먹히고, 그렇지 않으면 땅다람쥐는 탈출합니다.

## 목표
당신은 땅다람쥐에게 고용되어 **탈출할 수 있는 굴을 선택**해야 합니다(만약 있다면). **다양한 시나리오 세트가 있는 파일을 읽어서** 선택해야 합니다.

테스트에 도움이 되도록 몇 가지 샘플 파일이 이미 제공되었습니다.
```text
assets/day-35_sample_1_valid.txt
assets/day-35_sample_2_valid.txt
assets/day-35_sample_3_invalid.txt
assets/day-35_sample_4_invalid.txt
assets/day-35_sample_5_invalid.txt
assets/day-35_sample_6_invalid.txt
```

각 시나리오 세트의 결과당 하나의 항목이 있는 문자열 목록/배열을 반환하는 **gopherEscapePlan** 함수를 작성하십시오.

이 함수에는 하나의 입력 매개변수가 있습니다.
- **filename**: 파일 경로를 나타내는 문자열

이 함수는 다음을 반환합니다.
- 각 시나리오 세트의 결과당 하나의 항목이 있는 문자열 목록/배열 또는 파일이 유효하지 않거나 액세스할 수 없는 경우 "BAD FILE!" 메시지. 자세한 내용은 아래 **출력** 섹션을 참조하십시오.

## 입력 파일 형식

입력 파일에는 여러 입력 세트가 포함되어 있습니다. 각 세트의 첫 번째 줄에는 **정수 하나**와 **부동 소수점 숫자 네 개**가 포함됩니다.

정수 **n**은 세트에 있는 굴의 수를 나타냅니다.
**부동 소수점 숫자 네 개**는 **땅다람쥐의 (x, y) 좌표**와 **개의 (x, y) 좌표**를 차례로 나타냅니다.

그 다음 **n**개의 입력 줄 각각에는 **두 개의 부동 소수점 숫자**가 포함됩니다. 즉, **땅다람쥐 굴의 (x, y) 좌표**입니다. 모든 거리는 밀리미터 단위까지의 미터입니다.

입력은 **파일 끝으로 종료**되며 **두 개의 연속된 세트 사이에 빈 줄이 있습니다**.

**두 개의 연속된 세트 사이에 두 개 이상의 빈 줄**이 있거나 **파일 시작 부분에도 빈 줄**이 있는 경우에도 입력 파일은 **유효**한 것으로 간주됩니다.

## 출력
각 입력 세트에 대해 한 줄을 반환합니다.

땅다람쥐가 탈출할 수 있는 경우 출력 줄은 _“The gopher can escape through the hole at (x, y).”_이어야 하며 적절한 굴을 밀리미터 단위까지 식별해야 합니다.

그렇지 않은 경우 출력 줄은 _“The gopher cannot escape.”_이어야 합니다.

땅다람쥐가 두 개 이상의 굴을 통해 탈출할 수 있는 경우 **입력에 먼저 나타나는** 굴을 보고합니다.

파일에 **액세스할 수 없거나 유효하지 않은 경우**(예: 발견된 **굴의 수**가 **n**과 일치하지 않거나 파일의 한 줄에서 더 많거나 적은 필드가 발견된 경우) **["BAD FILE!"]**만 반환합니다.



## 제약 조건
입력 세트에는 최대 1,000개의 땅다람쥐 굴이 있으며 모든 좌표 범위는 –10,000에서 +10,000 사이입니다.



### 입력 파일 예시
```text
1.000 1.000 2.000 2.000
1.500 1.500

2 2.000 2.000 1.000 1.000
1.500 1.500
2.500 2.500
```

### 예상 반환 값
```text
["The gopher cannot escape.", "The gopher can escape through the hole at (2.500,2.500)."]
```


### 'assets' 폴더에서 사용 가능한 제공된 샘플 파일을 사용한 예시
```text
gopherEscapePlan("...assets/day-35_sample_1_valid.txt") ➞ ["The gopher cannot escape.", "The gopher can escape through the hole at (2.500000,2.500000)."]

gopherEscapePlan("...assets/day-35_sample_2_valid.txt") ➞ ["The gopher cannot escape.", "The gopher can escape through the hole at (2.500000,2.500000)."]

gopherEscapePlan("...assets/day-35_sample_3_invalid.txt") ➞ ["BAD FILE!"]

gopherEscapePlan("...assets/day-35_sample_4_invalid.txt") ➞ ["BAD FILE!"]

gopherEscapePlan("...assets/day-35_sample_5_invalid.txt") ➞ ["BAD FILE!"]
```