// lib/rate-limit.ts
import Limiter  from "next-rate-limit";

export const limiter = Limiter({
  interval: 60 * 1000, // 1 phút
  uniqueTokenPerInterval: 500, // số lượng IP khác nhau
});
