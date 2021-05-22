import * as React from "react"
import { render } from "react-dom"
import { createTest } from "lib"

render(
    <div>[HELLO WORLD]</div>,
    document.querySelector('body > div#app')
)

export const test2 = createTest()
