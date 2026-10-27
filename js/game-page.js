/* 각 게임 페이지(games/폴더/index.html)에서 쓰는 공통 스크립트.
   games.js에서 현재 게임 정보를 찾아 제목과 이미지를 채워요. */
(function () {
  'use strict';

  var id = document.body.getAttribute('data-game');
  var games = window.GAMES || [];
  var game = null;
  for (var i = 0; i < games.length; i++) {
    if (games[i].id === id) { game = games[i]; break; }
  }

  var name = window.SITE_NAME || '아트 어드벤처';
  var nameEls = document.querySelectorAll('[data-site-name]');
  for (var j = 0; j < nameEls.length; j++) nameEls[j].textContent = name;

  if (!game) return;

  document.title = game.title + ' | ' + name;
  var title = document.getElementById('game-title');
  var summary = document.getElementById('game-summary');
  var img = document.getElementById('game-image');
  if (title) title.textContent = game.title;
  if (summary) summary.textContent = game.summary;
  if (img) img.src = '../../' + game.image;
  document.body.style.setProperty('--accent', game.accent || '#2D3FA0');
})();
