const root = document.getElementById('root');

if (root) {
  root.innerHTML = `
    <main class="shell">
      <div class="badge">Kod Sohbet</div>
      <h1>
        Güvenli <span class="accent">kod sohbeti</span><br />
        anonim, hızlı ve odaklı.
      </h1>
      <p class="subtitle">
        Kod Sohbet, kayıtsız, anonim ve şifreli sohbet odaları sunar. Takım arkadaşlarınla aynı ekranda
        bir araya gel, canlı tartış, yorum yap ve birlikte kodu izlemeye başla.
      </p>
      <div class="cta-row">
        <button class="button primary" type="button">Odaya Katıl</button>
        <button class="button secondary" type="button">Daha Fazla Bilgi</button>
      </div>
      <div class="stats">
        <div class="stat">
          <strong>∞</strong>
          <span>Anonim odalar</span>
        </div>
        <div class="stat">
          <strong>1s</strong>
          <span>Hızlı başlatma</span>
        </div>
        <div class="stat">
          <strong>256</strong>
          <span>Şifreli oturum</span>
        </div>
      </div>
    </main>
  `;
}
