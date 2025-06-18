## 카라카 암호화 알고리즘

다음 단계에 따라 주어진 입력을 암호화하는 함수를 만드세요:

입력: `"apple"`

1단계: 입력을 뒤집습니다: `"elppa"`

2단계: 다음 차트를 사용하여 모든 모음을 바꿉니다:

```text
a => 0
e => 1
i => 2
o => 2
u => 3

// "1lpp0"
```

3단계: 단어 끝에 "aca"를 추가합니다: `"1lpp0aca"`

출력: `"1lpp0aca"`

### 예시

```text
Encrypt("banana") ➞ "0n0n0baca"

Encrypt("karaca") ➞ "0c0r0kaca"

Encrypt("burak") ➞ "k0r3baca"

Encrypt("alpaca") ➞ "0c0pl0aca"
```

---

### 참고

- 모든 입력은 문자열이고 대문자는 없으며 모든 출력은 문자열이어야 합니다.
