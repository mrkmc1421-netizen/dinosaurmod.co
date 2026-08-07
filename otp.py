// Email Verification Flow OTP
import smtplib
import ssl
import random
import string
from email.message import EmailMessage

# 🦖 Generate OTP
def generate_otp(length=6):
    return ''.join(random.choice(string.digits) for _ in range(length))

# 🌋 Send OTP Email
def send_otp_email(to_email, otp):
    smtp_server = "smtp.gmail.com"
    port = 465  # SSL port
    sender_email = "your_dinosaurmod_email@gmail.com"
    sender_password = "YOUR_APP_PASSWORD"

    message = EmailMessage()
    message["Subject"] = "🦖 DinosaurMod OTP Verification"
    message["From"] = sender_email
    message["To"] = to_email
    message.set_content(
        f"Your DinosaurMod OTP code is: {otp}\n\n"
        "Enter this code to verify your account and unlock Jurassic access."
    )

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender_email, sender_password)
        server.send_message(message)

# 🦕 Full flow
def send_user_otp(email):
    otp = generate_otp()
    send_otp_email(email, otp)
    return otp
