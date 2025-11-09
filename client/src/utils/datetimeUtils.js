export function fromIsoDate(isoString) {
  if (!isoString) return 'Invalid date';

  const date = new Date(isoString);
  if (isNaN(date)) return 'Invalid date';

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
