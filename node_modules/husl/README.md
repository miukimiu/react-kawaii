[![Build Status](https://travis-ci.org/husl-colors/husl.svg?branch=master)](https://travis-ci.org/husl-colors/husl)

[Explanation, demo, ports etc.](http://www.husl-colors.org)

# Usage

Client-side: include [husl.js](https://raw.githubusercontent.com/husl-colors/husl/master/husl.js) or [husl.min.js](https://raw.githubusercontent.com/husl-colors/husl/master/husl.min.js) in your webpage, access it as a global ``HUSL`` object or as a jQuery plugin with ``$.husl``.

Server-side: ``npm install husl``.

**husl.toHex(hue, saturation, lightness)**

*hue* is a number between 0 and 360, *saturation* and *lightness* are numbers between 0 and 100. This function returns the resulting color as a hex string.

**husl.toRGB(hue, saturation, lightness)**

Like above, but returns an array of 3 numbers between 0 and 1, for each RGB channel.

**husl.fromHex(hex)**

Takes a hex string and returns the HUSL color as defined above.

**husl.fromRGB(red, green, blue)**

Like above, but *red*, *green* and *blue* are passed as numbers between 0 and 1.

Use **husl.p.toHex**, **husl.p.toRGB**, **husl.p.fromHex** and **husl.p.fromRGB** for the pastel variant (HUSLp).

HUSL can also be used as a [Stylus](http://learnboost.github.com/stylus/) plugin. See [here](https://github.com/husl-colors/husl-stylus).

# Versioning

This repo contains the canonical implementation of HUSL, its source code being HUSL's informal specification. Following [semantic versioning](http://semver.org/), the major version must be incremented whenever the color math changes. These changes can be tested for with snapshot files.

# Testing

Run `npm install` and `npm test`. Try `coffee test/snapshot.coffee` to generate a JSON file of the entire gamut to be used for debugging and regression tests. The format of the file is as follows:

    {
      "#000000": {
        rgb: [ 0, 0, 0 ],
        xyz: [ 0, 0, 0 ],
        luv: [ 0, 0, 0 ],
        lch: [ 0, 0, 0 ],
        husl: [ 0, 0, 0 ],
        huslp: [ 0, 0, 0 ]
      },
      ...
    }

# License

Copyright (C) 2014 Alexei Boronine

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
