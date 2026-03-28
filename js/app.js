// ── Seed Data ──────────────────────────────────────────
const SEED_ORDERS = [
  {
    id: 'lcsc-wm2603270403',
    name: 'LCSC WM2603270403 — ESP32-P4 Main Board',
    supplier: 'LCSC',
    date: '2026-03-27',
    status: 'ordered',
    notes: 'Main board components for ESP32-P4 design',
    createdAt: '2026-03-27T07:16:52Z',
    parts: [
      { partNumber: 'C102685', description: '100kΩ ±1% 50mW 0201 Thick Film Resistor (RTT011003FTH, RALEC)', qty: 100, unitPrice: 0.0007, designator: '', package: '0201' },
      { partNumber: 'C5444549', description: 'Crystal 40MHz ±10ppm 15pF SMD3225-4P (XL2EL89CPI-111YLC-40M, YXC)', qty: 10, unitPrice: 0.0659, designator: '', package: 'SMD3225-4P' },
      { partNumber: 'C52766457', description: 'SMD USB-C Connector 16PIN (MLD-TYPE-C-3.1-16PIN-L7.35, Minlenda)', qty: 20, unitPrice: 0.0448, designator: '', package: 'SMD' },
      { partNumber: 'C48533039', description: '1.2V LDO 300mA DFN-4L (DS8571-12D4, DSTECH)', qty: 20, unitPrice: 0.0317, designator: '', package: 'DFN-4L-EP(1x1)' },
      { partNumber: 'C48533043', description: '3.3V LDO 300mA DFN-4L (DS8571-33D4, DSTECH)', qty: 20, unitPrice: 0.0317, designator: '', package: 'DFN-4L-EP(1x1)' },
      { partNumber: 'C570857', description: 'Power Management WQFN-20 (EA3036CQBR, Everanalog)', qty: 10, unitPrice: 0.2629, designator: '', package: 'WQFN-20-EP(3x3)' },
      { partNumber: 'C616908', description: 'ATECC608A Crypto IC I2C UDFN-8 (MICROCHIP)', qty: 10, unitPrice: 1.1672, designator: '', package: 'UDFN-8(2x3)' },
      { partNumber: 'C97522', description: 'W25Q256JVEIQ 256Mbit NOR Flash SPI 133MHz (Winbond)', qty: 10, unitPrice: 3.865, designator: '', package: 'WSON-8-EP(6x8)' },
      { partNumber: 'C22387510', description: 'ESP32-P4NRW32 MCU QFN-104 (ESPRESSIF)', qty: 10, unitPrice: 5.156, designator: '', package: 'QFN-104(10x10)' },
      { partNumber: 'C21189', description: '0Ω ±1% 100mW 0603 Thick Film Resistor (UNI-ROYAL)', qty: 100, unitPrice: 0.0013, designator: '', package: '0603' },
      { partNumber: 'C304503', description: '1kΩ ±5% 50mW 0201 Thick Film Resistor (FH)', qty: 100, unitPrice: 0.0007, designator: '', package: '0201' },
      { partNumber: 'C170309', description: '4.02kΩ ±1% 62.5mW 0402 Thick Film Resistor (Walsin)', qty: 100, unitPrice: 0.0004, designator: '', package: '0402' },
      { partNumber: 'C270346', description: '4.7kΩ ±1% 50mW 0201 Thick Film Resistor (UNI-ROYAL)', qty: 100, unitPrice: 0.0011, designator: '', package: '0201' },
      { partNumber: 'C25905', description: '5.1kΩ ±1% 62.5mW 0402 Thick Film Resistor (UNI-ROYAL)', qty: 200, unitPrice: 0.0008, designator: '', package: '0402' },
      { partNumber: 'C18164326', description: '15kΩ ±1% 50mW 0201 Thick Film Resistor (FOJAN)', qty: 100, unitPrice: 0.0007, designator: '', package: '0201' },
      { partNumber: 'C423450', description: '68kΩ ±1% 50mW 0201 Thick Film Resistor (UNI-ROYAL)', qty: 100, unitPrice: 0.0011, designator: '', package: '0201' },
      { partNumber: 'C334606', description: '22Ω ±1% 50mW 0201 Thick Film Resistor (Walsin)', qty: 200, unitPrice: 0.0009, designator: '', package: '0201' },
      { partNumber: 'C473473', description: '0Ω ±1% 50mW 0201 Thick Film Resistor (UNI-ROYAL)', qty: 200, unitPrice: 0.0008, designator: '', package: '0201' },
      { partNumber: 'C3646922', description: 'Emerald Green 525nm LED 3.3V 0201 (XINGLIGHT)', qty: 100, unitPrice: 0.0537, designator: '', package: '0201' },
      { partNumber: 'C17701177', description: '1.5uH 2.6A Molded Inductor ±20% 0805 (MetalLions)', qty: 100, unitPrice: 0.0692, designator: '', package: '0805' },
      { partNumber: 'C49166756', description: 'FFC/FPC Connector 15P 0.5mm Bottom Contact (Hong Cheng)', qty: 100, unitPrice: 0.0548, designator: '', package: 'SMD,P=0.5mm' },
      { partNumber: 'C15525', description: '10uF ±20% 6.3V X5R 0402 Ceramic Capacitor (Samsung)', qty: 200, unitPrice: 0.0073, designator: '', package: '0402' },
      { partNumber: 'C1530', description: '220pF ±10% 50V X7R 0402 Ceramic Capacitor (FH)', qty: 100, unitPrice: 0.0013, designator: '', package: '0402' },
      { partNumber: 'C1525', description: '100nF ±10% 16V X7R 0402 Ceramic Capacitor (Samsung)', qty: 100, unitPrice: 0.0013, designator: '', package: '0402' },
      { partNumber: 'C526939', description: '10nF ±5% 16V X7R 0201 Ceramic Capacitor (YAGEO)', qty: 100, unitPrice: 0.0018, designator: '', package: '0201' },
      { partNumber: 'C5448871', description: '1uF ±10% 6.3V X7R 0402 Ceramic Capacitor (CCTC)', qty: 200, unitPrice: 0.0039, designator: '', package: '0402' },
      { partNumber: 'C7393837', description: '100nF ±10% 10V X7R 0201 Ceramic Capacitor (CCTC)', qty: 300, unitPrice: 0.001, designator: '', package: '0201' },
      { partNumber: 'C541209', description: '24pF ±5% 50V NP0 0201 Ceramic Capacitor (YAGEO)', qty: 200, unitPrice: 0.0011, designator: '', package: '0201' },
      { partNumber: 'C49234136', description: 'Tactile Switch SPST 160gf 3.5mm SMD (hanxia)', qty: 100, unitPrice: 0.0208, designator: '', package: 'SMD,4.6x1.8mm' },
      { partNumber: 'C17701135', description: '1.5uH 2.6A Magnetic Shielded Inductor ±20% 0806 (MetalLions)', qty: 100, unitPrice: 0.0305, designator: '', package: '0806' },
      { partNumber: 'C2879836', description: 'Power Barrel Connector Jack 2.5mm Solder Cup (XKB)', qty: 5, unitPrice: 0.134, designator: '', package: '-' },
      { partNumber: 'C60490', description: '10kΩ ±1% 62.5mW 0402 Thick Film Resistor (YAGEO)', qty: 100, unitPrice: 0.0008, designator: '', package: '0402' },
      { partNumber: 'C2906865', description: '2.2kΩ ±1% 62.5mW 0402 Thick Film Resistor (FOJAN)', qty: 100, unitPrice: 0.0006, designator: '', package: '0402' },
      { partNumber: 'C107368', description: '4.7uF ±10% 6.3V X7R 0603 Ceramic Capacitor (Samsung)', qty: 100, unitPrice: 0.0198, designator: '', package: '0603' },
    ],
  },
];

// ── State ──────────────────────────────────────────────
const STORAGE_KEY = 'bom-tracker-data';
const SEED_VERSION_KEY = 'bom-tracker-seed-v';
const CURRENT_SEED_VERSION = 3;

function loadData() {
  try {
    const d = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { orders: [] };
    // Seed on first load or when seed version bumps
    const seeded = parseInt(localStorage.getItem(SEED_VERSION_KEY)) || 0;
    if (seeded < CURRENT_SEED_VERSION) {
      // Remove USB_PCB40 if it was previously seeded (it was not an actual order)
      d.orders = d.orders.filter(o => o.id !== 'bom-usb-pcb40');
      const existingIds = new Set(d.orders.map(o => o.id));
      SEED_ORDERS.forEach(seed => {
        if (!existingIds.has(seed.id)) d.orders.push(seed);
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
      localStorage.setItem(SEED_VERSION_KEY, String(CURRENT_SEED_VERSION));
    }
    return d;
  } catch {
    return { orders: SEED_ORDERS.slice() };
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

let data = loadData();
let csvParsed = null;
let columnMapping = {};

// ── Navigation ─────────────────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`view-${btn.dataset.view}`).classList.add('active');
    renderCurrentView();
  });
});

// Form tabs
document.querySelectorAll('.form-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.form-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(`form-${tab.dataset.form}`).classList.add('active');
  });
});

// ── Rendering ──────────────────────────────────────────
function renderCurrentView() {
  const active = document.querySelector('.nav-btn.active');
  if (!active) return;
  switch (active.dataset.view) {
    case 'dashboard': renderDashboard(); break;
    case 'orders': renderOrders(); break;
    case 'parts': renderParts(); break;
    case 'duplicates': renderDuplicates(); break;
    case 'add-order': ensurePartRows(); break;
  }
}

function renderDashboard() {
  const orders = data.orders;
  const totalParts = orders.reduce((sum, o) => sum + o.parts.length, 0);
  const totalCost = orders.reduce((sum, o) =>
    sum + o.parts.reduce((s, p) => s + (p.qty * p.unitPrice), 0), 0);
  const pending = orders.filter(o => o.status === 'pending' || o.status === 'ordered').length;

  document.getElementById('stat-total-orders').textContent = orders.length;
  document.getElementById('stat-total-parts').textContent = totalParts;
  document.getElementById('stat-total-cost').textContent = formatCurrency(totalCost);
  document.getElementById('stat-pending').textContent = pending;

  const container = document.getElementById('recent-orders');
  if (orders.length === 0) {
    container.innerHTML = '<p class="empty-state">No orders yet. Add your first order to get started.</p>';
    return;
  }

  const recent = [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
  container.innerHTML = buildOrdersTable(recent);
  attachOrderClickHandlers(container);
}

function renderOrders() {
  const search = document.getElementById('order-search').value.toLowerCase();
  const statusFilter = document.getElementById('order-status-filter').value;

  let filtered = data.orders;
  if (search) {
    filtered = filtered.filter(o =>
      o.name.toLowerCase().includes(search) ||
      o.supplier.toLowerCase().includes(search) ||
      o.notes.toLowerCase().includes(search)
    );
  }
  if (statusFilter) {
    filtered = filtered.filter(o => o.status === statusFilter);
  }

  const container = document.getElementById('orders-list');
  if (filtered.length === 0) {
    container.innerHTML = '<p class="empty-state">No orders match your filters.</p>';
    return;
  }

  container.innerHTML = buildOrdersTable(filtered);
  attachOrderClickHandlers(container);
}

function renderParts() {
  const search = document.getElementById('part-search').value.toLowerCase();

  let allParts = [];
  data.orders.forEach(order => {
    order.parts.forEach(part => {
      allParts.push({ ...part, orderName: order.name, orderId: order.id, supplier: order.supplier });
    });
  });

  if (search) {
    allParts = allParts.filter(p =>
      p.partNumber.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search) ||
      p.designator.toLowerCase().includes(search) ||
      p.package.toLowerCase().includes(search) ||
      p.orderName.toLowerCase().includes(search)
    );
  }

  const container = document.getElementById('parts-list');
  if (allParts.length === 0) {
    container.innerHTML = '<p class="empty-state">No parts found.</p>';
    return;
  }

  let html = `<table>
    <thead><tr>
      <th>Part Number</th>
      <th>Description</th>
      <th>Qty</th>
      <th>Unit Price</th>
      <th>Total</th>
      <th>Designator</th>
      <th>Package</th>
      <th>Order</th>
      <th>Supplier</th>
    </tr></thead><tbody>`;

  allParts.forEach(p => {
    html += `<tr>
      <td><strong>${esc(p.partNumber)}</strong></td>
      <td>${esc(p.description)}</td>
      <td>${p.qty}</td>
      <td>${formatCurrency(p.unitPrice)}</td>
      <td>${formatCurrency(p.qty * p.unitPrice)}</td>
      <td><code>${esc(p.designator)}</code></td>
      <td>${esc(p.package)}</td>
      <td>${esc(p.orderName)}</td>
      <td>${esc(p.supplier)}</td>
    </tr>`;
  });

  html += '</tbody></table>';
  container.innerHTML = html;
}

// ── Duplicate Detection ────────────────────────────────
function renderDuplicates() {
  const container = document.getElementById('duplicates-list');

  // Collect all parts with order context
  const allParts = [];
  data.orders.forEach(order => {
    order.parts.forEach(part => {
      allParts.push({ ...part, orderName: order.name, orderId: order.id });
    });
  });

  // Group by exact LCSC part number
  const byPartNumber = {};
  allParts.forEach(p => {
    const key = p.partNumber.toUpperCase();
    if (!byPartNumber[key]) byPartNumber[key] = [];
    byPartNumber[key].push(p);
  });

  // Find exact duplicates (same part number in multiple orders)
  const exactDupes = Object.entries(byPartNumber)
    .filter(([, parts]) => {
      const orderIds = new Set(parts.map(p => p.orderId));
      return orderIds.size > 1;
    })
    .sort((a, b) => b[1].length - a[1].length);

  // Find near-duplicates (same functional value + similar package)
  const nearDupes = findNearDuplicates(allParts);

  if (exactDupes.length === 0 && nearDupes.length === 0) {
    container.innerHTML = '<p class="empty-state">No duplicates found across orders.</p>';
    return;
  }

  let html = '';

  if (exactDupes.length > 0) {
    html += `<h3 style="margin-bottom:0.75rem;color:var(--red)">Exact Duplicates (same LCSC part number in multiple orders)</h3>`;
    html += `<div class="table-container" style="margin-bottom:2rem"><table>
      <thead><tr>
        <th>Part Number</th>
        <th>Description</th>
        <th>Orders</th>
        <th>Total Qty</th>
        <th>Package</th>
      </tr></thead><tbody>`;

    exactDupes.forEach(([partNum, parts]) => {
      const orders = [...new Set(parts.map(p => p.orderName))].join(', ');
      const totalQty = parts.reduce((s, p) => s + p.qty, 0);
      html += `<tr style="background:rgba(248,113,113,0.08)">
        <td><strong>${esc(partNum)}</strong></td>
        <td>${esc(parts[0].description)}</td>
        <td>${esc(orders)}</td>
        <td>${totalQty}</td>
        <td>${esc(parts[0].package)}</td>
      </tr>`;
    });
    html += '</tbody></table></div>';
  }

  if (nearDupes.length > 0) {
    html += `<h3 style="margin-bottom:0.75rem;color:var(--yellow)">Near Duplicates (similar value/function, different part numbers)</h3>`;
    html += `<div class="table-container"><table>
      <thead><tr>
        <th>Match Type</th>
        <th>Part A</th>
        <th>Part A Order</th>
        <th>Part B</th>
        <th>Part B Order</th>
        <th>Notes</th>
      </tr></thead><tbody>`;

    nearDupes.forEach(d => {
      html += `<tr style="background:rgba(250,204,21,0.08)">
        <td><span class="status status-ordered">${esc(d.matchType)}</span></td>
        <td><strong>${esc(d.partA.partNumber)}</strong><br><small>${esc(d.partA.description)}</small></td>
        <td>${esc(d.partA.orderName)}</td>
        <td><strong>${esc(d.partB.partNumber)}</strong><br><small>${esc(d.partB.description)}</small></td>
        <td>${esc(d.partB.orderName)}</td>
        <td>${esc(d.note)}</td>
      </tr>`;
    });
    html += '</tbody></table></div>';
  }

  container.innerHTML = html;
}

function findNearDuplicates(allParts) {
  const dupes = [];
  const seen = new Set();

  // Extract a normalized "value" from the description (e.g., "10uF", "100nF", "10kΩ")
  function extractValue(desc) {
    if (!desc) return null;
    const m = desc.match(/([\d.]+)\s*([pnuμmk]?[FΩΩHhfA])/i);
    return m ? (m[1] + m[2]).toLowerCase().replace('μ', 'u') : null;
  }

  // Extract base package size (e.g., "0402", "0603", "0201", "SOT-23")
  function extractPkg(pkg) {
    if (!pkg) return '';
    const m = pkg.match(/(0201|0402|0603|0805|1206|SOT-23|SOP-8|QFN|VSSOP|DFN|WSON|USB-C|SMD3225)/i);
    return m ? m[1].toUpperCase() : pkg.toUpperCase();
  }

  function isPassive(desc) {
    return /resistor|capacitor|inductor|cap\b|res\b/i.test(desc);
  }

  function isConnector(desc) {
    return /USB|connector|header|pin|FPC|FFC|barrel/i.test(desc);
  }

  for (let i = 0; i < allParts.length; i++) {
    for (let j = i + 1; j < allParts.length; j++) {
      const a = allParts[i];
      const b = allParts[j];
      if (a.orderId === b.orderId) continue; // skip within same order
      if (a.partNumber.toUpperCase() === b.partNumber.toUpperCase()) continue; // skip exact dupes (handled above)

      const key = [a.partNumber, b.partNumber].sort().join('|');
      if (seen.has(key)) continue;

      const valA = extractValue(a.description);
      const valB = extractValue(b.description);
      const pkgA = extractPkg(a.package);
      const pkgB = extractPkg(b.package);

      // Same value + same or similar package for passives
      if (valA && valB && valA === valB && isPassive(a.description) && isPassive(b.description)) {
        seen.add(key);
        const samePkg = pkgA === pkgB;
        dupes.push({
          matchType: samePkg ? 'Same Value+Pkg' : 'Same Value',
          partA: a,
          partB: b,
          note: samePkg
            ? `Both ${valA} in ${pkgA} — likely interchangeable, you may already have stock`
            : `Both ${valA} but different packages (${pkgA} vs ${pkgB})`,
        });
        continue;
      }

      // Similar connectors (both USB-C)
      if (isConnector(a.description) && isConnector(b.description)) {
        const bothUSBC = /USB.?C/i.test(a.description) && /USB.?C/i.test(b.description);
        if (bothUSBC) {
          seen.add(key);
          dupes.push({
            matchType: 'Similar Connector',
            partA: a,
            partB: b,
            note: 'Both are USB-C connectors — verify pin compatibility before substituting',
          });
        }
      }
    }
  }

  return dupes;
}

function buildOrdersTable(orders) {
  let html = `<table>
    <thead><tr>
      <th>Order Name</th>
      <th>Supplier</th>
      <th>Date</th>
      <th>Parts</th>
      <th>Total Cost</th>
      <th>Status</th>
      <th>Actions</th>
    </tr></thead><tbody>`;

  orders.forEach(o => {
    const cost = o.parts.reduce((s, p) => s + (p.qty * p.unitPrice), 0);
    html += `<tr class="order-row" data-id="${o.id}">
      <td><strong>${esc(o.name)}</strong></td>
      <td>${esc(o.supplier)}</td>
      <td>${o.date || '—'}</td>
      <td>${o.parts.length}</td>
      <td>${formatCurrency(cost)}</td>
      <td><span class="status status-${o.status}">${o.status}</span></td>
      <td>
        <button class="btn-icon view-order" data-id="${o.id}" title="View">&#128269;</button>
        <button class="btn-icon delete-order" data-id="${o.id}" title="Delete">&#128465;</button>
      </td>
    </tr>`;
  });

  html += '</tbody></table>';
  return html;
}

function attachOrderClickHandlers(container) {
  container.querySelectorAll('.view-order').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      showOrderDetail(btn.dataset.id);
    });
  });
  container.querySelectorAll('.delete-order').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      deleteOrder(btn.dataset.id);
    });
  });
  container.querySelectorAll('.order-row').forEach(row => {
    row.addEventListener('click', () => showOrderDetail(row.dataset.id));
  });
}

// ── Order Detail Modal ─────────────────────────────────
function showOrderDetail(id) {
  const order = data.orders.find(o => o.id === id);
  if (!order) return;

  const modal = document.getElementById('order-modal');
  const cost = order.parts.reduce((s, p) => s + (p.qty * p.unitPrice), 0);

  document.getElementById('modal-order-name').textContent = order.name;

  let html = `
    <div class="modal-meta">
      <div class="meta-item">
        <span class="meta-label">Supplier</span>
        <span class="meta-value">${esc(order.supplier) || '—'}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Date</span>
        <span class="meta-value">${order.date || '—'}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Status</span>
        <span class="meta-value">
          <select class="filter-select" id="modal-status" data-id="${order.id}">
            ${['pending','ordered','shipped','received','complete'].map(s =>
              `<option value="${s}" ${order.status === s ? 'selected' : ''}>${s}</option>`
            ).join('')}
          </select>
        </span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Parts</span>
        <span class="meta-value">${order.parts.length}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Total Cost</span>
        <span class="meta-value">${formatCurrency(cost)}</span>
      </div>
    </div>`;

  if (order.notes) {
    html += `<p style="margin-bottom:1rem;color:var(--text-dim)">${esc(order.notes)}</p>`;
  }

  html += `<div class="table-container"><table>
    <thead><tr>
      <th>Part Number</th>
      <th>Description</th>
      <th>Qty</th>
      <th>Unit Price</th>
      <th>Total</th>
      <th>Designator</th>
      <th>Package</th>
    </tr></thead><tbody>`;

  order.parts.forEach(p => {
    html += `<tr>
      <td><strong>${esc(p.partNumber)}</strong></td>
      <td>${esc(p.description)}</td>
      <td>${p.qty}</td>
      <td>${formatCurrency(p.unitPrice)}</td>
      <td>${formatCurrency(p.qty * p.unitPrice)}</td>
      <td><code>${esc(p.designator)}</code></td>
      <td>${esc(p.package)}</td>
    </tr>`;
  });

  html += '</tbody></table></div>';

  html += `<div class="modal-actions">
    <button class="btn btn-primary" id="modal-export">Export CSV</button>
    <button class="btn btn-danger" id="modal-delete" data-id="${order.id}">Delete Order</button>
  </div>`;

  document.getElementById('modal-body').innerHTML = html;
  modal.hidden = false;

  // Status change
  document.getElementById('modal-status').addEventListener('change', e => {
    const o = data.orders.find(o => o.id === e.target.dataset.id);
    if (o) {
      o.status = e.target.value;
      saveData(data);
      renderCurrentView();
    }
  });

  // Export single order
  document.getElementById('modal-export').addEventListener('click', () => {
    exportOrderCSV(order);
  });

  // Delete from modal
  document.getElementById('modal-delete').addEventListener('click', () => {
    deleteOrder(order.id);
    modal.hidden = true;
  });
}

// Close modal
document.querySelector('.modal-backdrop').addEventListener('click', () => {
  document.getElementById('order-modal').hidden = true;
});
document.querySelector('.modal-close').addEventListener('click', () => {
  document.getElementById('order-modal').hidden = true;
});

// ── Manual Entry Form ──────────────────────────────────
function ensurePartRows() {
  const container = document.getElementById('parts-rows');
  if (!container.querySelector('.part-row')) {
    addPartRow();
  }
}

function addPartRow() {
  const container = document.getElementById('parts-rows');
  const row = document.createElement('div');
  row.className = 'part-row';
  row.innerHTML = `
    <input type="text" placeholder="Part #" class="p-number">
    <input type="text" placeholder="Description" class="p-desc">
    <input type="number" placeholder="Qty" class="p-qty" min="0" value="1">
    <input type="number" placeholder="0.00" class="p-price" min="0" step="0.001">
    <input type="text" placeholder="C1 C2..." class="p-desig">
    <input type="text" placeholder="0402" class="p-pkg">
    <button type="button" class="btn-icon remove-part-row" title="Remove">&times;</button>
  `;
  container.appendChild(row);

  row.querySelector('.remove-part-row').addEventListener('click', () => {
    row.remove();
  });
}

document.getElementById('add-part-row').addEventListener('click', addPartRow);

document.getElementById('order-form').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('order-name').value.trim();
  if (!name) return;

  const parts = [];
  document.querySelectorAll('.part-row').forEach(row => {
    const partNumber = row.querySelector('.p-number').value.trim();
    if (!partNumber) return;
    parts.push({
      partNumber,
      description: row.querySelector('.p-desc').value.trim(),
      qty: parseInt(row.querySelector('.p-qty').value) || 0,
      unitPrice: parseFloat(row.querySelector('.p-price').value) || 0,
      designator: row.querySelector('.p-desig').value.trim(),
      package: row.querySelector('.p-pkg').value.trim(),
    });
  });

  const order = {
    id: generateId(),
    name,
    supplier: document.getElementById('order-supplier').value.trim(),
    date: document.getElementById('order-date').value,
    status: document.getElementById('order-status').value,
    notes: document.getElementById('order-notes').value.trim(),
    parts,
    createdAt: new Date().toISOString(),
  };

  data.orders.push(order);
  saveData(data);

  e.target.reset();
  document.querySelectorAll('.part-row').forEach(r => r.remove());
  addPartRow();

  toast(`Order "${name}" saved with ${parts.length} parts`);
  navigateTo('orders');
});

document.getElementById('order-form').addEventListener('reset', () => {
  setTimeout(() => {
    document.querySelectorAll('.part-row').forEach(r => r.remove());
    addPartRow();
  }, 0);
});

// ── CSV Upload ─────────────────────────────────────────
const dropZone = document.getElementById('drop-zone');
const csvFileInput = document.getElementById('csv-file');

dropZone.addEventListener('click', () => csvFileInput.click());
dropZone.addEventListener('dragover', e => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  if (e.dataTransfer.files.length) handleCSVFile(e.dataTransfer.files[0]);
});
csvFileInput.addEventListener('change', () => {
  if (csvFileInput.files.length) handleCSVFile(csvFileInput.files[0]);
});

function handleCSVFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    const text = e.target.result;
    csvParsed = parseCSV(text);
    if (csvParsed.length < 2) {
      toast('CSV appears empty or has only headers', true);
      return;
    }
    showCSVPreview();
  };
  reader.readAsText(file);
}

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim());
  return lines.map(line => {
    const result = [];
    let current = '';
    let inQuotes = false;
    const sep = line.includes('\t') ? '\t' : ',';

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (inQuotes) {
        if (ch === '"' && line[i + 1] === '"') {
          current += '"';
          i++;
        } else if (ch === '"') {
          inQuotes = false;
        } else {
          current += ch;
        }
      } else {
        if (ch === '"') {
          inQuotes = true;
        } else if (ch === sep) {
          result.push(current.trim());
          current = '';
        } else {
          current += ch;
        }
      }
    }
    result.push(current.trim());
    return result;
  });
}

const FIELD_MAP = {
  partNumber: ['part number', 'part #', 'part no', 'partnumber', 'mpn', 'mfr part', 'manufacturer part', 'component', 'value'],
  description: ['description', 'desc', 'comment', 'name'],
  qty: ['qty', 'quantity', 'count', 'amount'],
  unitPrice: ['unit price', 'price', 'cost', 'unit cost'],
  designator: ['designator', 'reference', 'ref', 'ref des', 'references'],
  package: ['package', 'footprint', 'pkg', 'case', 'size'],
};

function guessMapping(headers) {
  const mapping = {};
  const lowerHeaders = headers.map(h => h.toLowerCase().trim());

  for (const [field, keywords] of Object.entries(FIELD_MAP)) {
    let bestIdx = -1;
    for (const kw of keywords) {
      const idx = lowerHeaders.findIndex(h => h.includes(kw));
      if (idx !== -1) { bestIdx = idx; break; }
    }
    mapping[field] = bestIdx;
  }
  return mapping;
}

function showCSVPreview() {
  const headers = csvParsed[0];
  columnMapping = guessMapping(headers);

  const preview = document.getElementById('csv-preview');
  const mappingEl = document.getElementById('csv-mapping');
  const tableEl = document.getElementById('csv-table-preview');

  // Build mapping selectors
  let mappingHTML = '';
  for (const [field, label] of [
    ['partNumber', 'Part Number'],
    ['description', 'Description'],
    ['qty', 'Quantity'],
    ['unitPrice', 'Unit Price'],
    ['designator', 'Designator'],
    ['package', 'Package'],
  ]) {
    mappingHTML += `<div class="mapping-item">
      <label>${label}</label>
      <select data-field="${field}">
        <option value="-1">— Skip —</option>
        ${headers.map((h, i) =>
          `<option value="${i}" ${columnMapping[field] === i ? 'selected' : ''}>${esc(h)}</option>`
        ).join('')}
      </select>
    </div>`;
  }
  mappingEl.innerHTML = mappingHTML;

  mappingEl.querySelectorAll('select').forEach(sel => {
    sel.addEventListener('change', () => {
      columnMapping[sel.dataset.field] = parseInt(sel.value);
    });
  });

  // Preview table (first 5 rows)
  const previewRows = csvParsed.slice(1, 6);
  let tableHTML = `<table><thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>`;
  previewRows.forEach(row => {
    tableHTML += `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join('')}</tr>`;
  });
  if (csvParsed.length > 6) {
    tableHTML += `<tr><td colspan="${headers.length}" style="text-align:center;color:var(--text-dim)">... and ${csvParsed.length - 6} more rows</td></tr>`;
  }
  tableHTML += '</tbody></table>';
  tableEl.innerHTML = tableHTML;

  preview.hidden = false;

  // Set default order name from filename
  const nameInput = document.getElementById('csv-order-name');
  if (!nameInput.value) {
    nameInput.value = csvFileInput.files[0]?.name?.replace(/\.[^.]+$/, '') || '';
  }
}

document.getElementById('csv-import-btn').addEventListener('click', () => {
  const name = document.getElementById('csv-order-name').value.trim();
  if (!name) { toast('Please enter an order name', true); return; }

  const parts = [];
  for (let i = 1; i < csvParsed.length; i++) {
    const row = csvParsed[i];
    const get = field => {
      const idx = columnMapping[field];
      return idx >= 0 && idx < row.length ? row[idx] : '';
    };

    const partNumber = get('partNumber');
    if (!partNumber) continue;

    parts.push({
      partNumber,
      description: get('description'),
      qty: parseInt(get('qty')) || 1,
      unitPrice: parseFloat(get('unitPrice').replace(/[^0-9.\-]/g, '')) || 0,
      designator: get('designator'),
      package: get('package'),
    });
  }

  if (parts.length === 0) {
    toast('No valid parts found in CSV', true);
    return;
  }

  const order = {
    id: generateId(),
    name,
    supplier: document.getElementById('csv-order-supplier').value.trim(),
    date: new Date().toISOString().split('T')[0],
    status: 'pending',
    notes: '',
    parts,
    createdAt: new Date().toISOString(),
  };

  data.orders.push(order);
  saveData(data);

  // Reset
  document.getElementById('csv-preview').hidden = true;
  csvFileInput.value = '';
  document.getElementById('csv-order-name').value = '';
  document.getElementById('csv-order-supplier').value = '';
  csvParsed = null;

  toast(`Imported "${name}" with ${parts.length} parts`);
  navigateTo('orders');
});

document.getElementById('csv-cancel-btn').addEventListener('click', () => {
  document.getElementById('csv-preview').hidden = true;
  csvFileInput.value = '';
  csvParsed = null;
});

// ── Paste Import ───────────────────────────────────────
document.getElementById('paste-import-btn').addEventListener('click', () => {
  const name = document.getElementById('paste-order-name').value.trim();
  if (!name) { toast('Please enter an order name', true); return; }

  const raw = document.getElementById('paste-data').value.trim();
  if (!raw) { toast('Please paste some data', true); return; }

  const parsed = parseCSV(raw);
  if (parsed.length < 1) { toast('No data found', true); return; }

  const hasHeader = document.getElementById('paste-has-header').checked;
  const dataRows = hasHeader ? parsed.slice(1) : parsed;
  const headers = hasHeader ? parsed[0] : null;
  const mapping = headers ? guessMapping(headers) : {
    partNumber: 0,
    description: 1,
    qty: 2,
    unitPrice: 3,
    designator: 4,
    package: 5,
  };

  const parts = [];
  dataRows.forEach(row => {
    const get = field => {
      const idx = mapping[field];
      return idx >= 0 && idx < row.length ? row[idx] : '';
    };
    const partNumber = get('partNumber');
    if (!partNumber) return;
    parts.push({
      partNumber,
      description: get('description'),
      qty: parseInt(get('qty')) || 1,
      unitPrice: parseFloat(get('unitPrice').replace(/[^0-9.\-]/g, '')) || 0,
      designator: get('designator'),
      package: get('package'),
    });
  });

  if (parts.length === 0) { toast('No valid parts found', true); return; }

  const order = {
    id: generateId(),
    name,
    supplier: document.getElementById('paste-order-supplier').value.trim(),
    date: new Date().toISOString().split('T')[0],
    status: 'pending',
    notes: '',
    parts,
    createdAt: new Date().toISOString(),
  };

  data.orders.push(order);
  saveData(data);

  document.getElementById('paste-data').value = '';
  document.getElementById('paste-order-name').value = '';
  document.getElementById('paste-order-supplier').value = '';

  toast(`Imported "${name}" with ${parts.length} parts`);
  navigateTo('orders');
});

// ── Delete ─────────────────────────────────────────────
function deleteOrder(id) {
  const order = data.orders.find(o => o.id === id);
  if (!order) return;
  if (!confirm(`Delete order "${order.name}"? This cannot be undone.`)) return;

  data.orders = data.orders.filter(o => o.id !== id);
  saveData(data);
  renderCurrentView();
  toast(`Deleted "${order.name}"`);
}

// ── Export ──────────────────────────────────────────────
function exportOrderCSV(order) {
  const headers = ['Part Number', 'Description', 'Qty', 'Unit Price', 'Total', 'Designator', 'Package'];
  const rows = order.parts.map(p => [
    csvCell(p.partNumber),
    csvCell(p.description),
    p.qty,
    p.unitPrice.toFixed(4),
    (p.qty * p.unitPrice).toFixed(4),
    csvCell(p.designator),
    csvCell(p.package),
  ]);

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  downloadFile(`${order.name}.csv`, csv, 'text/csv');
}

document.getElementById('export-csv-btn').addEventListener('click', () => {
  const allParts = [];
  data.orders.forEach(order => {
    order.parts.forEach(p => {
      allParts.push([
        csvCell(p.partNumber),
        csvCell(p.description),
        p.qty,
        p.unitPrice.toFixed(4),
        (p.qty * p.unitPrice).toFixed(4),
        csvCell(p.designator),
        csvCell(p.package),
        csvCell(order.name),
        csvCell(order.supplier),
      ]);
    });
  });

  const headers = ['Part Number', 'Description', 'Qty', 'Unit Price', 'Total', 'Designator', 'Package', 'Order', 'Supplier'];
  const csv = [headers.join(','), ...allParts.map(r => r.join(','))].join('\n');
  downloadFile('bom-all-parts.csv', csv, 'text/csv');
  toast('Exported all parts to CSV');
});

// ── Search handlers ────────────────────────────────────
document.getElementById('order-search').addEventListener('input', renderOrders);
document.getElementById('order-status-filter').addEventListener('change', renderOrders);
document.getElementById('part-search').addEventListener('input', renderParts);

// ── Utilities ──────────────────────────────────────────
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function esc(str) {
  if (!str) return '';
  const el = document.createElement('span');
  el.textContent = str;
  return el.innerHTML;
}

function formatCurrency(n) {
  return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function csvCell(val) {
  if (!val) return '';
  if (val.includes(',') || val.includes('"') || val.includes('\n')) {
    return '"' + val.replace(/"/g, '""') + '"';
  }
  return val;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function toast(message, isError = false) {
  const el = document.createElement('div');
  el.className = 'toast' + (isError ? ' error' : '');
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

function navigateTo(view) {
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === view);
  });
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${view}`).classList.add('active');
  renderCurrentView();
}

// ── Init ───────────────────────────────────────────────
renderDashboard();
ensurePartRows();
