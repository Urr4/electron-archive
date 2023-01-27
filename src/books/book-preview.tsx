import {Button} from "@mui/material";

interface BookPreviewParams {
  name: String,
  description: String
}

export function BookPreview({name, description}: BookPreviewParams) {
  return (
      <Button variant="outlined">Hello {name}, {description}</Button>
  )
}