import "https://deno.land/x/xhr@0.3.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingEmailRequest {
  name: string;
  email: string;
  phone: string;
  service?: string;
  date?: string;
  time?: string;
  subject?: string;
  message?: string;
  notes?: string;
  type: 'booking' | 'contact' | 'consultation';
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: BookingEmailRequest = await req.json();
    console.log("Received booking email request:", { type: requestData.type, email: requestData.email });

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    let emailSubject = "";
    let emailHtml = "";

    if (requestData.type === 'booking') {
      emailSubject = `طلب حجز جلسة جديد من ${requestData.name}`;
      emailHtml = `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #D4AF37 0%, #F4E4C1 100%); padding: 30px; border-radius: 10px; text-align: center;">
            <h1 style="color: #1a1a1a; margin: 0;">✨ طلب حجز جلسة جديد</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">معلومات الحجز</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #555;">الخدمة:</strong> ${requestData.service}</p>
              <p style="margin: 10px 0;"><strong style="color: #555;">التاريخ:</strong> ${requestData.date}</p>
              <p style="margin: 10px 0;"><strong style="color: #555;">الوقت:</strong> ${requestData.time}</p>
            </div>

            <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px; margin-top: 30px;">معلومات العميل</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #555;">الاسم:</strong> ${requestData.name}</p>
              <p style="margin: 10px 0;"><strong style="color: #555;">البريد الإلكتروني:</strong> ${requestData.email}</p>
              <p style="margin: 10px 0;"><strong style="color: #555;">رقم الهاتف:</strong> ${requestData.phone}</p>
              ${requestData.notes ? `<p style="margin: 10px 0;"><strong style="color: #555;">ملاحظات إضافية:</strong><br/>${requestData.notes}</p>` : ''}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
            <p>Lumina Wellness | +971 56 757 7627</p>
          </div>
        </div>
      `;
    } else if (requestData.type === 'contact') {
      emailSubject = `استفسار جديد من ${requestData.name}`;
      emailHtml = `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #D4AF37 0%, #F4E4C1 100%); padding: 30px; border-radius: 10px; text-align: center;">
            <h1 style="color: #1a1a1a; margin: 0;">💌 استفسار جديد</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">معلومات المرسل</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #555;">الاسم:</strong> ${requestData.name}</p>
              <p style="margin: 10px 0;"><strong style="color: #555;">البريد الإلكتروني:</strong> ${requestData.email}</p>
              <p style="margin: 10px 0;"><strong style="color: #555;">رقم الهاتف:</strong> ${requestData.phone}</p>
              <p style="margin: 10px 0;"><strong style="color: #555;">الموضوع:</strong> ${requestData.subject}</p>
            </div>

            <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px; margin-top: 30px;">الرسالة</h2>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="white-space: pre-wrap; line-height: 1.6;">${requestData.message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
            <p>Lumina Wellness | +971 56 757 7627</p>
          </div>
        </div>
      `;
    } else if (requestData.type === 'consultation') {
      emailSubject = `طلب استشارة مجانية من ${requestData.name}`;
      emailHtml = `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #D4AF37 0%, #F4E4C1 100%); padding: 30px; border-radius: 10px; text-align: center;">
            <h1 style="color: #1a1a1a; margin: 0;">🌟 طلب استشارة مجانية</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">معلومات المستفسر</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #555;">الاسم:</strong> ${requestData.name}</p>
              <p style="margin: 10px 0;"><strong style="color: #555;">البريد الإلكتروني:</strong> ${requestData.email}</p>
              <p style="margin: 10px 0;"><strong style="color: #555;">رقم الهاتف:</strong> ${requestData.phone}</p>
              ${requestData.message ? `
                <h3 style="color: #D4AF37; margin-top: 20px;">تفاصيل الاستشارة</h3>
                <p style="white-space: pre-wrap; line-height: 1.6; background-color: #f9fafb; padding: 15px; border-radius: 8px;">${requestData.message}</p>
              ` : ''}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
            <p>Lumina Wellness | +971 56 757 7627</p>
          </div>
        </div>
      `;
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Lumina Wellness <onboarding@resend.dev>",
        to: ["azadirsudan@gmail.com"],
        subject: emailSubject,
        html: emailHtml,
      }),
    });

    const emailData = await emailResponse.json();
    
    if (!emailResponse.ok) {
      console.error("Resend API error:", emailData);
      throw new Error(`Resend API error: ${JSON.stringify(emailData)}`);
    }

    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify({ success: true, data: emailData }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
