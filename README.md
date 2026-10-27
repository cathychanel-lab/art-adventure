# 아트 어드벤처 (미술사 교육 웹사이트)

코딩을 몰라도 따라 할 수 있도록 단계별로 정리했어요.

## 1. 내 컴퓨터에서 먼저 보기

1. ZIP 파일을 다운로드한 뒤 **압축을 풀어요.**
2. 폴더 안의 `index.html`을 **더블클릭**하세요. 브라우저에서 사이트가 열려요.

## 2. GitHub Pages로 인터넷에 올리기

### 준비
1. https://github.com 에서 무료 계정을 만들어요. (이미 있으면 로그인)

### 저장소(Repository) 만들기
2. 오른쪽 위 **+** 버튼 → **New repository**를 눌러요.
3. Repository name에 `art-adventure`라고 적어요.
4. **Public**을 선택하고 **Create repository**를 눌러요.

### 파일 올리기
5. 새로 열린 화면에서 **uploading an existing file** 링크를 눌러요.
6. 압축을 푼 폴더 **안쪽의 내용물 전체**(`index.html`, `css`, `js`, `images`, `games` 폴더 등)를 브라우저 창으로 끌어다 놓아요.
   - 폴더 자체가 아니라 폴더 **안에 있는 것들**을 올려야 해요.
   - `.nojekyll` 파일은 숨김 파일이라 안 보일 수 있어요. 없어도 사이트는 잘 작동해요.
7. 업로드가 끝나면 아래의 **Commit changes** 버튼을 눌러요.

### 사이트 공개하기
8. 저장소 위쪽 메뉴에서 **Settings** → 왼쪽 **Pages**를 눌러요.
9. **Build and deployment**의 Source를 **Deploy from a branch**로 두고, Branch를 **main**, 폴더를 **/ (root)** 로 고른 뒤 **Save**를 눌러요.
10. 1~3분 기다린 뒤 이 페이지를 새로고침하면 위쪽에 사이트 주소가 나타나요.
    - 주소 형태: `https://내아이디.github.io/art-adventure/`

## 3. 자주 하는 수정 (모두 `js/games.js` 파일 하나에서 해요)

GitHub에서 `js` 폴더 → `games.js` → 연필 아이콘(Edit)을 누르면 바로 고칠 수 있어요. 고친 뒤 **Commit changes**를 누르면 1~2분 안에 사이트에 반영돼요.

### 사이트 이름 바꾸기
`window.SITE_NAME = '아트 어드벤처';` 에서 따옴표 안의 글자만 바꿔요.

### 게임 설명 바꾸기
해당 게임 블록의 `title`(이름), `summary`(설명) 글자만 바꿔요.

### 게임이 완성됐을 때
해당 게임 블록의 `status: 'soon'` 을 `status: 'ready'` 로 바꾸면 "준비 중" 표시가 사라져요.

## 4. 새 게임 추가하기

1. `games/_template.html` 을 복사해서 `games/새게임이름/index.html` 로 저장해요. (예: `games/color-lab/index.html`)
   - 복사한 파일에서 `GAME_ID` 라는 글자를 새 게임 이름(`color-lab`)으로 바꿔요.
2. `images` 폴더에 대표 이미지를 넣어요. (세로로 긴 4:5 비율 추천)
3. `js/games.js` 의 목록 맨 끝에 아래 블록을 추가해요. 앞 블록 끝에 쉼표(`,`)를 잊지 마세요.

```js
  {
    id: 'color-lab',
    title: '색채 실험실',
    summary: '물감을 섞어 새로운 색을 만들어 봐요.',
    image: 'images/color-lab.svg',
    url: 'games/color-lab/index.html',
    accent: '#1F7A62',
    status: 'soon'
  }
```

메인 화면에 카드가 자동으로 생기고, 줄이 바뀌어도 가운데로 정렬돼요.

## 폴더 구조

```
art-adventure/
├─ index.html          메인 화면
├─ css/style.css       디자인
├─ js/
│  ├─ games.js         게임 목록 (가장 자주 고치는 파일)
│  ├─ main.js          메인 화면에 카드를 만드는 코드
│  └─ game-page.js     각 게임 페이지 공통 코드
├─ images/             대표 이미지와 아이콘
└─ games/
   ├─ _template.html   새 게임 페이지 틀
   ├─ borumarble/      미술사 부루마불
   ├─ escape-room/     미술사 방탈출
   ├─ art-detective/   명화 탐정
   ├─ artist-explorer/ 미술가와 작품 탐험
   └─ art-quiz/        미술사 퀴즈
```
