import React from 'react'

/* The root layout is a simple passthrough so that the (payload) admin route group
   can render its own <html> / <body> without nesting conflicts.
   Frontend pages live inside the (frontend) route group which provides the
   actual HTML shell. */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
