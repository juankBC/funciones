input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(740, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(200)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(300)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.pause(25)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.pause(20)
    music.play(music.tonePlayable(698, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.pause(100)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.pause(50)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.pause(25)
    music.play(music.tonePlayable(740, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.pause(350)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.pause(350)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.pause(100)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(554, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.pause(100)
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(740, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . # # # .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Giraffe)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Cow)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Diamond)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("THE WORLD!")
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    music.play(music.stringPlayable("C5 A B G F G E E ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        `)
    basic.clearScreen()
})
