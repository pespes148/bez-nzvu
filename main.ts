let svetlo = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    svetlo = input.lightLevel()
    basic.showString("" + (svetlo))
    basic.pause(5000)
})
