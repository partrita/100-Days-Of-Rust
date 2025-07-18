## 정렬된 배열 병합하기

정렬된 두 정수 배열 nums1과 nums2가 주어지면 nums2를 nums1에 병합하여 하나의 정렬된 배열로 만드세요.

### 예시

```text
입력:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

출력: [1,2,2,3,5,6]
```

### 제약 조건

- `-10^9 <= nums1[i], nums2[i] <= 10^9`
- `nums1.length == m + n`
- `nums2.length == n`

---

### 참고

- nums1과 nums2에 초기화된 요소의 수는 각각 m과 n입니다.
- nums1에는 nums2의 추가 요소를 담을 수 있는 충분한 공간(m + n과 **같은** 크기)이 있다고 가정할 수 있습니다.
