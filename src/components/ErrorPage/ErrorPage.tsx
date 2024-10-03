import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {/* 型ガードで error がオブジェクトかつ message や statusText を持っているかチェック */}
          {isRouteErrorResponse(error)
            ? error.statusText
            : error instanceof Error
              ? error.message
              : 'Unknown error'}
        </i>
      </p>
    </div>
  )
}

// errorがRouteErrorResponseかどうかを判定するヘルパー関数
function isRouteErrorResponse(error: unknown): error is { statusText: string } {
  return typeof error === 'object' && error !== null && 'statusText' in error
}
