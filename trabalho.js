const formCurso = document.querySelector('form#adicionar');
const form = document.querySelector('form#cursoadd');
const inputAddcurso = document.querySelector('input#addcurso');
const selectCursos = document.querySelector('select#cursos');
const tbody = document.querySelector('tbody');
formCurso.addEventListener('submit', function(e) {
    e.preventDefault();
    const cursos = selectCursos.value;

    const row = `<tr><td>${cursos}</td><td><button id="excluir">Excluir</button></td><td><button id="subir">subir</button></td><td><button id="descer">descer</button></td></tr>`;
    tbody.innerHTML += row;
});
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const addcurso = inputAddcurso.value;

    const row = `<option>${addcurso}</option>`;
    selectCursos.innerHTML += row;
});

tbody.addEventListener('click', function(e) {
    if (e.target.id === 'excluir') {
        e.target.parentElement.parentElement.remove();
    }
    if (e.target.id === 'subir') {
        const segundo = document.body.children[2].children[1].children[1].children[0].innerText;
        const primeiro = document.body.children[2].children[1].children[0].children[0].innerText;
        document.body.children[2].children[1].children[1].children[0].innerText = primeiro;
        document.body.children[2].children[1].children[0].children[0].innerText = segundo;
    }
});

tbody.addEventListener('dblclick', function(e) {
    if (e.target.tagName === 'TD') {
        inputAddcurso.value = e.target.textContent;
    }
});

