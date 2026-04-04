from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
import os
import asyncio
import logging
import resend
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
ROOT_DIR = Path(__file__).parent.parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging
logger = logging.getLogger(__name__)

# Initialize Resend with API key from environment
resend.api_key = os.environ.get("RESEND_API_KEY")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
RECIPIENT_EMAIL = os.environ.get("RECIPIENT_EMAIL", "jeeexportsandimports@gmail.com")

# Log configuration (without exposing the full key)
logger.info(f"Resend configured with sender: {SENDER_EMAIL}, recipient: {RECIPIENT_EMAIL}")

router = APIRouter(prefix="/api/contact", tags=["contact"])


class ContactFormData(BaseModel):
    name: str
    email: EmailStr
    phone: str
    country: str
    message: str


def create_email_html(data: ContactFormData) -> str:
    """Create HTML email template for contact form submission"""
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background-color: #4a5568; color: white; padding: 20px; text-align: center; }}
            .content {{ background-color: #f7fafc; padding: 30px; }}
            .field {{ margin-bottom: 15px; }}
            .label {{ font-weight: bold; color: #4a5568; }}
            .value {{ margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #d97706; }}
            .footer {{ text-align: center; padding: 20px; color: #718096; font-size: 12px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>New Contact Form Submission</h2>
                <p>JEE Exports & Imports</p>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">{data.name}</div>
                </div>
                <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">{data.email}</div>
                </div>
                <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value">{data.phone if data.phone else 'Not provided'}</div>
                </div>
                <div class="field">
                    <div class="label">Country:</div>
                    <div class="value">{data.country}</div>
                </div>
                <div class="field">
                    <div class="label">Message:</div>
                    <div class="value">{data.message}</div>
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from the contact form on your website.</p>
                <p>JEE Exports & Imports - Organic Vetiver Manufacturer</p>
            </div>
        </div>
    </body>
    </html>
    """


@router.post("/submit")
async def submit_contact_form(data: ContactFormData):
    """
    Handle contact form submission and send email notification
    """
    try:
        # Create email content
        html_content = create_email_html(data)
        
        # Prepare email parameters
        params = {
            "from": SENDER_EMAIL,
            "to": [RECIPIENT_EMAIL],
            "subject": f"New Contact Inquiry from {data.name} - {data.country}",
            "html": html_content,
            "reply_to": data.email,
        }
        
        # Send email asynchronously (non-blocking)
        email_result = await asyncio.to_thread(resend.Emails.send, params)
        
        logger.info(f"Contact form email sent successfully. Email ID: {email_result.get('id')}")
        
        return {
            "status": "success",
            "message": "Thank you for your inquiry. We'll get back to you soon!",
            "email_id": email_result.get("id")
        }
        
    except Exception as e:
        logger.error(f"Failed to send contact form email: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to send your inquiry. Please try again or contact us directly via email."
        )
