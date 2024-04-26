import { safeFetch } from "./Safefetch";
import z from "zod";

export const search = async (minimum: number, maximum: number) =>
  safeFetch({
    method: "GET",
    path: `/api/hotels?min=${minimum}&max=${maximum}`,
    schema: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        pricePerNightInUSD: z.number(),
      })
    ),
    payload: { minimum, maximum },
  });
