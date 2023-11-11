export function success(response: any) {
  return {
    ok: true,
    response,
  };
}

export function failed(error: unknown) {
  return {
    ok: false,
    error,
  };
}
