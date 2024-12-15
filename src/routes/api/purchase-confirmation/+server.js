import { MY_MAIL_ID, SENDGRID_API_KEY, STRIPE_API_KEY, STRIPE_WEBHOOK_SECRET } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import { json } from "@sveltejs/kit";
import Stripe from "stripe";

sgMail.setApiKey(SENDGRID_API_KEY);

const PDF_GUIDE_URL = "https://narrify-public.s3.eu-central-1.amazonaws.com/sample.pdf";

const stripe = new Stripe(STRIPE_API_KEY);

export async function POST({request}) {
    const body = await request.text();  // Get the raw body
    const stripeSignature = request.headers.get('stripe-signature') || "";

    try {
        const stripeEvent = stripe.webhooks.constructEvent(
            body,
            stripeSignature,
            STRIPE_WEBHOOK_SECRET
        );
        
        const customerEmail = stripeEvent.data.object.customer_details.email;
        const customerName = stripeEvent.data.object.customer_details.name;

        const response = await fetch(PDF_GUIDE_URL);
        const pdfBuffer = await response.arrayBuffer();
        const pdfBase64 = Buffer.from(pdfBuffer).toString("base64");

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

        return json({response: "Email sent!"});
    } catch (error) {
        console.error(error);
        return json({error: "Webhook signature verification failed."}, {status: 400});
    }
}