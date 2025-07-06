# API 챌린지

## 요구 사항

대도시 자동 완성 제안을 제공하는 API 엔드포인트를 설계합니다.
제안은 인구가 5,000명 이상인 미국, 브라질, 캐나다의 도시로 제한되어야 합니다.

- 엔드포인트는 `/suggestions`에 노출됩니다.
- 부분 (또는 전체) 검색어는 쿼리 문자열 매개변수 `q`로 전달됩니다.
- 상대적 점수를 향상시키는 데 도움이 되도록 호출자의 위치를 쿼리 문자열 매개변수 `latitude` 및 `longitude`를 통해 선택적으로 제공할 수 있습니다.
- 엔드포인트는 점수가 매겨진 제안된 일치 항목 배열과 함께 JSON 응답을 반환합니다.
  - 제안은 점수가 높은 순으로 정렬됩니다.
  - 각 제안에는 제안에 대한 신뢰도를 나타내는 0에서 1 사이의 점수(1이 가장 신뢰도가 높음)가 있습니다.
  - 각 제안에는 유사하게 이름이 지정된 위치를 명확하게 구분하는 데 사용할 수 있는 이름이 있습니다.
  - 각 제안에는 위도와 경도가 있습니다.

#### 샘플 응답

이러한 응답은 지침을 제공하기 위한 것입니다. 정확한 값은 데이터 소스 및 채점 알고리즘에 따라 달라질 수 있습니다.

**거의 일치**

    GET /suggestions?q=Londo&latitude=43.70011&longitude=-79.4163

```json
{
  "suggestions": [
    {
      "name": "London, ON, Canada",
      "latitude": "42.98339",
      "longitude": "-81.23304",
      "score": 0.9
    },
    {
      "name": "London, OH, USA",
      "latitude": "39.88645",
      "longitude": "-83.44825",
      "score": 0.5
    },
    {
      "name": "London, KY, USA",
      "latitude": "37.12898",
      "longitude": "-84.08326",
      "score": 0.5
    },
    {
      "name": "Londontowne, MD, USA",
      "latitude": "38.93345",
      "longitude": "-76.54941",
      "score": 0.3
    }
  ]
}
```

**일치 없음**

    GET /suggestions?q=SomeRandomCityInTheMiddleOfNowhere

```json
{
  "suggestions": []
}
```

## 데이터 소스

[Google Geolocation](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiH3ojJ-NrsAhUHt3cKHdWuC0QYABAAGgJlZg&ohost=www.google.com&cid=CAESP-D2vI6oOFB6UkonTsUenG2N8-pZmAiypdXPRE2lSiBXlM1-4706UwapRywBQ96FXr7_rMpRkyIqSmPAvSoWQQ&sig=AOD64_3q0rlOPwXTglNovTTowHbzbFfr6A&q&adurl&ved=2ahUKEwj_z4DJ-NrsAhUHNOwKHcWkBRYQ0Qx6BAgPEAE) API 또는 원하는 다른 API를 사용할 수 있습니다.
