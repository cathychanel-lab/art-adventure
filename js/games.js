/* ==========================================================
   게임 목록 (여기만 고치면 메인 화면이 자동으로 바뀌어요)
   ----------------------------------------------------------
   새 게임을 추가하려면 아래 목록 맨 끝에 { ... } 블록 하나를
   복사해서 붙여 넣고 내용만 바꾸세요. (README.md 참고)

   id      : 영문 소문자와 하이픈(-)만 사용. 게임 폴더 이름과 같아야 해요.
   title   : 게임 이름
   summary : 짧은 설명 (한두 문장)
   image   : 대표 이미지 파일 경로
   url     : 시작하기를 누르면 이동할 주소
   accent  : 카드에 쓸 포인트 색 (#으로 시작하는 색 코드)
   status  : 'soon' = 준비 중, 'ready' = 플레이 가능
   ========================================================== */

window.SITE_NAME = '아트 어드벤처';

window.GAMES = [
  {
    id: 'borumarble',
    title: '미술사 부루마불',
    summary: '주사위를 굴려 시대별 미술 도시를 여행해요. 도착한 곳에서 만난 화가와 작품을 내 것으로 모아 보세요.',
    image: 'images/borumarble.svg',
    url: 'games/borumarble/index.html',
    accent: '#E8B23A',
    status: 'soon'
  },
  {
    id: 'escape-room',
    title: '미술사 방탈출',
    summary: '잠긴 전시실에서 나가려면 단서를 찾아야 해요. 미술 지식으로 암호를 풀고 문을 열어 보세요.',
    image: 'images/escape-room.svg',
    url: 'games/escape-room/index.html',
    accent: '#1F7A62',
    status: 'soon'
  },
  {
    id: 'art-detective',
    title: '명화 탐정',
    summary: '그림 속에 숨은 단서를 돋보기로 찾아요. 시대와 화풍을 추리해서 작품의 정체를 밝혀내 보세요.',
    image: 'images/art-detective.svg',
    url: 'games/art-detective/index.html',
    accent: '#D9432B',
    status: 'soon'
  },
  {
    id: 'artist-explorer',
    title: '미술가와 작품 탐험',
    summary: '화가의 삶과 대표작을 따라 걸어요. 시대의 흐름 속에서 작품이 어떻게 태어났는지 살펴봐요.',
    image: 'images/artist-explorer.svg',
    url: 'games/artist-explorer/index.html',
    accent: '#2D3FA0',
    status: 'soon'
  },
  {
    id: 'art-quiz',
    title: '미술사 퀴즈',
    summary: '배운 내용을 퀴즈로 확인해요. 문제를 풀수록 미술사가 더 또렷하게 기억나요.',
    image: 'images/art-quiz.svg',
    url: 'games/art-quiz/index.html',
    accent: '#B8456B',
    status: 'soon'
  }
];
