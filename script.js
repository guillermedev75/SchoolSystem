const calculaMedia = () => {

    var media = $('#media')
    var resultado = $('#resultado')
    
    var n1 = $('#nota1').val()
    var n2 = $('#nota2').val()
    var n3 = $('#nota3').val()
    var n4 = $('#nota4').val()

    var n1Value = parseFloat(n1) 
    var n2Value = parseFloat(n2)
    var n3Value = parseFloat(n3)
    var n4Value = parseFloat(n4)

    var mediaValue = (n1Value + n2Value + n3Value + n4Value) / 4

    if(mediaValue >= 6){

        resultadoValue = 'Aprovado'

    } else {

        resultadoValue = 'Reprovado'

    }

    media.html(mediaValue)
    resultado.html(resultadoValue)

}

var btn = $('#btn')

btn.click(e => {
    calculaMedia()
})