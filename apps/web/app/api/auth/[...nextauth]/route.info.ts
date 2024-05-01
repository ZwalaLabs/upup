import { z } from "zod";

export const Route = {
  name: "ApiAuthNextauth",
  params: z.object({
    nextauth: z.string().array(),
  })
};

