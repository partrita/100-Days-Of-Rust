// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-01/Day-01_Convert-Ages-To-Days/index.html"><strong aria-hidden="true">1.</strong> Day-01_Convert-Ages-To-Days</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-01/Day-02_Finding-Nemo/index.html"><strong aria-hidden="true">2.</strong> Day-02_Finding-Nemo</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-01/Day-03_Barbecue-Skewers/index.html"><strong aria-hidden="true">3.</strong> Day-03_Barbecue-Skewers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-01/Day-04_Is-Johnny-Making-Progress/index.html"><strong aria-hidden="true">4.</strong> Day-04_Is-Johnny-Making-Progress</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-01/Day-05_Pair-Of-Socks/index.html"><strong aria-hidden="true">5.</strong> Day-05_Pair-Of-Socks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-01/Day-06_Next-Prime/index.html"><strong aria-hidden="true">6.</strong> Day-06_Next-Prime</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-01/Day-07_Merge-Sorted-Array/index.html"><strong aria-hidden="true">7.</strong> Day-07_Merge-Sorted-Array</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-02/Day-08_Letter-Combinations-Of-A-Phone-Number/index.html"><strong aria-hidden="true">8.</strong> Day-08_Letter-Combinations-Of-A-Phone-Number</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-02/Day-09_Trapping-Rain-Water/index.html"><strong aria-hidden="true">9.</strong> Day-09_Trapping-Rain-Water</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-02/Day-10_Unique-Binary-Search-Trees/index.html"><strong aria-hidden="true">10.</strong> Day-10_Unique-Binary-Search-Trees</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-02/Day-11_Restore-IP-Addresses/index.html"><strong aria-hidden="true">11.</strong> Day-11_Restore-IP-Addresses</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-02/Day-12_Mountains_And_Valleys/index.html"><strong aria-hidden="true">12.</strong> Day-12_Mountains_And_Valleys</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-02/Day-13_Need-Help-With-Packing/index.html"><strong aria-hidden="true">13.</strong> Day-13_Need-Help-With-Packing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-02/Day-14_Karacas-Encryption-Algorithm/index.html"><strong aria-hidden="true">14.</strong> Day-14_Karacas-Encryption-Algorithm</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-03/Day-15_Valid-Anagram/index.html"><strong aria-hidden="true">15.</strong> Day-15_Valid-Anagram</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-03/Day-16_Nim-Game/index.html"><strong aria-hidden="true">16.</strong> Day-16_Nim-Game</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-03/Day-17_Prison-Break/index.html"><strong aria-hidden="true">17.</strong> Day-17_Prison-Break</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-03/Day-18_Unique-Paths/index.html"><strong aria-hidden="true">18.</strong> Day-18_Unique-Paths</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-03/Day-19_URL-Shortener/index.html"><strong aria-hidden="true">19.</strong> Day-19_URL-Shortener</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-03/Day-20_API-Challenge/index.html"><strong aria-hidden="true">20.</strong> API 챌린지</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-03/Day-21_Random-Maze-Generator/index.html"><strong aria-hidden="true">21.</strong> Day-21_Random-Maze-Generator</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-04/Day-22_Marcio-Mellos-Challenge/index.html"><strong aria-hidden="true">22.</strong> Day-22_Marcio-Mellos-Challenge</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-04/Day-23_The-Dining_Philosophers/index.html"><strong aria-hidden="true">23.</strong> Day-23_The-Dining_Philosophers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-04/Day-24_The-Josephus-Problem/index.html"><strong aria-hidden="true">24.</strong> Day-24_The-Josephus-Problem</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-04/Day-25_Coin-Trouble/index.html"><strong aria-hidden="true">25.</strong> Day-25_Coin-Trouble</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-04/Day-26_Briefcase-Lock/index.html"><strong aria-hidden="true">26.</strong> Day-26_Briefcase-Lock</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-04/Day-27_Task-Scheduler/index.html"><strong aria-hidden="true">27.</strong> Day-27_Task-Scheduler</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-04/Day-28_Word-Search/index.html"><strong aria-hidden="true">28.</strong> Day-28_Word-Search</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-05/Day-29_Traffic-Light-Checker/index.html"><strong aria-hidden="true">29.</strong> Day-29_Traffic-Light-Checker</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-05/Day-30_The-Maximum-Value/index.html"><strong aria-hidden="true">30.</strong> 최댓값</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-05/Day-31_The-Time-In-Words/index.html"><strong aria-hidden="true">31.</strong> 말로 표현한 시간</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-05/Day-32_Climbing-The-Leaderboard/index.html"><strong aria-hidden="true">32.</strong> 리더보드 오르기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-05/Day-33_WERTYU/index.html"><strong aria-hidden="true">33.</strong> WERTYU</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-05/Day-34_Primary-Arithmetic/index.html"><strong aria-hidden="true">34.</strong> 초등 산수</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-05/Day-35_Dog-And-Gopher/index.html"><strong aria-hidden="true">35.</strong> 개와 땅다람쥐</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-06/Day-36_LCD-Display/index.html"><strong aria-hidden="true">36.</strong> LCD 디스플레이</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-06/Day-37_Breaking-The-Records/index.html"><strong aria-hidden="true">37.</strong> 기록 깨기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-06/Day-38_Electronics-Shop/index.html"><strong aria-hidden="true">38.</strong> 전자제품 매장</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-06/Day-39_Halloween-Sale/index.html"><strong aria-hidden="true">39.</strong> 할로윈 세일</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-06/Day-40_Larrys-Array/index.html"><strong aria-hidden="true">40.</strong> 래리의 배열</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-06/Day-41_Sales-By-Match/index.html"><strong aria-hidden="true">41.</strong> 색상별 양말 판매량</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-06/Day-42_Drawing-Book/index.html"><strong aria-hidden="true">42.</strong> 그림책</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-07/Day-43_Area-Of-A-Triangle/index.html"><strong aria-hidden="true">43.</strong> 삼각형의 넓이</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-07/Day-44_Maximum-Edge-Of-A-Triangle/index.html"><strong aria-hidden="true">44.</strong> 삼각형의 최대 변</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-07/Day-45_Subtract-The-Swapped-Bits-Without-Temp-Storage/index.html"><strong aria-hidden="true">45.</strong> 임시 저장소 없이 바뀐 비트 빼기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-07/Day-46_Hot-Pics-Of-Danny-Devito/index.html"><strong aria-hidden="true">46.</strong> 대니 드비토의 핫한 사진들!</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-07/Day-47_Zip-It/index.html"><strong aria-hidden="true">47.</strong> 압축하세요!</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-07/Day-48_Christmas-Tree/index.html"><strong aria-hidden="true">48.</strong> 크리스마스 트리</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-07/Day-49_Swimming-Pool/index.html"><strong aria-hidden="true">49.</strong> 수영장</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-08/Day-50_Tic-Tac-Toe/index.html"><strong aria-hidden="true">50.</strong> 틱택토</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-08/Day-51_Asteroid-Collision/index.html"><strong aria-hidden="true">51.</strong> 소행성 충돌</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-08/Day-52_Switch-On-The-Gravity/index.html"><strong aria-hidden="true">52.</strong> 중력 켜기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-08/Day-53_Javelin-Parabolic-Throw/index.html"><strong aria-hidden="true">53.</strong> 창 던지기 포물선 운동</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-08/Day-54_RGB-To-Hex-Color-Converter/index.html"><strong aria-hidden="true">54.</strong> RGB에서 Hex 색상 변환기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-08/Day-55_Filter_Repeating-Character-Strings/index.html"><strong aria-hidden="true">55.</strong> 반복되는 문자열 필터링</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-08/Day-56_Convert-To-Hex/index.html"><strong aria-hidden="true">56.</strong> 16진수로 변환</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-09/Day-57_Magic-Sigil-Generator/index.html"><strong aria-hidden="true">57.</strong> 마법 인장 생성기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-09/Day-58_Create-A-Dice-Roller/index.html"><strong aria-hidden="true">58.</strong> 주사위 굴리기 만들기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-09/Day-59_Perfectly-Balanced/index.html"><strong aria-hidden="true">59.</strong> 완벽하게 균형 잡힌</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-09/Day-60_A-Game-Of-Thrones/index.html"><strong aria-hidden="true">60.</strong> 3의 게임</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-09/Day-61_Write-A-Web-Crawler/index.html"><strong aria-hidden="true">61.</strong> 웹 크롤러 작성</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-09/Day-62_Funny-Plant/index.html"><strong aria-hidden="true">62.</strong> 재미있는 식물</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-09/Day-63_The-Rabbit-Problem/index.html"><strong aria-hidden="true">63.</strong> 토끼 문제</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-10/Day-64_First-Recurring-Character/index.html"><strong aria-hidden="true">64.</strong> 첫 번째 반복 문자</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-10/Day-65_ISBN-Validator/index.html"><strong aria-hidden="true">65.</strong> ISBN 유효성 검사기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-10/Day-66_ISBN-Generator/index.html"><strong aria-hidden="true">66.</strong> ISBN 생성기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-10/Day-67_Color-Maze/index.html"><strong aria-hidden="true">67.</strong> 색깔 미로</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-10/Day-68_Clarence-The-Slow-Typist/index.html"><strong aria-hidden="true">68.</strong> 느린 타이피스트 클래런스</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-10/Day-69-Garage-Door-Opener/index.html"><strong aria-hidden="true">69.</strong> 차고 문 개폐기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-10/Day-70_Broken-Keyboard/index.html"><strong aria-hidden="true">70.</strong> 고장난 키보드</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-11/Day-71_How-Long-Has-The-Light-Been-On/index.html"><strong aria-hidden="true">71.</strong> 불이 켜진 지 얼마나 되었나요?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-11/Day-72_L33tSpeak-Convertor/index.html"><strong aria-hidden="true">72.</strong> L33tspeak 변환기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-11/Day-73_L337Speak-Generator/index.html"><strong aria-hidden="true">73.</strong> L33tspeak 번역기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-11/Day-74_CATTLEMETER/index.html"><strong aria-hidden="true">74.</strong> Day-74_CATTLEMETER</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-11/Day-75_Minesweeper/index.html"><strong aria-hidden="true">75.</strong> Day-75_Minesweeper</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-11/Day-76_The-Cake-Thief/index.html"><strong aria-hidden="true">76.</strong> 555 반환 (중간 종류 케이크 6개와 마지막 종류 케이크 1개)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-11/Day-77_Bot-Saves-Princess/index.html"><strong aria-hidden="true">77.</strong> Day-77_Bot-Saves-Princess</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-12/Day-78_A-Number-Without-Numbers/index.html"><strong aria-hidden="true">78.</strong> Day-78_A-Number-Without-Numbers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-12/Day-79_Analog-Clock/index.html"><strong aria-hidden="true">79.</strong> Day-79_Analog-Clock</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-12/Day-80_Make-It-Look-Like-You-Are-Working/index.html"><strong aria-hidden="true">80.</strong> Day-80_Make-It-Look-Like-You-Are-Working</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-12/Day-81_Draw-The-G-Logo/index.html"><strong aria-hidden="true">81.</strong> Day-81_Draw-The-G-Logo</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-12/Day-82_Tidy-Numbers/index.html"><strong aria-hidden="true">82.</strong> Day-82_Tidy-Numbers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-12/Day-83_Bathroom-Stalls/index.html"><strong aria-hidden="true">83.</strong> Day-83_Bathroom-Stalls</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-12/Day-84-Vestigium/index.html"><strong aria-hidden="true">84.</strong> Day-84-Vestigium</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-13/Day-85_TCP-IP-Client-And-Server/index.html"><strong aria-hidden="true">85.</strong> Day-85_TCP-IP-Client-And-Server</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-13/Day-86_Way-Too-Long-Words/index.html"><strong aria-hidden="true">86.</strong> Day-86_Way-Too-Long-Words</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-13/Day-87_Hulk/index.html"><strong aria-hidden="true">87.</strong> Day-87_Hulk</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-13/Day-88_Hit-The-Lottery/index.html"><strong aria-hidden="true">88.</strong> Day-88_Hit-The-Lottery</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-13/Day-89_Minutes_Before_The_New_Year/index.html"><strong aria-hidden="true">89.</strong> Day-89_Minutes_Before_The_New_Year</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-13/Day-90_Radio-Station/index.html"><strong aria-hidden="true">90.</strong> Day-90_Radio-Station</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-13/Day-91_Cyberpunk-2078/index.html"><strong aria-hidden="true">91.</strong> Day-91_Cyberpunk-2078</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-14/Day-92_New-Years-Candles/index.html"><strong aria-hidden="true">92.</strong> Day-92_New-Years-Candles</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-14/Day-93_Dreamoon-And-Stairs/index.html"><strong aria-hidden="true">93.</strong> Day-93_Dreamoon-And-Stairs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-14/Day-94_Superhero-Transformation/index.html"><strong aria-hidden="true">94.</strong> Day-94_Superhero-Transformation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-14/Day-95_Free-Crash/index.html"><strong aria-hidden="true">95.</strong> Day-95_Free-Crash</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-14/Day-96_Beautiful-Paintings/index.html"><strong aria-hidden="true">96.</strong> Day-96_Beautiful-Paintings</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-14/Day-97_Elephant/index.html"><strong aria-hidden="true">97.</strong> Day-97_Elephant</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-14/Day-98_Geography-Of-Brazil/index.html"><strong aria-hidden="true">98.</strong> Day-98_Geography-Of-Brazil</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-15/Day-100_Final-Hello-World/index.html"><strong aria-hidden="true">99.</strong> Day-100_Final-Hello-World</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="../Week-15/Day-99_How-Is-The-Weather/index.html"><strong aria-hidden="true">100.</strong> Day-99_How-Is-The-Weather</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

