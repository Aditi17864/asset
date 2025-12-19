'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Something went wrong!</CardTitle>
          <CardDescription>
            An unexpected error has occurred. You can try to recover from the error below.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error.message}</p>
        </CardContent>
        <CardFooter>
            <Button onClick={() => reset()}>
                Try again
            </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
