# renderer
how does Zpet renderer work?
https://zpet-development.github.io/renderer/

## Checking files
### zdog.dist.js and tape.js
<hr>
these two are the frameworks that render 3d objects on 2d canvas, <a> href='https://github.com/metafizzy/zdog'Zdog is a framework made by Metafizzy.</a>
Tape.js also renders a part of objects done by mossales.
<hr>
## BHD.js file
<hr>
This file contains <b>All</b> the Animations Zpet uses for pets, they're javascript arrays stored inside ballz sub-variable.
the `ballz` array contains all the animations, Every animation has frames, and every frame contains information of ballz. The renderer reads information of ballz frames of a system-selected animation array and renders them on screen.
<hr>

