import smtplib
from email.message import EmailMessage
import schedule
import time

def send_email(sender, to_list, subject, body):  
    email = EmailMessage()  
    email['From'] = sender  
    email['To'] = ", ".join(to_list)  
    email['Subject'] = subject  
    email.set_content(body)  

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:  
        smtp.login(sender, "tdzdxmawqyrmhnue")  # Gmail App Password
        smtp.send_message(email, from_addr=sender, to_addrs=to_list)  
        print(f"✅ Email sent to {to_list} successfully!")

# Email details
from_email = 'deelipkumar261997@gmail.com'
to_email = ['deelipkumar261997@gmail.com', 'dileepkumar261997@gmail.com']
subject = 'Scheduled Email'
body = 'Hello, this email was sent automatically using schedule at 01:12 AM!'

# Schedule job at 01:12 AM daily
schedule.every().day.at("01:12").do(send_email, from_email, to_email, subject, body)

print("⏳ Scheduler started... Waiting for the scheduled time...")

# Keep script running
while True:
    schedule.run_pending()
    time.sleep(60)  # check every minute
