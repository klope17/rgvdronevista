'use strict';

const i18n = {
  en: {
    nav_call: '(956) 332-3659',
    hero_h1: 'See every stressed zone in your field before it costs you.',
    hero_sub: 'Multispectral NDVI drone scans for South Texas farmers. Color map and PDF report in 48 hours. Starting at $7/acre, no contracts.',
    hero_phone: 'Call or text: (956) 332-3659',
    form_heading: 'Get a Free Quote',
    form_name: 'Full Name',
    form_name_ph: 'John Doe',
    form_phone: 'Phone Number',
    form_acres: 'Total Acres',
    form_acres_ph: '150',
    form_crop: 'Crop Type',
    form_crop_default: 'Select crop type',
    form_crop_dry: 'Dryland row crops',
    form_crop_irr: 'Irrigated crops',
    form_crop_pas: 'Pasture / rangeland',
    form_crop_other: 'Other',
    form_time: 'Best time to call',
    form_time_default: 'Select a time',
    form_time_am: 'Morning (7am to noon)',
    form_time_pm: 'Afternoon (noon to 5pm)',
    form_time_eve: 'Evening (5pm to 8pm)',
    form_time_any: 'Anytime',
    form_submit: 'Get My Free Quote',
    form_success: 'We got your request. You will hear from us within one business day.',
    form_error: 'Something went wrong. Please call us at (956) 332-3659.',
    form_required_error: 'Please fill in your name, phone number, and total acres before submitting.',
    compare_before: 'Before',
    compare_after: 'After',
    steps_h2: 'How it works',
    step1: 'You tell us your field location and acreage. We schedule a flight around the weather and your timeline.',
    step2: 'We fly your field with our DJI Mavic 3 Multispectral and RTK module. The whole scan takes about an hour per 100 acres.',
    step3: 'You get a color NDVI map, a shapefile, and an annotated PDF report within 48 hours. That is it.',
    deliv_h2: 'What You Get',
    deliv_value: 'Catching a pest outbreak or disease pressure two to three weeks early can save thousands of dollars in a single season. Farmers who scan get higher yields by treating only the zones that actually need it.',
    deliv1: 'Color NDVI map showing healthy, stressed, and dry zones',
    deliv2: 'Shapefile for use in precision ag software',
    deliv3: 'Annotated PDF report with zone-by-zone notes',
    deliv4: 'Third-party documentation for crop insurance claims',
    deliv5: 'FAA Part 107 certified flight log on request',
    price_h2: 'Pricing',
    price1: 'No contracts',
    price2: 'No hidden fees',
    price3: 'Delivered in 48 hours',
    price4: 'One price, all crops',
    price_note: 'Starting at $7/acre · No contracts · 48 hours',
    faq_h2: 'Common questions',
    q1: 'What is NDVI drone scanning?',
    a1: 'NDVI stands for Normalized Difference Vegetation Index. Our drone captures light your eye cannot see and turns it into a color map of your field. Green zones are healthy. Yellow and red zones are stressed, dry, or diseased. Catching a problem two to three weeks early can save thousands of dollars in a single season.',
    q2: 'How much does it cost?',
    a2: 'We charge starting at $7 per acre. No contracts, no hidden fees. Most fields in the Rio Grande Valley come out between $150 and $700 for a single scan.',
    q3: 'How fast do I get my results?',
    a3: 'We deliver your color NDVI map and PDF report within 48 hours of the flight. Most jobs are done faster than that.',
    q4: 'Will my crop insurance adjuster accept this?',
    a4: 'Yes. Our reports come from a third-party FAA Part 107 licensed operator using calibrated multispectral sensors. The NDVI data and georeferenced maps are in the standard formats adjusters use for crop loss claims.',
    q5: 'Do I need to be there when you fly?',
    a5: 'No. We just need the field location, your contact info, and permission to fly. We take care of everything and send your report when it is done.',
    q6: 'What crops do you scan?',
    a6: 'We scan dryland row crops, irrigated fields, and pasture or rangeland. Sorghum, cotton, small grains, onions, sugarcane, native pasture. If it grows in South Texas, we can scan it.',
    trust_text: 'FAA Part 107 Licensed · DJI Mavic 3 Multispectral · RTK Accuracy 2 to 5 cm · Rio Grande Valley, TX',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_blog: 'Blog',
  },
  es: {
    nav_call: '(956) 332-3659',
    hero_h1: 'Vea cada zona afectada en su campo antes de que le cueste.',
    hero_sub: 'Escaneos de drones multiespectrales para agricultores del sur de Texas. Mapa a color y reporte PDF en 48 horas. Desde $7/acre, sin contratos.',
    hero_phone: 'Llame o mande texto: (956) 332-3659',
    form_heading: 'Solicitar Cotización Gratis',
    form_name: 'Nombre completo',
    form_name_ph: 'Juan González',
    form_phone: 'Número de teléfono',
    form_acres: 'Total de acres',
    form_acres_ph: '150',
    form_crop: 'Tipo de cultivo',
    form_crop_default: 'Seleccione tipo de cultivo',
    form_crop_dry: 'Cultivos de temporal',
    form_crop_irr: 'Cultivos irrigados',
    form_crop_pas: 'Potrero / pastizal',
    form_crop_other: 'Otro',
    form_time: 'Mejor hora para llamar',
    form_time_default: 'Seleccione una hora',
    form_time_am: 'Mañana (7am a mediodía)',
    form_time_pm: 'Tarde (mediodía a 5pm)',
    form_time_eve: 'Noche (5pm a 8pm)',
    form_time_any: 'Cualquier hora',
    form_submit: 'Solicitar Cotización Gratis',
    form_success: 'Recibimos su solicitud. Le contactaremos dentro de un día hábil.',
    form_error: 'Algo salió mal. Por favor llámenos al (956) 332-3659.',
    form_required_error: 'Por favor complete nombre, teléfono y acres antes de enviar.',
    compare_before: 'Antes',
    compare_after: 'Después',
    steps_h2: 'Cómo funciona',
    step1: 'Nos dice la ubicación y los acres de su campo. Programamos el vuelo según el clima y su horario.',
    step2: 'Volamos su campo con nuestro DJI Mavic 3 Multiespectral y módulo RTK. El escaneo tarda alrededor de una hora por cada 100 acres.',
    step3: 'Recibe un mapa NDVI a color, un shapefile y un reporte PDF anotado dentro de 48 horas.',
    deliv_h2: 'Lo Que Recibe',
    deliv_value: 'Detectar un brote de plagas o fallas de riego dos o tres semanas antes puede ahorrar miles de dólares en una sola temporada. Los agricultores que escanean obtienen mejores rendimientos al tratar solo las zonas que realmente lo necesitan.',
    deliv1: 'Mapa NDVI a color mostrando zonas sanas, estresadas y secas',
    deliv2: 'Shapefile para uso en software de agricultura de precisión',
    deliv3: 'Reporte PDF anotado con notas por zona',
    deliv4: 'Documentación de terceros para reclamaciones de seguro de cultivo',
    deliv5: 'Registro de vuelo certificado FAA Part 107 a solicitud',
    price_h2: 'Precios',
    price1: 'Sin contratos',
    price2: 'Sin costos ocultos',
    price3: 'Entregado en 48 horas',
    price4: 'Un precio, todos los cultivos',
    price_note: 'Desde $7/acre · Sin contratos · 48 horas',
    faq_h2: 'Preguntas frecuentes',
    q1: '¿Qué es el escaneo NDVI con dron?',
    a1: 'NDVI significa Índice de Vegetación de Diferencia Normalizada. Nuestro dron captura luz que el ojo no puede ver y la convierte en un mapa a color de su campo. Las zonas verdes están sanas. Las zonas amarillas y rojas tienen estrés, sequía o enfermedad. Detectar un problema dos o tres semanas antes puede ahorrar miles de dólares en una sola temporada.',
    q2: '¿Cuánto cuesta?',
    a2: 'Cobramos desde $7 por acre. Sin contratos, sin costos ocultos. La mayoría de los campos en el Valle del Río Grande resultan entre $150 y $700 por un escaneo.',
    q3: '¿Qué tan rápido recibo mis resultados?',
    a3: 'Entregamos su mapa NDVI a color y reporte PDF dentro de 48 horas del vuelo. La mayoría de los trabajos se terminan antes.',
    q4: '¿Mi ajustador de seguro de cultivo aceptará esto?',
    a4: 'Sí. Nuestros reportes los produce un operador de drones de terceros con licencia FAA Part 107 usando sensores multiespectrales calibrados. Los datos NDVI y los mapas georreferenciados están en los formatos estándar que usan los ajustadores para evaluar reclamaciones.',
    q5: '¿Necesito estar presente cuando vuelen?',
    a5: 'No. Solo necesitamos la ubicación del campo, su información de contacto y permiso para volar. Nos encargamos de todo y le enviamos el reporte cuando esté listo.',
    q6: '¿Qué cultivos escanean?',
    a6: 'Escaneamos cultivos de temporal, campos irrigados y potreros o pastizales. Sorgo, algodón, granos, cebollas, caña de azúcar, pasto nativo. Si crece en el sur de Texas, lo podemos escanear.',
    trust_text: 'Licencia FAA Part 107 · DJI Mavic 3 Multiespectral · Precisión RTK 2 a 5 cm · Valle del Río Grande, TX',
    footer_privacy: 'Política de Privacidad',
    footer_terms: 'Términos de Servicio',
    footer_blog: 'Blog',
  }
};

// URL param ?lang=es or ?lang=en overrides device setting (for testing)
var urlLang = new URLSearchParams(window.location.search).get('lang');
var deviceLang = (navigator.language || navigator.userLanguage || '').startsWith('es') ? 'es' : 'en';
var lang = (urlLang === 'es' || urlLang === 'en') ? urlLang : deviceLang;

document.documentElement.lang = lang;

document.querySelectorAll('[data-i18n]').forEach(function(el) {
  var key = el.getAttribute('data-i18n');
  if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
});

document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
  var key = el.getAttribute('data-i18n-placeholder');
  if (i18n[lang][key] !== undefined) el.placeholder = i18n[lang][key];
});

// Phone number auto-format: (XXX) XXX-XXXX
var phoneInput = document.getElementById('f-phone');
if (phoneInput) {
  phoneInput.addEventListener('input', function() {
    var digits = this.value.replace(/\D/g, '').slice(0, 10);
    var formatted = '';
    if (digits.length === 0) {
      formatted = '';
    } else if (digits.length <= 3) {
      formatted = '(' + digits;
    } else if (digits.length <= 6) {
      formatted = '(' + digits.slice(0, 3) + ') ' + digits.slice(3);
    } else {
      formatted = '(' + digits.slice(0, 3) + ') ' + digits.slice(3, 6) + '-' + digits.slice(6);
    }
    this.value = formatted;
  });
}

function markFieldError(el, invalid) {
  if (invalid) {
    el.classList.add('field-error');
  } else {
    el.classList.remove('field-error');
  }
}

// Form submission with required field validation
var form = document.getElementById('quoteForm');
if (form) {
  var nameEl  = document.getElementById('f-name');
  var phoneEl = document.getElementById('f-phone');
  var acresEl = document.getElementById('f-acres');

  [nameEl, phoneEl, acresEl].forEach(function(el) {
    el.addEventListener('input', function() { markFieldError(el, false); });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var btn = document.getElementById('submitBtn');
    var msg = document.getElementById('formMsg');

    var nameInvalid  = !nameEl.value.trim();
    var phoneInvalid = phoneEl.value.replace(/\D/g, '').length < 10;
    var acresInvalid = !acresEl.value || parseInt(acresEl.value, 10) < 1;

    markFieldError(nameEl,  nameInvalid);
    markFieldError(phoneEl, phoneInvalid);
    markFieldError(acresEl, acresInvalid);

    if (nameInvalid || phoneInvalid || acresInvalid) {
      var missing = [];
      if (nameInvalid)  missing.push(i18n[lang].form_name);
      if (phoneInvalid) missing.push(i18n[lang].form_phone);
      if (acresInvalid) missing.push(i18n[lang].form_acres);
      msg.className = 'form-msg error';
      msg.textContent = (lang === 'es'
        ? 'Por favor complete: '
        : 'Please fill in: ') + missing.join(', ');
      return;
    }

    btn.disabled = true;
    msg.className = 'form-msg';
    msg.textContent = '';

    fetch('https://formspree.io/f/xwvdvzne', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function(res) {
      if (res.ok) {
        msg.className = 'form-msg success';
        msg.textContent = i18n[lang].form_success;
        form.reset();
      } else {
        throw new Error('server');
      }
    }).catch(function() {
      msg.className = 'form-msg error';
      msg.textContent = i18n[lang].form_error;
    }).finally(function() {
      btn.disabled = false;
    });
  });
}

// Before/After comparison slider
var slider = document.getElementById('compareSlider');
if (slider) {
  var beforeImg = slider.querySelector('.compare-before');
  var handle = document.getElementById('compareHandle');
  var active = false;

  function moveSlider(clientX) {
    var rect = slider.getBoundingClientRect();
    var pct = (clientX - rect.left) / rect.width;
    pct = Math.max(0.02, Math.min(0.98, pct));
    beforeImg.style.clipPath = 'inset(0 ' + ((1 - pct) * 100).toFixed(2) + '% 0 0)';
    handle.style.left = (pct * 100).toFixed(2) + '%';
  }

  slider.addEventListener('mousedown', function(e) {
    e.preventDefault();
    active = true;
    moveSlider(e.clientX);
  });

  document.addEventListener('mousemove', function(e) {
    if (active) moveSlider(e.clientX);
  });

  document.addEventListener('mouseup', function() {
    active = false;
  });

  slider.addEventListener('touchstart', function(e) {
    active = true;
    moveSlider(e.touches[0].clientX);
  }, { passive: true });

  slider.addEventListener('touchmove', function(e) {
    if (active) moveSlider(e.touches[0].clientX);
  }, { passive: true });

  slider.addEventListener('touchend', function() { active = false; });
  document.addEventListener('touchcancel', function() { active = false; });
}
