/* 메인 화면: games.js의 목록을 읽어 전시 카드를 만들어요. */
(function () {
  'use strict';

  var list = document.getElementById('gallery-list');
  var games = window.GAMES || [];

  // 사이트 이름 반영
  var name = window.SITE_NAME || '아트 어드벤처';
  document.title = name + ' | 미술사 온라인 미술관';
  var nameEls = document.querySelectorAll('[data-site-name]');
  for (var i = 0; i < nameEls.length; i++) {
    nameEls[i].textContent = name;
  }

  if (!list) return;

  if (games.length === 0) {
    list.innerHTML = '<p class="empty">아직 전시 중인 게임이 없어요. js/games.js에 게임을 추가해 보세요.</p>';
    return;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  games.forEach(function (game) {
    var card = el('article', 'exhibit');
    card.style.setProperty('--accent', game.accent || '#2D3FA0');

    // 액자 (이미지를 누르면 게임으로 이동)
    var frameLink = el('a', 'frame');
    frameLink.href = game.url;
    frameLink.tabIndex = -1;
    frameLink.setAttribute('aria-hidden', 'true');
    var mat = el('div', 'mat');
    var img = document.createElement('img');
    img.src = game.image;
    img.alt = '';
    img.width = 400;
    img.height = 500;
    img.loading = 'lazy';
    mat.appendChild(img);
    frameLink.appendChild(mat);

    // 작품 설명 카드
    var placard = el('div', 'placard');
    var title = el('h3', 'placard-title', game.title);
    var summary = el('p', 'placard-text', game.summary);
    var foot = el('div', 'placard-foot');
    var button = el('a', 'btn', '시작하기');
    button.href = game.url;
    button.setAttribute('aria-label', game.title + ' 시작하기');
    foot.appendChild(button);
    if (game.status === 'soon') {
      foot.appendChild(el('span', 'badge', '준비 중'));
    }

    placard.appendChild(title);
    placard.appendChild(summary);
    placard.appendChild(foot);

    card.appendChild(frameLink);
    card.appendChild(placard);
    list.appendChild(card);
  });
})();
