import { MY_MAIL_ID, SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import { json } from "@sveltejs/kit";

sgMail.setApiKey(SENDGRID_API_KEY);

const PDF_GUIDE_URL = "https://narrify-public.s3.eu-central-1.amazonaws.com/sample.pdf";

export async function POST({request}) {
    const requestBody = await request.json();

    const response = await fetch(PDF_GUIDE_URL);
    const pdfBuffer = await response.arrayBuffer();
    const pdfBase64 = Buffer.from(pdfBuffer).toString("base64");

    const customerEmail = requestBody.data.object.customer_details.email;
    const customerName = requestBody.data.object.customer_details.name;

    const message = {
        to: customerEmail,
        from: MY_MAIL_ID,
        subject: "Your Purchase Confirmation - Complete Spain Relocation Guide",
        html: `
            <p>Hi ${customerName},</p>
            <p>Thank you for purchasing the <strong>Complete Spain Relocation Guide</strong>.
            <p>What happens next?</p>
            <ul>
                <li>You will find your ebook attached to this email. Please download it and save it to your device.</li>
                <li>A separate purchase confirmation has been sent to your email as well.</li>
            </ul>
            <p>Thank you for your purchase!</p>
            <p>Regards,<br>Complete Spain Relocation Guide Team</p>
        `,
        attachments: [
            {
                content: pdfBase64,
                filename: "Digital Ebook - Spain Relocation Guide.pdf",
                type: "application/pdf",
                disposition: "attachment",
            }
        ]
    }

    await sgMail.send(message);

    console.log(requestBody);

    return json({response: "Email sent!"});
}