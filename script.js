document.addEventListener('DOMContentLoaded', () => {
  const steps = Array.from(document.querySelectorAll('.form-step'));
  let current = 0;

  const showStep = i => {
    steps.forEach((s, k) => {
      s.classList.toggle('form-step-active', k === i);
      document.querySelectorAll('.step')[k].classList.toggle('active', k === i);
    });
    document.getElementById('prevBtn').style.display = i === 0 ? 'none' : 'inline-block';
    document.getElementById('nextBtn').style.display = i === steps.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submitBtn').style.display = i === steps.length - 1 ? 'inline-block' : 'none';
  };

  document.getElementById('prevBtn').onclick = () => { if (current > 0) current--; showStep(current); };
  document.getElementById('nextBtn').onclick = () => { if (current < steps.length - 1) current++; showStep(current); };
  document.getElementById('submitBtn').onclick = () => generateLayout(); // tetap pakai fungsi generate

  showStep(current);
});
