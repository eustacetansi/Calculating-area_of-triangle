//Assessment on Area of a Triangle
function calc() {
    let w = document.getElementById('width').value;
    let h = document.getElementById('height').value;
    let k = document.getElementById('enter').value;

    let s = w*h*k/2;

    let area = Math.sqrt(s*(s-w)*(s-h)*(s-k))

    document.getElementById('answer').value = area;

}