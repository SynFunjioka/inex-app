import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: string
}

export default function Icon({ iconName, ...rest }: IconProps) {
  return (
    <svg { ...rest }>
      <use xlinkHref={`/sprites-index.svg#icon-${iconName}`} />
    </svg>
  )
}
