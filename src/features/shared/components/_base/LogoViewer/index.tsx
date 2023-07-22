import React from 'react'

type LogoViewerProps = {
  logo: string | React.ReactNode
  size?: number
  roundedBorder?: boolean
}

export default function LogoViewer({
  logo,
  size = 20,
  roundedBorder = true
}: LogoViewerProps) {
  return (
    <>
      {typeof logo === 'string' ? (
        <img
          src={logo}
          alt={``}
          height={size}
          width={size}
          style={{ borderRadius: roundedBorder ? '50%' : '0' }}
        />
      ) : (
        logo
      )}
    </>
  )
}
