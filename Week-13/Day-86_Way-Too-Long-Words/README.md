## 너무 긴 단어

때때로 "**localization**"이나 "**internationalization**"과 같은 일부 단어는 너무 길어서 한 텍스트에 여러 번 쓰는 것이 상당히 지겹습니다.

단어 길이가 **10자보다 엄격하게 긴** 경우 너무 긴 단어로 간주합니다. 너무 긴 모든 단어는 특수 약자로 대체해야 합니다.

이 약자는 다음과 같이 만듭니다. 단어의 첫 글자와 마지막 글자를 적고 그 사이에 첫 글자와 마지막 글자 사이의 글자 수를 적습니다. 이 숫자는 10진수이며 앞에 0이 포함되지 않습니다.

따라서 "**localization**"은 "**l10n**"으로, "**internationalization**"은 "**i18n**"으로 표기됩니다.

단어를 약자로 변경하는 프로세스를 자동화하는 것이 좋습니다. 이때 너무 긴 모든 단어는 약자로 대체하고 너무 길지 않은 단어는 변경하지 않아야 합니다.

### 입력
```
word
localization
internationalization
pneumonoultramicroscopicsilicovolcanoconiosis
```

### 출력
```
word
l10n
i18n
p43s
```