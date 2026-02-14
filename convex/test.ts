import { action } from "./_generated/server";
import { v } from "convex/values";

export const checkMyKey = action({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      return "Ошибка: Ключ GEMINI_API_KEY не найден в настройках Convex!";
    }
    return "Успех! Ключ найден. Твой текст: " + args.text;
  },
});
