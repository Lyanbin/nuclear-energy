export function getElementSize(id) {
  const element = document.getElementById(id);
  console.log(element);
  const size = {
    width: 0,
    height: 0
  };
  if (element) {
    size.width = element.clientWidth;
    size.height = element.clientHeight
  }
  return size;
}