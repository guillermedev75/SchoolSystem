var n1 = $('#nota1')
var n2 = $('#nota2')
var n3 = $('#nota3')
var n4 = $('#nota4')

var btn = $('#btn')

var media = $('#media')
var resultado = $('#resultado')

const calculaMedia = () => {

    var n1Value = n1.val()
    var n2Value = n2.val()
    var n3Value = n3.val()
    var n4Value = n4.val()
    var mediaValue = (n1Value + n2Value + n3Value + n4Value) / 4

    if(mediaValue >= 6){

        resultadoValue = 'Aprovado'

    } else {

        resultadoValue = 'Reprovado'

    }

    media.html(mediaValue)
    resultado.html(resultadoValue)

}

btn.click(e => {
    calculaMedia()
})