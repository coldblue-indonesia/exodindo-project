// Update contract display based on form inputs
function updateContract() {
  const contractNumber = document.getElementById('contractNumber').value;
  const contractDate = document.getElementById('contractDate').value;
  const clientName = document.getElementById('clientName').value;
  const clientPIC = document.getElementById('clientPIC').value;
  const clientPhone = document.getElementById('clientPhone').value;
  const clientEmail = document.getElementById('clientEmail').value;

  // Format date
  const dateObj = new Date(contractDate);
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const formattedDate = `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

  // Update displays
  document.getElementById('displayContractNumber').textContent = contractNumber;
  document.getElementById('displayContractDate').textContent = formattedDate;
  document.getElementById('displayAgreementDate').textContent = formattedDate;
  document.getElementById('signatureDate').textContent = formattedDate;
  document.getElementById('displayClientName').textContent = clientName;
  document.getElementById('displayClientPIC').textContent = clientPIC;
  document.getElementById('displayClientPhone').textContent = clientPhone;
  document.getElementById('displayClientEmail').textContent = clientEmail;
  document.getElementById('signatureClientName').textContent = clientPIC.toUpperCase();
  document.getElementById('signatureClientPosition').innerHTML = `Representative<br>${clientName}`;
}

// Save draft to localStorage
function saveDraft() {
  const draftData = {
    contractNumber: document.getElementById('contractNumber').value,
    contractDate: document.getElementById('contractDate').value,
    projectName: document.getElementById('projectName').value,
    projectLocation: document.getElementById('projectLocation').value,
    clientName: document.getElementById('clientName').value,
    clientPIC: document.getElementById('clientPIC').value,
    clientPhone: document.getElementById('clientPhone').value,
    clientEmail: document.getElementById('clientEmail').value,
    savedAt: new Date().toISOString()
  };

  localStorage.setItem('exodindoo_contract_draft', JSON.stringify(draftData));
  
  // Show success notification (defined in main.js)
  if (typeof showNotification === 'function') {
    showNotification('✓ Draft kontrak berhasil disimpan!', 'success');
  }
}

// Load template
function loadTemplate() {
  const templates = [
    { name: 'Event Exhibition - The Teh Group', data: { contractNumber: 'EXD/CON/2026/072', clientName: 'The Teh Group', clientPIC: 'Nadira' } },
    { name: 'Interior Design - Corporate Office', data: { contractNumber: 'EXD/CON/2026/073', clientName: '[Client Name]', clientPIC: '[PIC Name]' } },
    { name: 'Advertising - Retail Brand', data: { contractNumber: 'EXD/CON/2026/074', clientName: '[Client Name]', clientPIC: '[PIC Name]' } }
  ];

  const choice = prompt(`Pilih template:\n1. ${templates[0].name}\n2. ${templates[1].name}\n3. ${templates[2].name}\n\nKetik nomor (1-3):`);
  
  if (choice && templates[choice - 1]) {
    const template = templates[choice - 1];
    document.getElementById('contractNumber').value = template.data.contractNumber;
    document.getElementById('clientName').value = template.data.clientName;
    document.getElementById('clientPIC').value = template.data.clientPIC;
    updateContract();
    if (typeof showNotification === 'function') {
      showNotification(`✓ Template "${template.name}" berhasil dimuat!`, 'success');
    }
  }
}

// Load saved draft on page load
window.addEventListener('load', () => {
  const savedDraft = localStorage.getItem('exodindoo_contract_draft');
  if (savedDraft) {
    try {
      const draft = JSON.parse(savedDraft);
      if (confirm('Ada draft kontrak tersimpan. Muat draft tersebut?')) {
        document.getElementById('contractNumber').value = draft.contractNumber || '';
        document.getElementById('contractDate').value = draft.contractDate || '';
        document.getElementById('projectName').value = draft.projectName || '';
        document.getElementById('projectLocation').value = draft.projectLocation || '';
        document.getElementById('clientName').value = draft.clientName || '';
        document.getElementById('clientPIC').value = draft.clientPIC || '';
        document.getElementById('clientPhone').value = draft.clientPhone || '';
        document.getElementById('clientEmail').value = draft.clientEmail || '';
        updateContract();
      }
    } catch (e) { console.error('Error loading draft:', e); }
  }
  
  // Initialize on load
  updateContract();
});