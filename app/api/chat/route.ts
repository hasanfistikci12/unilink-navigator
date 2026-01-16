import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "API key not configured" },
                { status: 500 }
            );
        }

        const { message } = await req.json();
        if (!message) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Context for the AI to behave like an emergency assistant
        const contextPrompt = `
      Sen Unilink Navigator'ın yapay zeka asistanısın. 
      Görevin: Kullanıcılara güvenlik, hukuki haklar, sığınak bulma ve duygusal destek konularında yardımcı olmak.
      
      Kurallar:
      1. Yanıtların kısa, net ve destekleyici olsun.
      2. Çok uzun paragraflar yazma, okunması (ve dinlenmesi) kolay cümleler kur.
      3. Acil bir durum sezersen (şiddet, takip edilme vb.) hemen 112'yi aramasını veya güvenli bir yere geçmesini söyle.
      4. Empati kur ama profesyonel kal.
      
      Kullanıcı mesajı: "${message}"
    `;

        const result = await model.generateContent(contextPrompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ success: true, response: text });
    } catch (error) {
        console.error("AI Error:", error);
        return NextResponse.json(
            { error: "Failed to generate response" },
            { status: 500 }
        );
    }
}
