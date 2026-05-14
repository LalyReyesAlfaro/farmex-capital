export const html = `
<div class="lp-wrap">

  <!-- ── LADO DERECHO: Landing Farmex Capital ── -->
  <div class="lp-landing">

    <!-- Navbar interno -->
    <div class="lp-nav">
      <div class="lp-nav-brand">
        <div class="lp-nav-ico">FC</div>
        <div>
          <div class="lp-nav-name">FARMEX CAPITAL</div>
          <div class="lp-nav-sub">El Portal de Productores · Perú</div>
        </div>
      </div>
      <button class="lp-nav-cta" onclick="document.getElementById('lp-auth').scrollIntoView({behavior:'smooth'})">
        Ingresar al portal →
      </button>
    </div>

    <!-- Hero -->
    <div class="lp-hero">
      <div class="lp-hero-bg"></div>
      <div class="lp-hero-grid"></div>
      <div class="lp-hero-inner">
        <div class="lp-eyebrow"><span class="lp-pulse"></span>AgriFintech · Perú 2026</div>
        <h1 class="lp-h1">Convertimos ciclos <em>agrícolas</em><br>en flujo de caja predecible</h1>
        <p class="lp-sub">La infraestructura financiera especializada para pequeños y medianos agroexportadores de palta y arándano en la costa del Perú.</p>
        <div class="lp-chips">
          <span class="lp-chip">🥑 Palta Hass</span>
          <span class="lp-chip">🫐 Arándano</span>
          <span class="lp-chip">📍 5 regiones</span>
          <span class="lp-chip">⭐ Scoring IA</span>
        </div>
      </div>
      <div class="lp-hero-quote">
        <p>"No necesito un banco. Necesito un socio que entienda mi cultivo."</p>
        <cite>— Raúl, Productor · La Libertad</cite>
      </div>
    </div>

    <!-- Stats -->
    <div class="lp-stats">
      <div class="lp-stat"><div class="lps-v">35,000</div><div class="lps-l">Hectáreas TAM</div></div>
      <div class="lp-stat"><div class="lps-v">$357M</div><div class="lps-l">Mercado anual</div></div>
      <div class="lp-stat"><div class="lps-v">6</div><div class="lps-l">Productos por ciclo</div></div>
      <div class="lp-stat"><div class="lps-v">5</div><div class="lps-l">Regiones costeras</div></div>
    </div>

    <!-- Quiénes somos -->
    <div class="lp-section lp-sobre">
      <div class="lp-section-tag">Quiénes somos</div>
      <h2 class="lp-section-h2">La infraestructura financiera que el agroexportador peruano <em>nunca tuvo</em></h2>
      <p class="lp-section-p">Farmex Capital es la primera plataforma AgriFintech especializada en productores de palta y arándano. Combinamos financiamiento inteligente, data agrícola, scoring alternativo, asistencia técnica y marketplace en un solo lugar.</p>
      <div class="lp-mision">
        <div class="lp-mision-tag">🎯 Nuestra misión</div>
        <div class="lp-mision-txt">"Convertir ciclos agrícolas en flujo de caja predecible, siendo el habilitador financiero del pequeño y mediano agroexportador peruano."</div>
      </div>
    </div>

    <!-- Servicios -->
    <div class="lp-section">
      <div class="lp-section-tag">Nuestros servicios</div>
      <h2 class="lp-section-h2">Todo lo que necesitas para <em>crecer y exportar</em></h2>
      <div class="lp-srv-grid">
        <div class="lp-srv"><div class="lp-srv-ico">💰</div><div class="lp-srv-n">Financiamiento Agrícola</div><div class="lp-srv-d">Crédito por etapa productiva: fertilización, riego, postcosecha y exportación. Hasta S/ 25,000/ha.</div></div>
        <div class="lp-srv"><div class="lp-srv-ico">📡</div><div class="lp-srv-n">Data Agrícola & Clima</div><div class="lp-srv-d">Alertas climáticas por región para palta y arándano. Monitoreo satelital de tus hectáreas.</div></div>
        <div class="lp-srv"><div class="lp-srv-ico">⭐</div><div class="lp-srv-n">Scoring Alternativo IA</div><div class="lp-srv-d">Te evaluamos por tu tierra y campañas, no por tu historial bancario. Accede aunque Infocorp te diga no.</div></div>
        <div class="lp-srv"><div class="lp-srv-ico">👨‍🌾</div><div class="lp-srv-n">Asistencia Técnica</div><div class="lp-srv-d">Agrónomos certificados de Farmex Perú especializados en palta Hass y arándano en campo.</div></div>
        <div class="lp-srv"><div class="lp-srv-ico">🤝</div><div class="lp-srv-n">Marketplace & Exportación</div><div class="lp-srv-d">Conectamos tu producción con exportadores internacionales. Tu vitrina verificada con foto y certificaciones.</div></div>
        <div class="lp-srv"><div class="lp-srv-ico">🛡️</div><div class="lp-srv-n">Seguro Paramétrico</div><div class="lp-srv-d">Cobertura climática automática ante El Niño, lluvias y sequías. Pago en 72h sin trámites.</div></div>
      </div>
    </div>

    <!-- Para quién es -->
    <div class="lp-section lp-persona">
      <div class="lp-section-tag lp-tag-lt">¿Para quién es Farmex Capital?</div>
      <h2 class="lp-section-h2 lp-h2-lt">Productores que quieren <em>escalar</em></h2>
      <div class="lp-persona-grid">
        <div class="lp-persona-check">✓ Tienes 10–60 hectáreas propias de palta o arándano</div>
        <div class="lp-persona-check">✓ Ya produces comercialmente y quieres exportar</div>
        <div class="lp-persona-check">✓ Necesitas capital de trabajo en el momento correcto</div>
        <div class="lp-persona-check">✓ El banco no te entiende o te pide demasiados requisitos</div>
        <div class="lp-persona-check">✓ Quieres conectarte con compradores internacionales</div>
        <div class="lp-persona-check">✓ Buscas un socio que entienda tu cultivo y tu ciclo</div>
      </div>
      <div class="lp-regiones">
        <div class="lp-reg-tag">📍 Operamos en:</div>
        <div class="lp-reg-list">
          <span>La Libertad</span><span>Ica</span><span>Piura</span><span>Lambayeque</span><span>Ancash</span>
        </div>
      </div>
    </div>

    <!-- CTA unirse -->
    <div class="lp-cta-band" id="lp-auth-trigger">
      <h2>¿Listo para hacer crecer tu finca?</h2>
      <p>Únete al piloto 2026 · Solo productores con 10+ hectáreas de palta o arándano</p>
      <button class="lp-cta-btn" onclick="document.getElementById('lp-auth').scrollIntoView({behavior:'smooth'})">
        Crear mi cuenta o ingresar →
      </button>
    </div>

  </div>

  <!-- ── LADO DERECHO FIJO: Formulario de auth ── -->
  <div class="lp-auth-panel" id="lp-auth">
    <div class="lp-auth-inner">

      <div class="lp-auth-logo">
        <div class="lp-auth-ico">FC</div>
        <div>
          <div class="lp-auth-brand">FARMEX CAPITAL</div>
          <div class="lp-auth-sub">Portal del Productor</div>
        </div>
      </div>

      <div class="lp-tabs">
        <button class="ltab active" id="tab-login"    onclick="switchTab('login')">Ingresar</button>
        <button class="ltab"        id="tab-register" onclick="switchTab('register')">Registrarme</button>
      </div>

      <!-- LOGIN -->
      <div id="pane-login">
        <div class="lp-form">
          <div class="fg"><label class="fl">Correo electrónico</label><input class="fi" type="email" id="l-email" placeholder="correo@ejemplo.com"></div>
          <div class="fg"><label class="fl">Contraseña</label><input class="fi" type="password" id="l-pass" placeholder="••••••••"></div>
          <div class="login-error" id="l-error" style="display:none;"></div>
          <button class="lp-auth-btn" id="l-btn" onclick="doLogin()">Ingresar al portal →</button>
          <div class="lp-auth-note">¿No tienes cuenta? Haz click en <strong>Registrarme</strong></div>
        </div>
      </div>

      <!-- REGISTRO -->
      <div id="pane-register" style="display:none;">
        <div class="lp-form">
          <div class="fg"><label class="fl">Nombre completo</label><input class="fi" type="text" id="r-nombre" placeholder="Ej: Raúl García Mendoza"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div class="fg"><label class="fl">Región</label>
              <select class="fi" id="r-region">
                <option value="">Seleccionar...</option>
                <option>La Libertad</option><option>Ica</option>
                <option>Piura</option><option>Lambayeque</option><option>Ancash</option>
              </select>
            </div>
            <div class="fg"><label class="fl">Hectáreas</label><input class="fi" type="number" id="r-ha" placeholder="Ej: 25" min="1"></div>
          </div>
          <div class="fg"><label class="fl">Cultivo principal</label>
            <select class="fi" id="r-cultivo">
              <option value="">Seleccionar...</option>
              <option>Palta Hass</option><option>Arándano</option><option>Ambos</option>
            </select>
          </div>
          <div class="fg"><label class="fl">WhatsApp</label><input class="fi" type="text" id="r-wsp" placeholder="+51 999 999 999"></div>
          <div class="fg"><label class="fl">Correo electrónico</label><input class="fi" type="email" id="r-email" placeholder="correo@ejemplo.com"></div>
          <div class="fg"><label class="fl">Contraseña</label><input class="fi" type="password" id="r-pass" placeholder="Mínimo 6 caracteres"></div>
          <div class="login-error" id="r-error" style="display:none;"></div>
          <button class="lp-auth-btn" id="r-btn" onclick="doRegister()">Crear mi cuenta →</button>
        </div>
      </div>

    </div>
  </div>

</div>
`;

export function init() {
  window.switchTab = (tab) => {
    document.getElementById('pane-login').style.display    = tab === 'login'    ? 'block' : 'none';
    document.getElementById('pane-register').style.display = tab === 'register' ? 'block' : 'none';
    document.getElementById('tab-login').classList.toggle('active',    tab === 'login');
    document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  };

  window.doLogin = async () => {
    const email = document.getElementById('l-email').value.trim();
    const pass  = document.getElementById('l-pass').value;
    const btn   = document.getElementById('l-btn');
    const err   = document.getElementById('l-error');
    if (!email || !pass) { showErr(err, 'Completa todos los campos.'); return; }
    btn.textContent = 'Ingresando...'; btn.disabled = true;
    const data = await window.fbAuth.login(email, pass);
    if (data.access_token) {
      if (data.user.id !== 'demo') {
        const rows = await window.fbDb.query('productores', { filters: [`user_id=eq.${data.user.id}`] }).catch(() => []);
        if (rows?.length) window._productor = rows[0];
      }
      window.goScreen('dashboard');
    } else {
      showErr(err, data.error || 'Email o contraseña incorrectos.');
      btn.textContent = 'Ingresar al portal →'; btn.disabled = false;
    }
  };

  window.doRegister = async () => {
    const nombre  = document.getElementById('r-nombre').value.trim();
    const region  = document.getElementById('r-region').value;
    const ha      = parseFloat(document.getElementById('r-ha').value);
    const cultivo = document.getElementById('r-cultivo').value;
    const wsp     = document.getElementById('r-wsp').value.trim();
    const email   = document.getElementById('r-email').value.trim();
    const pass    = document.getElementById('r-pass').value;
    const btn     = document.getElementById('r-btn');
    const err     = document.getElementById('r-error');
    if (!nombre || !region || !ha || !cultivo || !email || !pass) { showErr(err, 'Completa todos los campos.'); return; }
    if (pass.length < 6) { showErr(err, 'La contraseña debe tener al menos 6 caracteres.'); return; }
    btn.textContent = 'Creando cuenta...'; btn.disabled = true;
    const data = await window.fbAuth.register(email, pass, { nombre, region });
    if (data.access_token || data.user) {
      const productor = { user_id: data.user?.id || 'demo', nombre, region, total_ha: ha, cultivo, whatsapp: wsp, email };
      if (data.user?.id !== 'demo') {
        await window.fbDb.insert('productores', productor).catch(() => {});
      }
      window._productor = productor;
      window.goScreen('dashboard');
    } else {
      showErr(err, data.error || 'Error al crear la cuenta.');
      btn.textContent = 'Crear mi cuenta →'; btn.disabled = false;
    }
  };
}

function showErr(el, msg) {
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 4000);
}
