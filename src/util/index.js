import numeral from 'numeral';

export function formatNumberVolume(number) {
  try {
    const shape = number < 10000 ? '0,0' : '0.[0]a';
    return numeral(number).format(shape);
  } catch (error) {
    return null;
    // console.tron.log(error.message);
  }
}
