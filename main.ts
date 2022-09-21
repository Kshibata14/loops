input.onButtonPressed(Button.A, function () {
    sprite.set(LedSpriteProperty.Y, 2)
    basic.pause(500)
    sprite.set(LedSpriteProperty.Y, 1)
    basic.pause(500)
    sprite.move(-1)
    basic.pause(500)
    sprite.move(-1)
    basic.pause(500)
    sprite.turn(Direction.Right, -90)
    basic.pause(100)
    sprite.move(-1)
    basic.pause(500)
    sprite.move(-1)
    basic.pause(100)
    sprite.turn(Direction.Right, 90)
    basic.pause(500)
    sprite.move(1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(3, 3)
basic.forever(function () {
	
})
