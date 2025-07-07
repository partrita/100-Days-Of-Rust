## 니모를 찾아서

단어들로 이루어진 문자열이 주어집니다. "Nemo"라는 단어를 찾아 다음과 같은 문자열을 반환해야 합니다: `I found Nemo at [니모를 찾은 단어의 순서]!`.

니모를 찾을 수 없다면 `I can't find Nemo :(`를 반환하세요.

#### 예시

```text
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNimo("I Nemo am") ➞ "I found Nemo at 2!"
```

---

### 참고

- `! , ? .`는 항상 마지막 단어와 분리됩니다.
- 니모는 항상 Nemo처럼 보이며, NeMo 또는 다른 대문자 변형은 없습니다.
- Nemo's 또는 Nemo 뒤에 무언가가 붙은 것은 니모를 찾는 것으로 간주하지 않습니다.
- 문장에 여러 개의 니모가 있는 경우 첫 번째 니모에 대해서만 반환합니다.
