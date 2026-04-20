import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, quantity, requirements, productSku, productName } = body;

    // 验证必填字段
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // 发送邮件
    const { data, error } = await resend.emails.send({
      from: 'Ironland Inquiry <onboarding@resend.dev>',
      to: ['sales@ironland.cn'],
      subject: `新询盘 - ${productSku || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #FF6B00; border-bottom: 2px solid #FF6B00; padding-bottom: 10px;">
            🛠️ 新的产品询盘
          </h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">产品信息</h3>
            <p><strong>产品型号：</strong>${productSku || '未指定'}</p>
            <p><strong>产品名称：</strong>${productName || '未指定'}</p>
          </div>

          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">客户信息</h3>
            <p><strong>姓名：</strong>${name}</p>
            <p><strong>邮箱：</strong>${email}</p>
            <p><strong>需求数量：</strong>${quantity || '未填写'}</p>
          </div>

          ${requirements ? `
          <div style="background: #fff3e6; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FF6B00;">
            <h3 style="color: #333; margin-top: 0;">额外需求</h3>
            <p style="white-space: pre-wrap;">${requirements}</p>
          </div>
          ` : ''}

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>询盘时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>
            <p>此邮件由 Ironland 网站自动生成</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
