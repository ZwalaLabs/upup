import { z } from "zod";

export const Route = {
  name: "ApiCreateRoom",
  params: z.object({}),
};

export const POST = {
  body: z.object({
    name: z.string(),
  }),
  result: z.object({}),
};
