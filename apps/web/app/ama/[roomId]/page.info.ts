import { z } from "zod";

export const Route = {
  name: "AmaRoomId",
  params: z.object({
    roomId: z.string(),
  })
};

