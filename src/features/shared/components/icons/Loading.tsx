import React from 'react'

import { IconProps } from '.'

export default function Loading({ height = 16, width = 16 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="12" height="12" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_10712_251933" transform="scale(0.0166667)" />
        </pattern>
        <image
          id="image0_10712_251933"
          width="60"
          height="60"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACZUlEQVRoQ+2asXLDIAyGxZ2H9iHau7xV0617MuRJMqR7t6ZvlSEP0fbiO3pguxcTOSBZgBPj1YD49EsCgxXM7FEz44UCfO+KF4WLwnfmgRLSdyboBU5ROJbC759HbcdWGnS7/CvQALrx+er1KYnzoxnZfhx09VA1/jNWGtzh56xN/VPD5m0RZW7ig/6DhkAO4bd9Y4CLAu/2xyZafWqG5k071nopF+4iwL3wRWBqqGGzvB6iJsfbdEbdIaX2aODt/qAraHPVmSpXGRspTMf5gmcUsIVV1UUIc0HdyV6AK4Ba+6PFVxt9TkHfD4WxFGxnFFN7THizFXYnonS8tRTLb65jWcCY17kTCA0vKZtkYBvKj/28jQ2LhrfJ52/6BoUM7Ho6FexQTlPtk4BzqiulMgk4t7oSKhfga1Vz93U033b2CdkuhlZgarveMqUA1i/he+1ghd21kFosqFC+9ufpRdkDFOAhz06lYGGFy5ycrJbPQeIFNTJGpgxs5heaYgX4FkM6isKlSgueM/mWIOw9d08QnMO2cM1p4zGlSu2etoRWaMNAU9g5XKMY4oRtjD4k4Cl8Ho51Agl4SmHNBScD37rKZGBMZcrCz1VGqh8LGIOmfKJJTZ4zDhs41UE8B+paHzawGTT2VYs0LHkdxiYQ4zItBmg35iiFu0F816Uh+W0+Tk6/9IN1qnNEgHunEGZE6oX4WZ/YuzdRYJvX3b8dHHDCyQVVWdGQRnOb+VPLzSk85HnstyVbNTXASY275KaoLR7SFOM52hbgHF5PabMonNLbOWwVhXN4PaXNonBKb+ewNTuF/wBTPEpMGAUQHAAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  )
}
