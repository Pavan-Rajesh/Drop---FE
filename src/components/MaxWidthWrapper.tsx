import React from 'react'

const MaxWidthWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <div className="max-w-7xl mx-auto">{children}</div>
}

export default MaxWidthWrapper
