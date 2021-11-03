let nombre_de_personne = 0
input.onButtonPressed(Button.A, function () {
    nombre_de_personne += 1
    basic.showNumber(nombre_de_personne)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    basic.showString("!!DANGER!!")
})
input.onButtonPressed(Button.B, function () {
    nombre_de_personne += -1
    basic.showNumber(nombre_de_personne)
})
