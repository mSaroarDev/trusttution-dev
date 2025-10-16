
export function handleErrorMessage(error) {
  if (isErrorResponse(error)) {
    return error.response?.data?.error || error.response?.data?.message || "Something went wrong";
  }

  return "Something went wrong";
}

function isErrorResponse(error) {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error).response === "object"
  );
}